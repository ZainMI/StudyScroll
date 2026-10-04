# StudyScroll

A Next.js app that turns your course material into an intentional study feed. The current version loads an expanding library of authored, source-grounded cards covering AM 205, AM 207, STAT 244, and AM 209a (lectures 1–8 from the supplied COMPSCI 1090A Ed course), UBuffalo International Finance, and Duke MATH 218D (Introduction to Linear Algebra).

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
- Reveal explanations, bookmark, mark understood, and save for another look. On desktop (1024px and wider), explanations appear beside the question with their own scrolling area; mobile keeps the stacked layout.
- Browser-local progress and imported cards; authored content updates are merged by stable ID.
- School folders: choose Harvard, UBuffalo, or Duke at launch. Harvard contains the original four courses; UBuffalo contains International Finance (284 cards across Chapters 1–5 and homework). Duke contains MATH 218D (174 cards from lectures 1, 3, 9 and recorded lecture 1; see `content/DUKE_LINEAR_ALGEBRA_COVERAGE.md`). Source citations remain in the content, but PDF links and downloads are disabled.
- Course material is added manually in the project, using `content/CARD_CREATION_GUIDE.md` and the canonical feed. The upload UI is removed and the upload endpoint returns 404.

## Limits

AI tutor replies and intuition quizzes use the configured Harvard API and a shared study access code. There is no OCR, individual account system, or server progress database. Spaced-review scheduling runs locally in your browser. There is no card-count cap or daily quota. The progress indicator tracks self-reported review of the current library, not proven mastery. Clearing browser storage clears saved progress. Large imported card collections can exceed browser storage limits.

The deployed study UI does not require the local `courses/` folder. Source downloads are disabled. File uploads are disabled; course material and canonical flashcards are curated manually. Existing cards without school metadata default to Harvard. Progress and bookmarks remain in the same browser storage across school switches; opening the app always asks for a school. This does not transfer progress to another domain or device.

## Validation

```sh
npm run feed:check
npm run typecheck
npm run build
```

Stack: Next.js App Router, React, TypeScript, Lucide, pdf-parse, Mammoth.

Browser workflow checks: `npm test` (Playwright, configured to use installed Google Chrome). They exercise reveal/save/reload, course filtering, mobile layout, disabled uploads and source access boundaries.

## Learning schedule

Smart review mixes due reviews with new, prerequisite-ordered cards. Chronological mode sorts by course, source lecture/page (section where available), then stable authored order. Shuffle randomizes the entire chosen selection once at session start. Ordered and shuffled sessions do not insert due repeats mid-session; ratings still update future review dates. Rate actual recall after revealing; swiping away after revealing defaults to Easy unless you chose another rating. Unrevealed cards and bookmarks do not affect scheduling. Choose courses, topics, or lectures in Study before starting a session. Overlapping selections appear once; due reviews come first, then new cards and early practice. Ratings use fixed intervals: Again 10 minutes, Hard 30 minutes, Easy 1 hour, Super easy 3 hours. Saved cards leave the schedule unchanged. The bottom tabs are Session, My courses, and Study; bookmarks live inside Study. All progress stays in this browser. See [LEARNING.md](content/LEARNING.md) for interval rules, migration, and limitations.

## Authoring cards

Use [CARD_CREATION_GUIDE.md](content/CARD_CREATION_GUIDE.md) as the reusable LLM prompt and schema reference. It covers uncapped source coverage, teaching sequences, visual layouts, citations, and validation. The current visual companion batch adds 24 cards (six per course) while preserving all 908 existing cards.

International Finance source inventory, chapter coverage, homework mapping, and source inconsistencies: [INTERNATIONAL_FINANCE_COVERAGE.md](content/INTERNATIONAL_FINANCE_COVERAGE.md).

## Card tutor (Harvard credits)

After revealing a built-in card, select **Ask about this** for a short explanation, example, or follow-up conversation. The tutor uses Harvard’s Community Developers `/ais-openai-direct-comdev/v2/chat/completions` endpoint with `gpt-4o-mini`. No paid fallback is configured. Imported cards are not sent to the tutor.

Copy `.env.example` to `.env.local` and fill in `HARVARD_API_KEY` (the API key, not the client secret) and `TUTOR_ACCESS_CODE` (a separate private code you choose for your study users). Restart the development server. For Vercel, add both as server environment variables in project settings and redeploy. Never prefix either with `NEXT_PUBLIC_` or commit `.env.local`.

Users enter the study access code in the centered tutor panel; only that code is remembered on the device in local storage after a successful reply. The key icon lets users change or forget the remembered code. Invalid codes are removed from storage. The Harvard key stays server-side. Chats clear when the sheet closes, independently of saved learning progress. Each request sends the canonical card, up to two prerequisite cards, and up to four preceding exchanges; it does not upload PDFs. Replies are capped at 600 output tokens and displayed when complete.

Harvard enforces the credit allowance; a 429 displays a limit/busy message without interrupting flashcards. The route also has a best-effort 20 requests/minute throttle per server instance, not a distributed or per-user quota. Keep the study access code private; for broad public access, replace it with individual authentication and a durable rate limiter. The tutor stays unavailable until both environment variables are configured. Check approved audience and eligibility against your Harvard API product.

Card text now supports KaTeX using `\(...\)` inline and `\[...\]` for display math, including tutor replies. Literal dollar amounts remain plain text. `npm run feed:check` validates every authored expression as well as existing coverage/source checks. The October 2026 refresh keeps all 1,216 card IDs and source mappings intact, standardizes concept names, and rewrites 53 terminology-heavy prompts around reasoning and examples. See `content/CARD_CREATION_GUIDE.md` for the revised authoring rules.

## Intuition quizzes and material selection

Study offers searchable course/lecture/topic sets, reviewed counts, missed-concept counts, and removable selection chips. Choose Flashcards or Practice quiz. The study-order preference persists on this browser. Quizzes offer 1–20 questions from selected built-in cards per round (default six, limited by the selection size); this is a round size, not a limit on course coverage or continued practice.

`/api/quiz` uses the same Harvard endpoint, model, and access-code setup as the tutor. The client prioritizes last-missed quiz concepts, then Again/Hard cards, then untested ideas; random ties vary coverage. The server accepts only canonical card IDs (at most 20), supplies trusted card excerpts, and asks for intuition questions without written calculations. Multiple choice has four choices; true/false has two; mixed rounds include both when possible. Answers reveal explanatory feedback and an expandable source-card comparison. MCQ choice positions are randomized. Skipping does not score the question.

Questions use [OpenAI Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) and additional runtime checks for format, count, allowed/unique IDs, answer indices, duplicate options, field lengths, and KaTeX validity. Schema validation cannot guarantee factual or pedagogical correctness; quizzes are labeled AI-generated practice. No automatic paid fallback or repeated generation loop is configured. Requests have a 75-second timeout, a 500-output-token-per-question budget (up to 10,000), and a best-effort six-requests/minute limit per instance. The university gateway must support the supplied structured-output format.

Quiz attempts/correct totals/latest correctness are stored by canonical card ID in `studyscroll-v1.quizResults`. They do not mark flashcards learned or alter recall schedules. Results survive school changes/reloads; Reset learning progress clears both quiz and recall results. Closing a partial quiz preserves answered-question results but discards the unfinished generated round. The summary can open missed concepts as flashcards or generate another adaptive round. Only selected card excerpts are sent; no PDFs or private answer history are uploaded.

Validation includes mocked upstream API responses, auth and schema failure paths, search/selection, mobile quiz feedback, results persistence, repeat-round prioritization, and quota recovery. Live university generation is not exercised by the automated suite.
