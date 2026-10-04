import { test, expect } from "@playwright/test";
import { POST } from "../app/api/quiz/route";
import { curated } from "../lib/cards";
import {
  quizCandidates,
  readQuizResults,
  recordQuizResult,
  validateQuiz,
  type QuizQuestion,
} from "../lib/quiz";
import { chronological, shuffle } from "../lib/study-session";
import { schedule } from "../lib/learning";
const makeQuestion = (id: string): QuizQuestion => ({
  cardId: id,
  type: "true_false",
  prompt: "A small residual always guarantees a small solution error.",
  options: ["True", "False"],
  correctIndex: 1,
  explanation: "An ill-conditioned inverse can amplify a small residual.",
});
test("quiz selection uses mistakes first and results do not alter recall schedules", () => {
  const cards = curated.slice(0, 8),
    reviews = { [cards[1].id]: schedule(undefined, "hard", 10) };
  const results = recordQuizResult({}, cards[0].id, false, 20);
  const chosen = quizCandidates(cards, reviews, results);
  expect(chosen[0].id).toBe(cards[0].id);
  expect(chosen[1].id).toBe(cards[1].id);
  expect(chosen).toHaveLength(6);
  expect(new Set(chosen.map((c) => c.id)).size).toBe(6);
  expect(recordQuizResult(results, cards[0].id, true, 30)[cards[0].id]).toEqual(
    { attempts: 2, correct: 1, lastCorrect: true, lastAnswered: 30 },
  );
  expect(
    readQuizResults(
      {
        ...results,
        unknown: {
          attempts: 1,
          correct: 1,
          lastCorrect: true,
          lastAnswered: 10,
        },
        [cards[2].id]: {
          attempts: 2,
          correct: 3,
          lastCorrect: true,
          lastAnswered: 10,
        },
      },
      new Set(cards.map((c) => c.id)),
    ),
  ).toEqual(results);
});
test("question validation rejects incorrect answer keys, duplicates and out-of-scope cards", () => {
  const id = curated[0].id,
    q = makeQuestion(id),
    allowed = new Set([id]);
  expect(validateQuiz({ questions: [q] }, allowed, "true_false", 1)).toEqual([
    q,
  ]);
  for (const invalid of [
    { ...q, cardId: "fake" },
    { ...q, correctIndex: 2 },
    { ...q, options: ["True", "True"] },
    { ...q, prompt: "" },
    { ...q, type: "mcq" },
  ])
    expect(
      validateQuiz({ questions: [invalid] }, allowed, "true_false", 1),
    ).toBeNull();
  expect(validateQuiz({ questions: [q, q] }, allowed, "mixed", 2)).toBeNull();
});
test("chronological and shuffled orders preserve membership without mutating source cards", () => {
  const make = (id: string, lecture: number, page: number) => ({
    ...curated[0],
    id,
    sources: [
      { path: `courses/test/lecture-${lecture}.pdf`, locator: "Lecture", page },
    ],
  });
  const input = [make("c", 2, 1), make("b", 1, 9), make("a", 1, 2)];
  expect(chronological(input).map((c) => c.id)).toEqual(["a", "b", "c"]);
  const randomized = shuffle(input, () => 0);
  expect(new Set(randomized)).toEqual(new Set(input));
  expect(randomized).not.toEqual(input);
  expect(input[0].id).toBe("c");
});
test("quiz API authenticates, grounds generation, validates output, and handles quota", async () => {
  const key = process.env.HARVARD_API_KEY,
    code = process.env.TUTOR_ACCESS_CODE,
    originalFetch = globalThis.fetch;
  process.env.HARVARD_API_KEY = "fake-private-key";
  process.env.TUTOR_ACCESS_CODE = "quiz-test";
  const id = curated[0].id,
    payload = { cardIds: [id], format: "true_false" };
  const req = (
    body: unknown,
    access = "quiz-test",
    origin = "http://localhost",
  ) =>
    new Request("http://localhost/api/quiz", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-study-access-code": access,
        origin,
      },
      body: JSON.stringify(body),
    });
  let calls = 0;
  try {
    globalThis.fetch = async (_url, init) => {
      calls++;
      const sent = JSON.parse(init!.body as string);
      expect(sent.model).toBe("gpt-4o-mini");
      expect(sent.response_format.json_schema.strict).toBe(true);
      expect(sent.messages[1].content).toContain(
        curated[0].answer.replace(/\\/g, "\\\\"),
      );
      expect(sent.messages[1].content).not.toContain("forged content");
      return Response.json({
        choices: [
          {
            finish_reason: "stop",
            message: {
              content: JSON.stringify({
                questions: JSON.parse(sent.messages[1].content).cards.map(
                  (c: { cardId: string }) => makeQuestion(c.cardId),
                ),
              }),
            },
          },
        ],
      });
    };
    expect((await POST(req(payload, "wrong"))).status).toBe(401);
    expect(
      (await POST(req(payload, "quiz-test", "https://elsewhere.test"))).status,
    ).toBe(403);
    expect(
      (await POST(req({ cardIds: ["unknown"], format: "mcq" }))).status,
    ).toBe(400);
    expect(
      (await POST(req({ ...payload, cardIds: Array(7).fill(id) }))).status,
    ).toBe(400);
    expect((await POST(req({ ...payload, count: 2 }))).status).toBe(400);
    expect(
      (
        await POST(
          req({
            ...payload,
            cardIds: curated.slice(0, 21).map((c) => c.id),
            count: 21,
          }),
        )
      ).status,
    ).toBe(400);
    expect(calls).toBe(0);
    expect(
      (await POST(req({ ...payload, answer: "forged content" }))).status,
    ).toBe(200);
    const twenty = await POST(
      req({
        ...payload,
        cardIds: curated.slice(0, 20).map((c) => c.id),
        count: 20,
      }),
    );
    expect(twenty.status).toBe(200);
    expect((await twenty.json()).questions).toHaveLength(20);
    globalThis.fetch = async () =>
      Response.json({
        choices: [
          {
            finish_reason: "stop",
            message: {
              content: JSON.stringify({
                questions: [{ ...makeQuestion(id), correctIndex: 9 }],
              }),
            },
          },
        ],
      });
    expect((await POST(req(payload))).status).toBe(502);
    globalThis.fetch = async () =>
      new Response("fake-private-key", { status: 429 });
    const quota = await POST(req(payload));
    expect(quota.status).toBe(429);
    expect(await quota.text()).not.toContain("fake-private-key");
    delete process.env.HARVARD_API_KEY;
    expect((await POST(req(payload))).status).toBe(503);
  } finally {
    globalThis.fetch = originalFetch;
    if (key === undefined) delete process.env.HARVARD_API_KEY;
    else process.env.HARVARD_API_KEY = key;
    if (code === undefined) delete process.env.TUTOR_ACCESS_CODE;
    else process.env.TUTOR_ACCESS_CODE = code;
  }
});
test("mobile picker searches, quizzes save results, repeat round targets mistakes, and errors recover", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: /Harvard/ }).click();
  await page.getByLabel("Search study material").fill("Comprehensive");
  await expect(page.locator(".study-course")).toHaveCount(1);
  await page
    .getByRole("checkbox", { name: /^Quiz 1 · Comprehensive study/ })
    .check();
  await page.getByLabel("Card order").selectOption("shuffle");
  await page.screenshot({
    path: "tmp/material-picker-mobile.png",
    animations: "disabled",
  });
  await page.getByRole("button", { name: /Practice quiz/ }).click();
  await page.getByRole("button", { name: "Build practice quiz" }).click();
  const dialog = page.getByRole("dialog");
  await dialog.getByLabel("Question format").selectOption("true_false");
  await dialog
    .getByLabel("Study access code", { exact: true })
    .fill("quiz-test");
  const batches: string[][] = [];
  await page.route("**/api/quiz", async (route) => {
    const body = route.request().postDataJSON();
    expect(route.request().headers()["x-study-access-code"]).toBe("quiz-test");
    batches.push(body.cardIds);
    await route.fulfill({
      json: { questions: body.cardIds.map(makeQuestion) },
    });
  });
  await dialog
    .getByRole("button", { name: "Create quiz", exact: true })
    .click();
  for (let i = 0; i < 6; i++) {
    await dialog
      .getByRole("button", {
        name: i === 0 ? "A True" : "B False",
        exact: true,
      })
      .click();
    if (i === 0) {
      await expect(dialog.getByRole("status")).toContainText("inverse");
      await page.screenshot({
        path: "tmp/intuition-quiz-mobile.png",
        animations: "disabled",
      });
    }
    await dialog
      .getByRole("button", { name: i === 5 ? "See results" : "Next question" })
      .click();
  }
  await expect(
    dialog.getByRole("heading", { name: "5 of 6 correct" }),
  ).toBeVisible();
  const stored = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("studyscroll-v1")!),
  );
  expect(Object.keys(stored.quizResults)).toHaveLength(6);
  expect(stored.reviews).toEqual({});
  expect(stored.studyOrder).toBe("shuffle");
  await dialog.getByRole("button", { name: "Practice another round" }).click();
  await expect(dialog.getByText("Question 1 of 6")).toBeVisible();
  expect(batches[1][0]).toBe(batches[0][0]);
  await dialog.getByRole("button", { name: "Close quiz" }).click();
  await page.reload();
  await page.getByRole("button", { name: /Harvard/ }).click();
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("studyscroll-v1")!).quizResults,
    ),
  ).toEqual(stored.quizResults);
  await page.getByLabel("Search study material").fill("Comprehensive");
  await page
    .getByRole("checkbox", { name: /^Quiz 1 · Comprehensive study/ })
    .check();
  await page.getByRole("button", { name: /Practice quiz/ }).click();
  await page.getByRole("button", { name: "Build practice quiz" }).click();
  await page.route("**/api/quiz", (route) =>
    route.fulfill({
      status: 429,
      json: { error: "Usage limit reached. Flashcards still work." },
    }),
  );
  await dialog
    .getByRole("button", { name: "Create quiz", exact: true })
    .click();
  await expect(dialog.getByRole("alert")).toContainText(
    "Flashcards still work",
  );
  await dialog.getByRole("button", { name: "Close quiz" }).click();
  await page.getByRole("button", { name: /Flashcards/ }).click();
  await page
    .getByRole("button", { name: "Start studying", exact: true })
    .click();
  await expect(page.locator("article.study-card").first()).toBeVisible();
});

