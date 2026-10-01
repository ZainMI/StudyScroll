"use client";
import { MathText } from "./math-text";
import { useEffect, useRef, useState } from "react";
import type { Card } from "@/lib/cards";
type Message = { role: "user" | "assistant"; content: string };
export function CardTutor({
  card,
  onClose,
}: {
  card: Card;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const pending = useRef<AbortController | null>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    try {
      setCode(sessionStorage.getItem("studyscroll-tutor-code") ?? "");
    } catch {}
    return () => {
      pending.current?.abort();
      previous?.focus();
    };
  }, []);
  useEffect(() => {
    const container = bottom.current?.parentElement;
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages, busy, error]);
  async function ask(text: string) {
    if (pending.current || !text.trim()) return;
    if (!code.trim()) {
      setError(
        "Enter your study access code first. This is not your Harvard API key.",
      );
      return;
    }
    const next: Message[] = [
      ...messages.slice(-8),
      { role: "user", content: text.trim() },
    ];
    const controller = new AbortController();
    pending.current = controller;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-study-access-code": code,
        },
        body: JSON.stringify({ cardId: card.id, messages: next }),
        signal: controller.signal,
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.error || "The tutor is unavailable. Please try again.",
        );
      if (typeof data.answer !== "string")
        throw new Error("No explanation received. Please try again.");
      try {
        sessionStorage.setItem("studyscroll-tutor-code", code);
      } catch {}
      setMessages([...next, { role: "assistant", content: data.answer }]);
      setQuestion("");
    } catch (e) {
      if (!controller.signal.aborted)
        setError(
          e instanceof Error
            ? e.message
            : "Couldn’t connect. Please try again.",
        );
    } finally {
      pending.current = null;
      setBusy(false);
    }
  }
  return (
    <dialog
      ref={dialog}
      className="tutor-sheet"
      aria-labelledby="tutor-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="tutor-inner">
        <div className="tutor-header">
          <div>
            <small>YOUR CARD TUTOR</small>
            <h2 id="tutor-title">Let’s make it click.</h2>
          </div>
          <button onClick={onClose} aria-label="Close tutor">
            ✕
          </button>
        </div>
        <p className="tutor-context">
          <MathText>{card.title}</MathText>
        </p>
        <div
          className="tutor-chat"
          role="log"
          aria-label="Card conversation"
          aria-live="polite"
        >
          {messages.length === 0 && (
            <p>
              Ask about the reasoning, work through an example, or untangle a
              confusing step.
            </p>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`tutor-message ${m.role}`}>
              <small>{m.role === "user" ? "YOU" : "TUTOR"}</small>
              <p>
                <MathText>{m.content}</MathText>
              </p>
            </div>
          ))}
          {busy && <p role="status">Thinking through this card…</p>}
          {error && (
            <p className="tutor-error" role="alert">
              {error}
            </p>
          )}
          <div ref={bottom} />
        </div>
        <div className="tutor-prompts">
          {["Explain why", "Give an example", "Make it simpler"].map(
            (prompt) => (
              <button key={prompt} disabled={busy} onClick={() => ask(prompt)}>
                {prompt}
              </button>
            ),
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void ask(question);
          }}
        >
          <label htmlFor="tutor-question">Your follow-up question</label>
          <div className="tutor-compose">
            <textarea
              id="tutor-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={1200}
              rows={2}
              placeholder="Why does that happen?"
              disabled={busy}
            />
            <button
              className="primary"
              disabled={busy || !question.trim()}
              type="submit"
            >
              Ask
            </button>
          </div>
          <details className="tutor-access" open={!code || undefined}>
            <summary>Study access code</summary>
            <input
              aria-label="Study access code"
              type="password"
              autoComplete="off"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="App access code, not API key"
            />
          </details>
        </form>
        <footer className="tutor-note">
          AI can make mistakes. Only this card, its prerequisites, and recent
          messages are sent. Chat clears when closed.
        </footer>
      </div>
    </dialog>
  );
}
