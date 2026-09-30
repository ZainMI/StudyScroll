import master from "@/content/master-feed.json";
export type Source = { path: string; locator: string; page?: number };
export type Card = {
  id: string;
  course: string;
  school?: string;
  topic: string;
  kind: string;
  title: string;
  body: string;
  format?: string;
  visual?: {
    type: string;
    label: string;
    items: { label: string; value: string }[];
  };
  answer: string;
  source: string;
  color: string;
  takeaway?: string;
  sources?: Source[];
  relatedCourses?: string[];
  seconds?: number;
  prerequisiteIds?: string[];
};
export const curated: Card[] = master.cards;
// Retired curated IDs must not be restored as imports from older phone storage.
export const retiredCardIds = new Set([
  "am207-input-output-uncertainty",
  "am207-prediction-distribution",
  "am207-simulation-model",
  "am207-system-model",
  "am207-validation-question",
  "am207-verification-question",
]);
export function makeCards(
  text: string,
  course: string,
  source: string,
): Card[] {
  const chunks = text
    .replace(/\r/g, "")
    .split(/\n\s*\n|(?<=[.!?])\s+(?=[A-Z])/)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter((s) => s.length > 90 && s.length < 1800);
  return chunks.map((chunk, i) => {
    const words = chunk.split(" ");
    const candidates = words
      .map((w, j) => ({ w, j }))
      .filter(({ w, j }) => j > 3 && /^[a-zA-Z]{6,}$/.test(w));
    const chosen = candidates[Math.floor(candidates.length / 2)];
    const body = chosen
      ? words.map((w, j) => (j === chosen.j ? "________" : w)).join(" ")
      : chunk;
    return {
      id: crypto.randomUUID(),
      course,
      topic: "From your material",
      kind: chosen ? "FILL THE GAP" : "READ & REFLECT",
      title: chosen
        ? "Can you complete the idea?"
        : "Pause. Read. Make it stick.",
      body,
      answer: chosen
        ? `${chosen.w}\n\n${chunk}`
        : `Try explaining this passage in your own words, then compare it with the original:\n\n${chunk}`,
      source,
      color: ["purple", "green", "orange"][i % 3],
    };
  });
}