test("mixed quiz grades shuffled MCQ choices correctly and returns missed concepts to flashcards", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Harvard/ }).click();
  await page.getByLabel("Search study material").fill("2025");
  await page.getByRole("checkbox", { name: /^Quiz 1 · 2025 practice/ }).check();
  await page.getByRole("button", { name: /Practice quiz/ }).click();
  await page.getByRole("button", { name: "Build practice quiz" }).click();
  const dialog = page.getByRole("dialog");
  await dialog
    .getByLabel("Study access code", { exact: true })
    .fill("quiz-test");
  let firstId = "";
  await page.route("**/api/quiz", async (route) => {
    const body = route.request().postDataJSON();
    firstId = body.cardIds[0];
    await route.fulfill({
      json: {
        questions: body.cardIds.map((id: string, i: number) =>
          i === 0
            ? {
                cardId: id,
                type: "mcq",
                prompt:
                  "Why can a tiny residual coexist with a large solution error?",
                options: [
                  "The inverse amplifies a weak direction.",
                  "All small residuals are inaccurate.",
                  "Matrix size alone determines error.",
                  "Rounding is always absent.",
                ],
                correctIndex: 0,
                explanation: "A weak direction can amplify residual error.",
              }
            : makeQuestion(id),
        ),
      },
    });
  });
  await dialog
    .getByRole("button", { name: "Create quiz", exact: true })
    .click();
  await dialog
    .getByRole("button", { name: /The inverse amplifies a weak direction/ })
    .click();
  await expect(dialog.getByRole("status")).toContainText("That’s right.");
  await dialog.getByRole("button", { name: "Next question" }).click();
  await dialog.getByRole("button", { name: "A True", exact: true }).click();
  await dialog.getByRole("button", { name: "Next question" }).click();
  for (let i = 0; i < 4; i++)
    await dialog.getByRole("button", { name: "Skip question" }).click();
  await expect(
    dialog.getByRole("heading", { name: "1 of 2 correct" }),
  ).toBeVisible();
  await expect(dialog).toContainText("4 skipped");
  const saved = await page.evaluate(
    () => JSON.parse(localStorage.getItem("studyscroll-v1")!).quizResults,
  );
  expect(saved[firstId].lastCorrect).toBe(true);
  await dialog
    .getByRole("button", { name: "Review missed concepts as cards" })
    .click();
  await expect(dialog).toHaveCount(0);
  await expect(page.locator("article.study-card")).toHaveCount(1);
});

