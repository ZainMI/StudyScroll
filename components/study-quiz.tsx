"use client";
import { useEffect, useRef, useState } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { MathText } from "./math-text";
import type { Card } from "@/lib/cards";
import type { Reviews } from "@/lib/learning";
import {
  quizCandidates,
  validateQuiz,
  type QuizFormat,
  type QuizQuestion,
  type QuizResults,
} from "@/lib/quiz";
import { shuffle } from "@/lib/study-session";
export function StudyQuiz({
  cards,
  reviews,
  results,
  onResult,
  onClose,
  onReview,
}: {
  cards: Card[];
  reviews: Reviews;
  results: QuizResults;
  onResult: (id: string, correct: boolean) => void;
  onClose: () => void;
  onReview: (ids: string[]) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null),
    pending = useRef<AbortController | null>(null),
    answered = useRef(false);
  const [code, setCode] = useState(""),
    [editingCode, setEditingCode] = useState(false),
    [format, setFormat] = useState<QuizFormat>("mixed");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]),
    [index, setIndex] = useState(0),
    [picked, setPicked] = useState<number | null>(null);
  const [outcomes, setOutcomes] = useState<{ id: string; correct: boolean }[]>(
      [],
    ),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    try {
      setCode(
        localStorage.getItem("studyscroll-tutor-code") ??
          sessionStorage.getItem("studyscroll-tutor-code") ??
          "",
      );
    } catch {}
    return () => {
      pending.current?.abort();
      previous?.focus();
    };
  }, []);
  useEffect(() => {
    heading.current?.focus();
    dialog.current?.scrollTo({ top: 0 });
  }, [index, questions]);
  async function generate() {
    if (pending.current) return;
    if (!code.trim()) {
      setEditingCode(true);
      setError(
        "Enter your study access code, the same one used for the card tutor.",
      );
      return;
    }
    const chosen = quizCandidates(cards, reviews, results);
    const controller = new AbortController();
    pending.current = controller;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-study-access-code": code,
        },
        body: JSON.stringify({ cardIds: chosen.map((c) => c.id), format }),
        signal: controller.signal,
      });
      const data = await response.json();
      if (response.status === 401) {
        setEditingCode(true);
        try {
          localStorage.removeItem("studyscroll-tutor-code");
          sessionStorage.removeItem("studyscroll-tutor-code");
        } catch {}
      }
      if (!response.ok)
        throw new Error(
          data.error || "Could not create this quiz. Please try again.",
        );
      const validated = validateQuiz(
        data,
        new Set(chosen.map((c) => c.id)),
        format,
        chosen.length,
      );
      if (!validated)
        throw new Error("This quiz was incomplete. Please try again.");
      const mixed = validated.map((q) => {
        if (q.type === "true_false") return q;
        const order = shuffle(q.options.map((_, i) => i));
        return {
          ...q,
          options: order.map((i) => q.options[i]),
          correctIndex: order.indexOf(q.correctIndex),
        };
      });
      setQuestions(mixed);
      setIndex(0);
      setPicked(null);
      setOutcomes([]);
      answered.current = false;
      setEditingCode(false);
      try {
        localStorage.setItem("studyscroll-tutor-code", code);
        sessionStorage.removeItem("studyscroll-tutor-code");
      } catch {}
    } catch (e) {
      if (!controller.signal.aborted)
        setError(e instanceof Error ? e.message : "Could not connect.");
    } finally {
      if (!controller.signal.aborted) setBusy(false);
      pending.current = null;
    }
  }
  const q = questions[index],
    done = questions.length > 0 && !q;
  const source = q ? cards.find((c) => c.id === q.cardId) : undefined;
  const misses = outcomes.filter((o) => !o.correct).map((o) => o.id);
  const next = () => {
    setIndex((i) => i + 1);
    setPicked(null);
    answered.current = false;
  };
  return (
    <dialog
      ref={dialog}
      className="quiz-dialog"
      aria-labelledby="quiz-title"
      onCancel={onClose}
    >
      <header className="quiz-header">
        <span>
          <Sparkles size={16} /> Intuition practice
        </span>
        <button aria-label="Close quiz" onClick={onClose}>
          <X size={22} />
        </button>
      </header>
      {!questions.length ? (
        <div className="quiz-setup">
          <p className="eyebrow">UNDERSTAND THE WHY</p>
          <h2 id="quiz-title" ref={heading} tabIndex={-1}>
            A little test of understanding.
          </h2>
          <p>
            {Math.min(cards.length, 6)} short questions from your selection. No
            calculator. No pen and paper.
          </p>
          <p className="quiz-note">
            Missed quiz answers and difficult cards come first. New questions
            help you revisit the idea from another angle.
          </p>
          <label className="quiz-format">
            Question format
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as QuizFormat)}
              disabled={busy}
            >
              <option value="mixed">A mix of both</option>
              <option value="mcq">Multiple choice</option>
              <option value="true_false">True or false</option>
            </select>
          </label>
        </div>
      ) : done ? (
        <div className="quiz-summary">
          <p className="eyebrow">ROUND COMPLETE</p>
          <h2 id="quiz-title" ref={heading} tabIndex={-1}>
            {outcomes.filter((o) => o.correct).length} of {outcomes.length}{" "}
            correct
          </h2>
          <p>
            {questions.length - outcomes.length
              ? `${questions.length - outcomes.length} skipped. `
              : ""}
            {misses.length
              ? "These concepts are worth another look."
              : "Keep building the explanation behind each answer."}
          </p>
          {misses.length > 0 && (
            <ul>
              {misses.map((id) => (
                <li key={id}>
                  <MathText>
                    {cards.find((c) => c.id === id)?.title ?? ""}
                  </MathText>
                </li>
              ))}
            </ul>
          )}
          <p className="quiz-note">
            Results are saved on this device separately from flashcard recall.
            Correct recognition doesn’t mean you’ve mastered a concept.
          </p>
          {misses.length > 0 && (
            <button className="quiz-secondary" onClick={() => onReview(misses)}>
              Review missed concepts as cards
            </button>
          )}
        </div>
      ) : (
        <div className="quiz-question">
          <div className="quiz-position">
            <span>
              Question {index + 1} of {questions.length}
            </span>
            <span>
              {q.type === "mcq" ? "Multiple choice" : "True or false"}
            </span>
          </div>
          <progress
            value={index}
            max={questions.length}
            aria-label="Quiz progress"
          />
          <p className="quiz-topic">
            {source?.course} · {source?.topic}
          </p>
          <h2 id="quiz-title" ref={heading} tabIndex={-1}>
            <MathText>{q.prompt}</MathText>
          </h2>
          <div className="quiz-options">
            {q.options.map((option, i) => (
              <button
                key={i}
                disabled={picked !== null}
                className={
                  picked === null
                    ? ""
                    : i === q.correctIndex
                      ? "is-correct"
                      : picked === i
                        ? "is-incorrect"
                        : ""
                }
                onClick={() => {
                  if (answered.current) return;
                  answered.current = true;
                  setPicked(i);
                  const correct = i === q.correctIndex;
                  setOutcomes((o) => [...o, { id: q.cardId, correct }]);
                  onResult(q.cardId, correct);
                }}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + i)}
                </span>
                <MathText>{option}</MathText>
                {picked !== null && i === q.correctIndex && (
                  <small>Correct answer</small>
                )}
                {picked === i && i !== q.correctIndex && (
                  <small>Your answer</small>
                )}
              </button>
            ))}
          </div>
          {picked !== null && (
            <div className="quiz-explanation" role="status">
              <strong>
                {picked === q.correctIndex
                  ? "That’s right."
                  : "A useful distinction."}
              </strong>
              <p>
                <MathText>{q.explanation}</MathText>
              </p>
              <details>
                <summary>Compare with the source card</summary>
                <p>
                  <MathText>{source?.answer ?? ""}</MathText>
                </p>
              </details>
            </div>
          )}
          <div className="quiz-actions">
            {picked === null ? (
              <button className="quiz-secondary" onClick={next}>
                Skip question
              </button>
            ) : (
              <button className="primary" onClick={next}>
                {index === questions.length - 1
                  ? "See results"
                  : "Next question"}{" "}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}
      {error && (
        <p className="quiz-error" role="alert">
          {error}
        </p>
      )}
      {(!questions.length || done) && (
        <footer className="quiz-footer">
          {(!code || editingCode) && (
            <label>
              Study access code
              <input
                type="password"
                aria-label="Study access code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                autoComplete="off"
              />
              <small>Use your tutor access code, not the API key.</small>
            </label>
          )}
          <button
            className="primary"
            disabled={busy || !cards.length}
            onClick={generate}
          >
            {busy
              ? "Creating your questions…"
              : done
                ? "Practice another round"
                : "Create quiz"}{" "}
            {!busy && <ArrowRight size={16} />}
          </button>
          {code && !editingCode && (
            <button className="quiz-code" onClick={() => setEditingCode(true)}>
              Change access code
            </button>
          )}
        </footer>
      )}
      <p className="quiz-disclosure">
        AI-generated practice · Check explanations against your course cards.
      </p>
    </dialog>
  );
}
