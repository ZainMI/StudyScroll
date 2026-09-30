import type { Card } from "./cards";
export type Rating = "again" | "hard" | "good" | "easy";
export type Review = {
  due: number;
  lastReviewed: number;
  interval: number;
  attempts: number;
  lapses: number;
  successes: number;
  rating: Rating;
};
export type Reviews = Record<string, Review>;
export const DAY = 86400000;
export function schedule(
  previous: Review | undefined,
  rating: Rating,
  now: number,
): Review {
  // Early practice never earns a longer interval. Only delayed retrieval does.
  const early = previous && previous.due > now;
  let interval =
    rating === "again"
      ? 10 * 60000
      : rating === "hard"
        ? previous
          ? Math.max(DAY / 4, previous.interval * 1.2)
          : DAY / 4
        : rating === "good"
          ? previous
            ? Math.max(DAY, previous.interval * 2.5)
            : DAY
          : previous
            ? Math.max(4 * DAY, previous.interval * 3.5)
            : 4 * DAY;
  interval = Math.min(365 * DAY, Math.round(interval));
  let due = now + interval;
  if (early && rating !== "again") {
    due = rating === "hard" ? Math.min(previous.due, due) : previous.due;
    interval =
      due === previous.due
        ? previous.interval
        : Math.min(previous.interval, due - now);
  }
  return {
    due,
    interval,
    lastReviewed: now,
    rating,
    attempts: (previous?.attempts ?? 0) + 1,
    lapses: (previous?.lapses ?? 0) + (rating === "again" ? 1 : 0),
    successes:
      rating === "again" ? 0 : (previous?.successes ?? 0) + (early ? 0 : 1),
  };
}
export function readReviews(value: unknown, ids: Set<string>): Reviews {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      ([id, r]) =>
        ids.has(id) &&
        r &&
        ["again", "hard", "good", "easy"].includes(r.rating) &&
        [
          "due",
          "lastReviewed",
          "interval",
          "attempts",
          "lapses",
          "successes",
        ].every(
          (k) => typeof r[k] === "number" && Number.isFinite(r[k]) && r[k] >= 0,
        ),
    ),
  );
}
export function learningQueue(
  cards: Card[],
  reviews: Reviews,
  now: number,
): Card[] {
  const due = cards
    .filter((c) => reviews[c.id]?.due <= now)
    .sort((a, b) => reviews[a.id].due - reviews[b.id].due);
  const pending = cards.filter((c) => !reviews[c.id]);
  const fresh: Card[] = [];
  const placed = new Set(Object.keys(reviews));
  const available = new Set(cards.map((c) => c.id));
  let lastCourse = "",
    lastTopic = "";
  while (pending.length) {
    const eligible = pending.filter((c) =>
      (c.prerequisiteIds ?? []).every(
        (id) => placed.has(id) || !available.has(id),
      ),
    );
    // Cyclic or imported dependencies must not hide material forever.
    const pool = eligible.length ? eligible : pending;
    const next =
      pool.find((c) => c.course !== lastCourse && c.topic !== lastTopic) ??
      pool.find((c) => c.topic !== lastTopic) ??
      pool[0];
    fresh.push(next);
    placed.add(next.id);
    pending.splice(pending.indexOf(next), 1);
    lastCourse = next.course;
    lastTopic = next.topic;
  }
  const result: Card[] = [];
  // Three overdue reviews per new card keeps review debt ahead of novelty.
  while (due.length || fresh.length) {
    result.push(...due.splice(0, 3));
    if (fresh.length) result.push(fresh.shift()!);
  }
  return result;
}
export function intervalLabel(milliseconds: number) {
  if (milliseconds < 3600000)
    return `${Math.max(1, Math.round(milliseconds / 60000))}m`;
  if (milliseconds < DAY) return `${Math.round(milliseconds / 3600000)}h`;
  return `${Math.round(milliseconds / DAY)}d`;
}
