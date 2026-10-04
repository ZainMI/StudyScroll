# Curation contract

The user wants enough material to learn and review the current courses, with **no card limit**. Scope is current lectures and assignments, using relevant textbook sections as support. Do not attempt to cover entire future textbook chapters just because the books are available.

`master-feed.json` is the content source of truth. `coverage.json` maps concept groups to stable card IDs. `MASTER_FEED.md` is generated, not independently edited.

## Flashcard style

Each curated card asks one concise question in its title. Its answer gives the direct explanation in one to three short sentences, followed by one intuition sentence. Use separate cards for definitions, assumptions, small calculations, and derivation steps. Do not turn the front into a textbook paragraph or hide multiple questions inside one prompt. Keep essential mathematical conditions even when shortening prose. `format: "flashcard"` allows an empty body; imported passage cards retain their body.

Retain IDs when rewriting the same concept so review history and bookmarks survive. New concepts receive new IDs. The lecture map is in [LECTURE_COVERAGE.md](LECTURE_COVERAGE.md).

## Decide coverage before count

1. Read the actual assignment and relevant lecture material. Distinguish original questions from completed student writeups. A filename such as `hw1` or `ps1` does not reliably distinguish them.
2. Identify concepts, assumptions, derivation steps, algorithms, implementation decisions, and common failure cases.
3. Write enough cards for an intelligible progression. A definition alone is rarely enough for a method: add an explanation, a retrieval prompt, a small calculation, and a transfer/error-diagnosis prompt where they teach distinct skills. Split overloaded cards.
4. Cite the local source with a page or notebook question. Label companion examples and derived connections. Use PDF physical page numbers for browser links; distinguish printed page numbers in the label.
5. Check mathematics independently. Source notes and student writeups can contain mistakes; do not preserve them as teaching content. Inspect rendered pages when extraction loses symbols.
6. Revisit weak topics based on actual recall. The current app records a user's self-report, not measured mastery. There is no arbitrary stopping count and no automatic mastery claim.

## Current boundaries

- AM 209a: lectures 1–8 from the user-supplied COMPSCI 1090A Ed course, including 17 core PDF decks. The course uses the user’s AM 209a label. See [AM209A_COVERAGE.md](AM209A_COVERAGE.md) for lecture counts, source links, exclusions, and mathematical clarifications.

- AM 205: PS1–2, the October 2026 Quiz 1 review, 2023–2025 Quiz 1 solutions, and the comprehensive study sheet. Supporting Heath chapters 1–3 stay tied to this scope. See [AM205_QUIZ1_COVERAGE.md](AM205_QUIZ1_COVERAGE.md) for the question-level quiz ledger and [AM205_COMPREHENSIVE_COVERAGE.md](AM205_COMPREHENSIVE_COVERAGE.md) for the study-sheet ledger.
- AM 207: HW1–2 and conceptual material in lectures 01–06. Historical anecdotes and application showcase slides are context, not invented exam requirements.
- STAT 244: HW1–2 and all three uploaded lecture-note sets: linear algebra, least-squares theory, and inference, including regression diagnostics. The newer request for all necessary lecture material expands the earlier HW2 boundary.

This first curriculum is not an official answer key, a complete transcription, or a guarantee that every detail has been mastered. Add depth and fresh applications where needed. Do not count source extraction as semantic review of every page.

## Update

Edit JSON, retain stable IDs, update the coverage mapping, and run:

```sh
npm run feed:build
npm run feed:check
npm run typecheck
```

Do not send private course material to an external model service as part of automatic imports without an explicitly selected integration. Current imports are a local extraction prototype; curated content is authored separately.

If intentionally working without some gitignored source PDFs, use `npm run feed:build -- --allow-missing-sources` (and the same flag for `feed:check`). This validates content and references but reports missing files; default checks still require every source file. Never describe an opted-out source check as proof all PDFs exist.

## Duke MATH 218D

The October 4, 2026 pass added 174 cards from the four supplied Linear Algebra PDFs (L1, R1, L3, L9). See [DUKE_LINEAR_ALGEBRA_COVERAGE.md](DUKE_LINEAR_ALGEBRA_COVERAGE.md) for inspected pages, source corrections, concept coverage and exclusions. R1 is a recorded lecture, not a review. No missing lectures were inferred. Duke cards have independent stable IDs; existing school progress is preserved.
