# StudyScroll card creation guide

Use this document as the instruction prompt for an LLM given course materials and the current StudyScroll repository. The goal is comprehensive, concise learning material with visual variety—not a summary deck or a fixed card count.

## Copyable task prompt

Read the supplied lecture notes, assignments, and relevant supporting textbook sections. Create a complete set of StudyScroll cards using the schema and workflow below. Do not limit the number of cards, target a round number, or omit material to fit a budget. Work in batches if necessary and maintain a coverage ledger until all in-scope objectives are addressed. Preserve existing cards, IDs, citations, and progress compatibility unless explicitly asked to revise them. Report incomplete or inaccessible material honestly.

Begin by inspecting `lib/cards.ts`, `components/card-visual.tsx`, `scripts/build-feed.mjs`, the existing feed, and coverage ledger: these files are the executable contract. Do not invent unsupported fields or card renderers. Produce changes to the canonical JSON, map every new card to a learning objective, regenerate the readable feed, and validate.

## 1. Establish scope and inventory

- List each source, course, lecture/assignment, page range, and extraction status. Inspect figures, mathematical notation, and tables when text extraction is incomplete. Never infer the content of unreadable pages.
- Use current lectures and assignments; use textbooks only to support that scope. Do not silently include a whole textbook or unassigned future lectures.
- Current repository scope: AM 205 assignments 1–2, Quiz 1 review, 2023–2025 Quiz 1 practice, the comprehensive Quiz 1 study sheet, and supporting concepts; AM 207 lectures 1–6 (exclude lecture 0); STAT 244 uploaded linear algebra, least-squares theory, and inference notes; AM 209a lectures 1–8 from the supplied COMPSCI 1090A Ed material. UBuffalo International Finance covers the eight supplied PDFs: Chapters 1–5 slides and Chapter 2–4 homework. Recheck scope when new files arrive.
- Inventory definitions, assumptions, notation, identities, derivations, algorithms, examples, interpretation, limitations, counterexamples, and assignment skills. Administrative/history slides can be excluded with a reason. Do not skip difficult proofs or calculations just because they require multiple cards.
- If sources disagree, distinguish their conventions and record the discrepancy. If something cannot be verified, flag it in the ledger rather than asserting it as fact.

## 2. Build coverage before writing

For every source section, create learning objectives with source locators and status. Break compound objectives apart. Map each objective to card IDs; keep unresolved objectives visible. A source citation is not evidence that its entire page is covered.

Coverage means that all in-scope knowledge and required reasoning are represented, not that the learner has mastered them. New visual cards supplement coverage; they do not replace detailed derivations or practice with decorative duplicates.

## 3. Author a teaching sequence for each objective

Use as many steps as the objective needs. A useful pattern is:

1. **Recall:** ask for one definition, relationship, or assumption.
2. **Intuition:** ask why it works or what changes when an input changes.
3. **Predict:** present a small equation, example, or intermediate state; ask for the next result before revealing it.
4. **Compare:** contrast plausible methods, models, or interpretations under explicit conditions.
5. **Spot the mistake:** label a deliberately incorrect or incomplete claim and ask the learner to repair it.
6. **Apply:** calculate a small example or choose a method for a concrete situation.
7. **Connect:** transfer the idea to another already-introduced concept, if helpful.

Do not force seven cards per concept. Simple facts may need fewer; substantial proofs and algorithms need more. Avoid near-duplicate paraphrases that add no retrieval value. For a derivation, include assumptions, key transitions, why those transitions are valid, and a synthesis question. Include problems that require reasoning, not just formula recognition.

Preserve this pedagogical order in the authored list and set `prerequisiteIds` for genuinely necessary earlier cards. IDs must exist and dependencies should be acyclic. The site's scheduler interleaves topics and prioritizes due reviews, so JSON order is not a guaranteed playback sequence. Each card must be understandable independently; never say “as on the previous card.” Missing prerequisites outside a chosen study group do not block cards.

## 4. Keep reading light without losing meaning

- One clear question per front; `title` must end in `?`.
- Keep `body` empty unless a short setup is necessary.
- Answers must be at most 65 whitespace-separated words for `format: "flashcard"`. Split larger ideas into linked cards; never truncate essential assumptions to meet the limit.
- Write a short `takeaway` explaining intuition, not merely repeating the answer.
- Specify dimensions, units, distributional assumptions, conditioning, and sign conventions when relevant.
- Use original wording. Cite course material accurately; label invented numeric examples as authored companions. Do not present those examples as quotations or official solutions.
- Do not leak the answer through a visual label, caption, title, or setup. Intentionally flawed statements must be explicitly labeled as claims or mistakes.
- Write math in LaTeX: `\(...\)` for inline math and `\[...\]` for a standalone equation. In JSON, double each backslash: `"answer": "The standard error is \\(\\sigma/\\sqrt{N}\\)."`. Use `\frac`, `\sqrt`, `\sum`, explicit indices, and `bmatrix` for matrices. Never use dollar delimiters: finance cards contain literal currency amounts. KaTeX renders the notation with MathML for accessibility. Do not supply HTML or executable content.
- Test understanding, not terminology recall. Prefer a concrete situation, a prediction, a reason, or a comparison over “Define X.” Introduce necessary formal names in the explanation, attached to their plain-language meaning.
- Keep concept names consistent across cards. Use **expected value** for a probability-weighted average, **sample mean** for an average of observed data, **reaction rate** (with “propensity” explained if the lecture uses it), **quantity of interest** for an observable, and **transition rule** for a transition kernel. A **probability measure** assigns probabilities to events; it is not another name for expected value. Keep distinct concepts distinct.
- Explain technical prerequisites on the card itself because the study order can vary. In statistics, say “equal-variance, uncorrelated errors” before using “spherical”; identify a column space as possible mean vectors and a null space as coefficient changes that leave predictions unchanged.

