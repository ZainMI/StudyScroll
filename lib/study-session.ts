import type { Card } from "./cards";
export type StudyOrder = "adaptive" | "chronological" | "shuffle";
export function shuffle<T>(items: T[], random = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
// Source sequence, then page/section, with authored order as a stable tie-breaker.
export function chronological(cards: Card[]): Card[] {
  function location(c: Card): [number, number] {
    const positions = (c.sources ?? []).map((s) => {
      const numbered = s.path.match(/(?:lecture[_-]|(?:IF_)?ch|\/ps)(\d+)/i);
      const section = s.locator.match(/§(\d+)/);
      return [
        numbered ? Number(numbered[1]) : 1000,
        s.page ?? (section ? Number(section[1]) : 0),
      ] as [number, number];
    });
    return positions.sort((a, b) => a[0] - b[0] || a[1] - b[1])[0] ?? [1000, 0];
  }
  return [...cards].sort((a, b) => {
    const x = location(a),
      y = location(b);
    return (
      a.course.localeCompare(b.course, undefined, { numeric: true }) ||
      x[0] - y[0] ||
      x[1] - y[1]
    );
  });
}
