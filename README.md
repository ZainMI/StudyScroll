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
- School folders: choose Harvard or UBuffalo at launch. Harvard contains the original four courses; UBuffalo contains International Finance (284 cards across Chapters 1–5 and homework). Source citations remain in the content, but PDF links and downloads are disabled.
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

International Finance source inventory, chapter coverage, homework mapping, and source inconsistencies: [INTERNATIONAL_FINANCE_COVERAGE.md](content/INTERNATIONAL_FINANCE_COVERAGE.md).

## Card tutor (Harvard credits)

After revealing a built-in card, select **Ask about this** for a short explanation, example, or follow-up conversation. The tutor uses Harvard’s Community Developers `/ais-openai-direct-comdev/v2/chat/completions` endpoint with `gpt-4o-mini`. No paid fallback is configured. Imported cards are not sent to the tutor.

Copy `.env.example` to `.env.local` and fill in `HARVARD_API_KEY` (the API key, not the client secret) and `TUTOR_ACCESS_CODE` (a separate private code you choose for your study users). Restart the development server. For Vercel, add both as server environment variables in project settings and redeploy. Never prefix either with `NEXT_PUBLIC_` or commit `.env.local`.

Users enter the study access code in the tutor sheet; only that code is remembered for the browser tab’s session. The Harvard key stays server-side. Chats clear when the sheet closes, independently of saved learning progress. Each request sends the canonical card, up to two prerequisite cards, and up to four preceding exchanges; it does not upload PDFs. Replies are capped at 600 output tokens and displayed when complete.

Harvard enforces the credit allowance; a 429 displays a limit/busy message without interrupting flashcards. The route also has a best-effort 20 requests/minute throttle per server instance, not a distributed or per-user quota. Keep the study access code private; for broad public access, replace it with individual authentication and a durable rate limiter. The tutor stays unavailable until both environment variables are configured. Check approved audience and eligibility against your Harvard API product.

Card text now supports KaTeX using `\(...\)` inline and `\[...\]` for display math, including tutor replies. Literal dollar amounts remain plain text. `npm run feed:check` validates every authored expression as well as existing coverage/source checks. The October 2026 refresh keeps all 1,216 card IDs and source mappings intact, standardizes concept names, and rewrites 53 terminology-heavy prompts around reasoning and examples. See `content/CARD_CREATION_GUIDE.md` for the revised authoring rules.
