# Curation contract

The user wants enough material to learn and review the current courses, with **no card limit**. Scope is current lectures and assignments, using relevant textbook sections as support. Do not attempt to cover entire future textbook chapters just because the books are available.

`master-feed.json` is the content source of truth. `coverage.json` maps concept groups to stable card IDs. `MASTER_FEED.md` is generated, not independently edited.

## Decide coverage before count

1. Read the actual assignment and relevant lecture material. Distinguish original questions from completed student writeups. A filename such as `hw1` or `ps1` does not reliably distinguish them.
2. Identify concepts, assumptions, derivation steps, algorithms, implementation decisions, and common failure cases.
3. Write enough cards for an intelligible progression. A definition alone is rarely enough for a method: add an explanation, a retrieval prompt, a small calculation, and a transfer/error-diagnosis prompt where they teach distinct skills. Split overloaded cards.
4. Cite the local source with a page or notebook question. Label companion examples and derived connections. Use PDF physical page numbers for browser links; distinguish printed page numbers in the label.
5. Check mathematics independently. Source notes and student writeups can contain mistakes; do not preserve them as teaching content. Inspect rendered pages when extraction loses symbols.
6. Revisit weak topics based on actual recall. The current app records a user's self-report, not measured mastery. There is no arbitrary stopping count and no automatic mastery claim.

## Current boundaries

- AM 205: PS1–2 and supporting Heath chapter 1–2 concepts; selected chapter 3 material supports the assigned least-squares work.
- AM 207: HW1–2 and conceptual material in lectures 00–06. Historical anecdotes and application showcase slides are context, not invented exam requirements.
- STAT 244: HW1–2, linear algebra and least-squares theory, and inference material before the regression-diagnostics section specified by HW2.

This first curriculum is not an official answer key, a complete transcription, or a guarantee that every detail has been mastered. Add depth and fresh applications where needed. Do not count source extraction as semantic review of every page.

## Update

Edit JSON, retain stable IDs, update the coverage mapping, and run:

```sh
npm run feed:build
npm run feed:check
npm run typecheck
```

Do not send private course material to an external model service as part of automatic imports without an explicitly selected integration. Current imports are a local extraction prototype; curated content is authored separately.
