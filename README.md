# StudyScroll

A Next.js app that turns your course material into an intentional study feed. The current version loads an expanding library of authored, source-grounded cards covering AM 205, AM 207, and STAT 244.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Requires Node.js 20.9 or newer.

## The content workflow

- `courses/`: your source material. Originals are read, never rewritten.
- `content/master-feed.json`: **the editable source of truth**, imported directly by the app. Stable IDs preserve card progress.
- `content/MASTER_FEED.md`: readable master document, generated from that JSON.
- `content/coverage.json`: concept groups mapped to their cards.
- `content/CURATION.md`: source-review rules and the uncapped content workflow.
- `/feed-guide`: scope, course map, and learning objectives.

After editing the JSON, run `npm run feed:build`. It validates card IDs, required fields, and local source paths, then generates the Markdown. `npm run feed:check` also checks that the Markdown is current.

Cards are authored interpretations and companion practice, not official solutions. Coverage includes worked examples, derivation drills, and conceptual checks for current assignments and selected lecture concepts, not a full textbook summary. Local course materials are excluded from Git.

The extraction helper `scripts/extract-courses.py` uses Python with `pypdf` to write page-separated PDF text and notebook Markdown under ignored `tmp/pdfs/`. It is an optional authoring aid, not an app runtime dependency. Extraction does not equal semantic review. Dense equations or scanned pages need visual inspection/OCR.

## Working features

- Interleaved course feed, filtering (including related cross-course cards), course library.
- Reveal explanations, bookmark, mark understood, and save for another look.
- Browser-local progress and imported cards; authored content updates are merged by stable ID.
- Links to source PDFs at their cited pages; notebook sources open as plain text with cell numbers.
- Folder import for text-based PDF, DOCX, TXT, and Markdown. It produces basic source-passage gap-fill cards, **not** the curated interpretation of the master feed.

## Limits

No live AI generation, OCR, authentication, database, or spaced-repetition scheduling. There is no card-count cap or daily quota. The progress indicator tracks self-reported review of the current library, not proven mastery. Clearing browser storage clears saved progress. Large imported card collections can exceed browser storage limits.

Run this as a local personal app. The source endpoint serves only files referenced by the master feed, but it has no authentication. Do not expose a deployment containing private course materials without adding access control. Uploaded files are parsed on the app server and are not retained there; generated cards are saved in localStorage. The server must have the local `courses/` files to open source references.

## Validation

```sh
npm run feed:check
npm run typecheck
npm run build
```

Stack: Next.js App Router, React, TypeScript, Lucide, pdf-parse, Mammoth.

Browser workflow checks: `npm test` (Playwright, configured to use installed Google Chrome). They exercise reveal/save/reload, course filtering, mobile layout, PDF import, uncapped card extraction, and source access boundaries.
