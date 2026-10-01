"use client";
import { ArrowUp, KeyRound, X } from "lucide-react";
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
  const [editingCode, setEditingCode] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
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
      if (response.status === 401) {
        setEditingCode(true);
        try {
          localStorage.removeItem("studyscroll-tutor-code");
          sessionStorage.removeItem("studyscroll-tutor-code");
        } catch {}
      }
      if (!response.ok)
        throw new Error(
          data.error || "The tutor is unavailable. Please try again.",
        );
      if (typeof data.answer !== "string")
        throw new Error("No explanation received. Please try again.");
      try {
        localStorage.setItem("studyscroll-tutor-code", code);
        sessionStorage.removeItem("studyscroll-tutor-code");
      } catch {}
      setEditingCode(false);
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
          <h2 id="tutor-title">Ask about this</h2>
          <button onClick={onClose} aria-label="Close tutor">
            <X size={20} />
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
          {messages.map((m, i) => (
            <div key={i} className={`tutor-message ${m.role}`}>
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
        {messages.length === 0 && (
          <div className="tutor-prompts">
            {["Explain why", "Give an example"].map((prompt) => (
              <button key={prompt} disabled={busy} onClick={() => ask(prompt)}>
                {prompt}
              </button>
            ))}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void ask(question);
          }}
        >
          <div className="tutor-compose">
            <textarea
              id="tutor-question"
              aria-label="Your follow-up question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={1200}
              rows={2}
              placeholder="What would you like to understand?"
              disabled={busy}
            />
            <button
              className="tutor-send"
              aria-label="Ask"
              disabled={busy || !question.trim()}
              type="submit"
            >
              <ArrowUp size={19} />
            </button>
          </div>
          {(!code || editingCode) && (
            <div className="tutor-access">
              <input
                aria-label="Study access code"
                type="password"
                autoComplete="off"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setEditingCode(true);
                }}
                placeholder="Study access code"
                disabled={busy}
              />
              <small>Remembered on this device after your first reply.</small>
              {editingCode && (
                <button
                  type="button"
                  onClick={() => {
                    setCode("");
                    setEditingCode(false);
                    try {
                      localStorage.removeItem("studyscroll-tutor-code");
                      sessionStorage.removeItem("studyscroll-tutor-code");
                    } catch {}
                  }}
                >
                  Forget code
                </button>
              )}
            </div>
          )}
        </form>
        <div className="tutor-bottom">
          <span>AI can make mistakes.</span>
          {code && (
            <button
              aria-label="Change access code"
              title="Change access code"
              onClick={() => setEditingCode((value) => !value)}
            >
              <KeyRound size={15} />
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
}