test("chronological session keeps source order after rating and saves the preference", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Harvard/ }).click();
  await page.getByLabel("Search study material").fill("2025");
  await page.getByRole("checkbox", { name: /^Quiz 1 · 2025 practice/ }).check();
  await page.getByLabel("Card order").selectOption("chronological");
  await page
    .getByRole("button", { name: "Start studying", exact: true })
    .click();
  const expected = chronological(
    curated.filter((c) =>
      c.sources?.some((s) => s.path.endsWith("/solns25.pdf")),
    ),
  ).map((c) => c.id);
  const ids = () =>
    page
      .locator("article.study-card")
      .evaluateAll((elements) =>
        elements.map((e) => e.getAttribute("data-card-id")),
      );
  expect(await ids()).toEqual(expected);
  const first = page.locator("article.study-card").first();
  await first
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await first.getByRole("button", { name: "Hard", exact: true }).click();
  expect(await ids()).toEqual(expected);
  await page.reload();
  await page.getByRole("button", { name: /Harvard/ }).click();
  await expect(page.getByLabel("Card order")).toHaveValue("chronological");
});

test("quiz count uses a numeric keypad input and generates the chosen 20 questions", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Harvard/ }).click();
  await page.getByLabel("Search study material").fill("Comprehensive");
  await page
    .getByRole("checkbox", { name: /^Quiz 1 · Comprehensive study/ })
    .check();
  await page.getByRole("button", { name: /Practice quiz/ }).click();
  await page.getByRole("button", { name: "Build practice quiz" }).click();
  const dialog = page.getByRole("dialog"),
    count = dialog.getByLabel("Number of questions", { exact: true });
  await expect(count).toHaveAttribute("inputmode", "numeric");
  await expect(count).toHaveValue("6");
  await count.fill("21");
  await expect(
    dialog.getByRole("button", { name: "Create quiz", exact: true }),
  ).toBeDisabled();
  await count.fill("");
  await expect(
    dialog.getByRole("button", { name: "Create quiz", exact: true }),
  ).toBeDisabled();
  await count.fill("20");
  await dialog.getByLabel("Question format").selectOption("true_false");
  await dialog
    .getByLabel("Study access code", { exact: true })
    .fill("quiz-test");
  await page.route("**/api/quiz", async (route) => {
    const body = route.request().postDataJSON();
    expect(body.count).toBe(20);
    expect(body.cardIds).toHaveLength(20);
    expect(new Set(body.cardIds).size).toBe(20);
    await route.fulfill({
      json: { questions: body.cardIds.map(makeQuestion) },
    });
  });
  await dialog
    .getByRole("button", { name: "Create quiz", exact: true })
    .click();
  await expect(dialog.getByText("Question 1 of 20")).toBeVisible();
});
