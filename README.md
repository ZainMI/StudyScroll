# StudyScroll

A Next.js app that turns your course material into an intentional study feed. The current version loads an expanding library of authored, source-grounded cards covering AM 205, AM 207, STAT 244, and AM 209a (lectures 1–8 from the supplied COMPSCI 1090A Ed course).

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
- School folders: choose Harvard or UBuffalo at launch. All current curated courses belong to Harvard. Source citations remain in the content, but PDF links and downloads are disabled.
- Folder import for text-based PDF, DOCX, TXT, and Markdown. It produces basic source-passage gap-fill cards, **not** the curated interpretation of the master feed.

## Limits

No live AI generation, OCR, authentication, or server database. Spaced-review scheduling runs locally in your browser. There is no card-count cap or daily quota. The progress indicator tracks self-reported review of the current library, not proven mastery. Clearing browser storage clears saved progress. Large imported card collections can exceed browser storage limits.

The deployed study UI does not require the local `courses/` folder. Source downloads are disabled. Uploaded files are parsed on the app server and are not retained there; generated cards are assigned to the selected school and saved in localStorage. Existing cards without school metadata default to Harvard. Progress and bookmarks remain in the same browser storage across school switches; opening the app always asks for a school. This does not transfer progress to another domain or device.

## Validation

```sh
npm run feed:check
npm run typecheck
npm run build
```

Stack: Next.js App Router, React, TypeScript, Lucide, pdf-parse, Mammoth.

Browser workflow checks: `npm test` (Playwright, configured to use installed Google Chrome). They exercise reveal/save/reload, course filtering, mobile layout, PDF import, uncapped card extraction, and source access boundaries.

## Learning schedule

The learning feed mixes due reviews with new, prerequisite-ordered cards. Rate actual recall after revealing; swiping away after revealing defaults to Easy unless you chose another rating. Unrevealed cards and bookmarks do not affect scheduling. Choose courses, topics, or lectures in Study before starting a session. Overlapping selections appear once; due reviews come first, then new cards and early practice. Ratings use fixed intervals: Again 10 minutes, Hard 30 minutes, Easy 1 hour, Super easy 3 hours. Saved cards leave the schedule unchanged. The bottom tabs are Session, My courses, and Study; bookmarks live inside Study. All progress stays in this browser. See [LEARNING.md](content/LEARNING.md) for interval rules, migration, and limitations.

## Authoring cards

Use [CARD_CREATION_GUIDE.md](content/CARD_CREATION_GUIDE.md) as the reusable LLM prompt and schema reference. It covers uncapped source coverage, teaching sequences, visual layouts, citations, and validation. The current visual companion batch adds 24 cards (six per course) while preserving all 908 existing cards.
