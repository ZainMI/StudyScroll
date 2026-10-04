import type { Card } from "./cards";
import type { Reviews } from "./learning";
import { shuffle } from "./study-session";
export type QuizFormat = "mixed" | "mcq" | "true_false";
export type QuizQuestion = {
  cardId: string;
  type: "mcq" | "true_false";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};
export type QuizResult = {
  attempts: number;
  correct: number;
  lastCorrect: boolean;
  lastAnswered: number;
};
export type QuizResults = Record<string, QuizResult>;
export function readQuizResults(value: unknown, ids: Set<string>): QuizResults {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      ([id, r]) =>
        ids.has(id) &&
        r &&
        typeof r.lastCorrect === "boolean" &&
        Number.isSafeInteger(r.attempts) &&
        r.attempts > 0 &&
        Number.isSafeInteger(r.correct) &&
        r.correct >= 0 &&
        r.correct <= r.attempts &&
        Number.isFinite(r.lastAnswered) &&
        r.lastAnswered >= 0,
    ),
  );
}
export function recordQuizResult(
  results: QuizResults,
  id: string,
  correct: boolean,
  now = Date.now(),
): QuizResults {
  const previous = results[id];
  return {
    ...results,
    [id]: {
      attempts: (previous?.attempts ?? 0) + 1,
      correct: (previous?.correct ?? 0) + Number(correct),
      lastCorrect: correct,
      lastAnswered: now,
    },
  };
}
export function quizCandidates(
  cards: Card[],
  reviews: Reviews,
  results: QuizResults,
  count = 6,
): Card[] {
  const priority = (c: Card) =>
    results[c.id]?.lastCorrect === false
      ? 0
      : ["again", "hard"].includes(reviews[c.id]?.rating)
        ? 1
        : !results[c.id]
          ? 2
          : 3;
  // Random ties expose more of the selection; recent correct answers wait behind untested ideas.
  return shuffle(cards)
    .sort(
      (a, b) =>
        priority(a) - priority(b) ||
        (priority(a) === 3
          ? results[a.id].lastAnswered - results[b.id].lastAnswered
          : 0),
    )
    .slice(0, Math.min(20, Math.max(1, Math.floor(count))));
}
export function validateQuiz(
  value: unknown,
  allowedIds: Set<string>,
  format: QuizFormat,
  count: number,
): QuizQuestion[] | null {
  const qs = (value as { questions?: unknown })?.questions;
  if (!Array.isArray(qs) || qs.length !== count) return null;
  const seen = new Set<string>();
  for (const q of qs) {
    if (
      !q ||
      !allowedIds.has(q.cardId) ||
      seen.has(q.cardId) ||
      !["mcq", "true_false"].includes(q.type) ||
      (format !== "mixed" && q.type !== format)
    )
      return null;
    seen.add(q.cardId);
    if (
      typeof q.prompt !== "string" ||
      !q.prompt.trim() ||
      q.prompt.length > 420 ||
      typeof q.explanation !== "string" ||
      !q.explanation.trim() ||
      q.explanation.length > 900
    )
      return null;
    if (
      !Array.isArray(q.options) ||
      q.options.length !== (q.type === "mcq" ? 4 : 2) ||
      q.options.some(
        (s: unknown) => typeof s !== "string" || !s.trim() || s.length > 200,
      ) ||
      new Set(q.options.map((s: string) => s.trim().toLowerCase())).size !==
        q.options.length
    )
      return null;
    if (
      !Number.isInteger(q.correctIndex) ||
      q.correctIndex < 0 ||
      q.correctIndex >= q.options.length
    )
      return null;
    if (
      q.type === "true_false" &&
      (q.options[0] !== "True" || q.options[1] !== "False")
    )
      return null;
  }
  if (
    format === "mixed" &&
    count > 1 &&
    new Set(qs.map((q) => q.type)).size !== 2
  )
    return null;
  return qs;
}
