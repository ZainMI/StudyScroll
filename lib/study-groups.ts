import type { Card } from "./cards";
export type StudyGroup = {
  id: string;
  mode: "topics" | "lectures";
  course: string;
  label: string;
  cardIds: string[];
};
export function studyGroups(
  cards: Card[],
  mode: "topics" | "lectures",
): StudyGroup[] {
  const groups = new Map<string, StudyGroup>();
  for (const card of cards) {
    const labels =
      mode === "topics"
        ? [card.topic]
        : (card.sources ?? []).flatMap((source) => {
            const quiz = source.path.match(
              /\/quiz\/quiz(\d+)\/(quiz\d+review|solns(\d{2}))\.pdf$/i,
            );
            if (quiz)
              return [
                quiz[3]
                  ? `Quiz ${Number(quiz[1])} · 20${quiz[3]} practice`
                  : `Quiz ${Number(quiz[1])} review`,
              ];
            const lecture = source.path.match(/lecture[_-](\d+)/i);
            if (lecture) return [`Lecture ${Number(lecture[1])}`];
            const chapter = source.path.match(
              /(?:^|\/)(?:IF_)?ch0*(\d+)(?:[^0-9]|$)/i,
            );
            if (chapter) return [`Chapter ${Number(chapter[1])}`];
            const notes = source.path.match(
              /notes-(linalg|lstheory|lsinf)\.pdf$/,
            );
            if (notes)
              return [
                {
                  linalg: "Linear algebra notes",
                  lstheory: "Least-squares theory notes",
                  lsinf: "Inference notes",
                }[notes[1] as "linalg" | "lstheory" | "lsinf"],
              ];
            // Keep AM 205's assignment/textbook group when adding quiz citations.
            return source.path.startsWith("courses/harvard/am205/")
              ? ["Assignments & supporting material"]
              : [];
          });
    for (const label of new Set(
      labels.length ? labels : ["Assignments & supporting material"],
    )) {
      const id = JSON.stringify([mode, card.course, label]);
      const group = groups.get(id) ?? {
        id,
        mode,
        course: card.course,
        label,
        cardIds: [],
      };
      group.cardIds.push(card.id);
      groups.set(id, group);
    }
  }
  return [...groups.values()].sort(
    (a, b) =>
      a.course.localeCompare(b.course, undefined, { numeric: true }) ||
      a.label.localeCompare(b.label, undefined, { numeric: true }),
  );
}