## 5. Canonical schema

Edit `content/master-feed.json`, an object with `version`, `title`, `updated` (YYYY-MM-DD), `scope`, and `cards`. Append cards to the existing array. This is a valid card shape; replace example source paths with verified real paths before validation:

```json
{
  "id": "course-objective-predict-unique-slug",
  "course": "COURSE LABEL",
  "school": "Harvard",
  "topic": "Specific topic",
  "kind": "PREDICT",
  "format": "flashcard",
  "title": "If the number of independent draws quadruples, how does the standard error change?",
  "body": "Assume the draws have the same finite variance.",
  "answer": "It halves. Standard error scales as \\(1/\\sqrt{N}\\), so replacing \\(N\\) by \\(4N\\) divides it by 2.",
  "takeaway": "Precision improves with the square root of sampling effort.",
  "source": "Lecture 2 · Monte Carlo · authored companion",
  "sources": [
    {
      "path": "courses/example/lecture-02.pdf",
      "locator": "Lecture 2 · Monte Carlo variance · PDF page 12",
      "page": 12
    }
  ],
  "color": "green",
  "relatedCourses": [],
  "seconds": 30,
  "prerequisiteIds": [],
  "visual": {
    "type": "compare",
    "label": "Same sampling distribution",
    "items": [
      { "label": "Original budget", "value": "N draws" },
      { "label": "New budget", "value": "4N draws" }
    ]
  }
}
```

`school` must be `Harvard` or `UBuffalo`; assign new material to its actual school. All existing curated courses belong to Harvard, and legacy cards without this field default to Harvard. New IDs must be globally unique across schools.

`id` is unique and stable; never rename IDs just to reorder cards. `course` and `topic` drive the selection UI; reuse existing labels consistently. `kind` is a short visible badge, e.g. QUICK RECALL, PREDICT, COMPARE, SPOT THE MISTAKE, COMPLETE THE SEQUENCE. `color` is a legacy palette field; retain the course's existing value, rather than interpreting it as permission to change the crimson theme. `seconds` is an estimate, not a timer or card limit. `relatedCourses` is optional and only for genuine cross-course relevance.

`sources` must contain real paths under `courses/`, no `..`, with useful locators. `page` is a positive, 1-based PDF page index retained for authoring traceability; distinguish it from printed page numbers in the locator. The app does not expose PDF links or downloads. Never fabricate page numbers. Textbook references should point to the supporting section, not the whole book.

## 6. Supported visual forms

`visual` is optional. Omit it for ordinary recall cards. It always appears **before reveal**, so it must contain the problem data, not its solution. The answer and takeaway stay behind reveal.

All forms use `type`, a short `label`, and an `items` array of 1–4 objects with nonempty `label` and `value` strings:

- `equation`: oversized expressions or numeric givens. Keep each expression brief.
- `compare`: side-by-side alternatives. Usually use two items with comparable information.
- `flow`: a vertical sequence with arrows. Use 2–4 short steps and a `?` where the learner supplies a step.
- `mistake`: an explicitly labeled claim or erroneous procedure for diagnosis. Include any essential givens as a separate item.

These are accessible text layouts, not generated pictures or arbitrary charts. For a graph, geometric drawing, matrix illustration, or interactive choice beyond this schema, implement and test a new renderer first. Do not claim a diagram exists when you have supplied only prose.

Vary layouts when the subject warrants it. Do not add decorative visuals or impose a percentage quota. Never sacrifice a useful derivation or full coverage to make a deck look varied. Keep values short enough to read at a 390px mobile width; split crowded visuals into additional cards.

## 7. Integrate and audit

1. Preserve all existing card IDs and source-backed material. Inspect current edits before writing.
2. Add cards to `master-feed.json` and map every ID into an objective in `content/coverage.json` (or the existing cross-course mapping when appropriate). Keep unit-level `cardIds` consistent with objective mappings.
3. Update source coverage notes with actual additions and remaining gaps. Do not claim full source coverage from a few companion examples.
4. Run `npm run feed:build`, then `npm run feed:check`, `npm run typecheck`, and `npm run build`. `content/MASTER_FEED.md` is generated; never edit it instead of the JSON.
5. If local PDFs are unavailable, `node scripts/build-feed.mjs --check --allow-missing-sources` can check structure but does not verify sources. Report that limitation.
6. Check every numeric example, assumption, equation, inference, and citation. Search for duplicates, leaked answers, ambiguous questions, unsupported conclusions, and missing proof steps.
7. When adding or changing rendering, run browser tests and inspect a mobile viewport: front visual, revealed answer, vertical scrolling, citation metadata, ratings, saved cards, and topic/lecture selection. Respect reduced-motion preferences.
8. Report counts by course and layout, preserved material, validation results, and unresolved coverage. There is no total card ceiling. Continue in traceable batches until the coverage ledger is complete.

The UI controls learning progress. Content must not instruct a user to select a particular rating or imply that scrolling proves mastery. Currently, revealing then swiping defaults to Easy; explicit ratings override that default. Keep recall prompts meaningful despite that convenience.
