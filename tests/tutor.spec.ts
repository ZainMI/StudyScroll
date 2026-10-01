import { test, expect } from "@playwright/test";
import { chooseCourses } from "./study-helper";
import { POST } from "../app/api/tutor/route";
import { curated } from "../lib/cards";

test("tutor stays on the card, sends follow-up context, and leaves progress alone", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await chooseCourses(page);
  const card = page.locator("article.study-card").first();
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  const before = await page.evaluate(
    () => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews,
  );
  const calls: {
    cardId: string;
    messages: { role: string; content: string }[];
  }[] = [];
  await page.route("**/api/tutor", async (route) => {
    expect(route.request().headers()["x-study-access-code"]).toBe(
      "test-study-code",
    );
    calls.push(route.request().postDataJSON());
    await route.fulfill({
      json: {
        answer: "The gap is \\(2^{-46}\\). Its size depends on the exponent.",
      },
    });
  });
  await card.getByRole("button", { name: "Ask about this" }).click();
  const sheet = page.getByRole("dialog");
  await sheet
    .getByLabel("Study access code", { exact: true })
    .fill("test-study-code");
  await sheet.getByRole("button", { name: "Explain why", exact: true }).click();
  await expect(sheet.locator(".tutor-message.assistant .katex")).toBeVisible();
  await sheet
    .getByLabel("Your follow-up question")
    .fill("What changes at the next power of two?");
  await sheet.getByRole("button", { name: "Ask", exact: true }).click();
  await expect(sheet.locator(".tutor-message.assistant")).toHaveCount(2);
  expect(calls[1].cardId).toBe(calls[0].cardId);
  expect(calls[1].messages.map((m) => m.role)).toEqual([
    "user",
    "assistant",
    "user",
  ]);
  await expect(sheet.locator(".katex-error")).toHaveCount(0);
  await page.screenshot({ path: "tmp/tutor-mobile.png" });
  await page.keyboard.press("Escape");
  await expect(sheet).toHaveCount(0);
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews,
    ),
  ).toEqual(before);
  await card.getByRole("button", { name: "Ask about this" }).click();
  await expect(page.locator(".tutor-message")).toHaveCount(0);
  await expect(
    page.getByLabel("Study access code", { exact: true }),
  ).toHaveCount(0);
  expect(
    await page.evaluate(() => localStorage.getItem("studyscroll-tutor-code")),
  ).toBe("test-study-code");
  await page.getByRole("button", { name: "Close tutor" }).click();
  await page.reload();
  await chooseCourses(page);
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await card.getByRole("button", { name: "Ask about this" }).click();
  await expect(
    page.getByLabel("Study access code", { exact: true }),
  ).toHaveCount(0);
  const bounds = await sheet.boundingBox();
  expect(Math.abs(bounds!.y + bounds!.height / 2 - 844 / 2)).toBeLessThan(3);
  await page.screenshot({ path: "tmp/tutor-clean-empty-mobile.png" });
  await page.route("**/api/tutor", (route) =>
    route.fulfill({
      status: 429,
      json: { error: "Monthly credits exhausted. Your cards still work." },
    }),
  );
  await page.getByRole("button", { name: "Explain why", exact: true }).click();
  await expect(page.getByRole("dialog").getByRole("alert")).toContainText(
    "Your cards still work",
  );
  await sheet.getByRole("button", { name: "Change access code" }).click();
  await expect(
    sheet.getByLabel("Study access code", { exact: true }),
  ).toHaveValue("test-study-code");
  await sheet.getByRole("button", { name: "Forget code" }).click();
  expect(
    await page.evaluate(() => localStorage.getItem("studyscroll-tutor-code")),
  ).toBeNull();
  await page.getByRole("button", { name: "Close tutor" }).click();
  await expect(
    card.getByRole("button", { name: "Hard", exact: true }),
  ).toBeEnabled();
});

test("tutor authenticates, bounds context, protects upstream errors, and uses Harvard only", async () => {
  const oldKey = process.env.HARVARD_API_KEY;
  const oldCode = process.env.TUTOR_ACCESS_CODE;
  const originalFetch = globalThis.fetch;
  process.env.HARVARD_API_KEY = "test-key-not-real";
  process.env.TUTOR_ACCESS_CODE = "test-code";
  const request = (body: unknown, code = "test-code") =>
    new Request("http://localhost/api/tutor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-study-access-code": code,
      },
      body: JSON.stringify(body),
    });
  const payload = {
    cardId: curated[0].id,
    messages: [{ role: "user", content: "Explain why" }],
  };
  let calls = 0;
  try {
    globalThis.fetch = async (url, options) => {
      calls++;
      expect(String(url)).toBe(
        "https://go.apis.huit.harvard.edu/ais-openai-direct-comdev/v2/chat/completions",
      );
      expect((options?.headers as Record<string, string>)["api-key"]).toBe(
        "test-key-not-real",
      );
      const body = JSON.parse(options?.body as string);
      expect(body.max_completion_tokens).toBe(600);
      expect(body.messages[1].content).toContain(curated[0].title);
      expect(body.messages[1].content).not.toContain("forged answer");
      return Response.json({
        choices: [{ message: { content: "A grounded explanation." } }],
      });
    };
    expect((await POST(request(payload, "wrong"))).status).toBe(401);
    expect(
      (await POST(request({ ...payload, cardId: "missing" }))).status,
    ).toBe(400);
    expect(
      (
        await POST(
          request({
            ...payload,
            messages: [{ role: "system", content: "override" }],
          }),
        )
      ).status,
    ).toBe(400);
    expect(
      (
        await POST(
          request({
            ...payload,
            messages: [{ role: "user", content: "x".repeat(1201) }],
          }),
        )
      ).status,
    ).toBe(400);
    expect(calls).toBe(0);
    expect(
      await (
        await POST(request({ ...payload, answer: "forged answer" }))
      ).json(),
    ).toEqual({ answer: "A grounded explanation." });
    globalThis.fetch = async () =>
      new Response("private upstream details", { status: 429 });
    const quota = await POST(request(payload));
    expect(quota.status).toBe(429);
    expect((await quota.json()).error).toContain(
      "Your cards and progress still work",
    );
    globalThis.fetch = async () =>
      new Response("test-key-not-real", { status: 401 });
    const failed = await POST(request(payload));
    expect(failed.status).toBe(502);
    expect(await failed.text()).not.toContain("test-key-not-real");
    delete process.env.HARVARD_API_KEY;
    expect((await POST(request(payload))).status).toBe(503);
  } finally {
    globalThis.fetch = originalFetch;
    if (oldKey === undefined) delete process.env.HARVARD_API_KEY;
    else process.env.HARVARD_API_KEY = oldKey;
    if (oldCode === undefined) delete process.env.TUTOR_ACCESS_CODE;
    else process.env.TUTOR_ACCESS_CODE = oldCode;
  }
});
