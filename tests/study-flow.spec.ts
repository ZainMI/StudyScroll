import { chooseCourses } from "./study-helper";
import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import type { Card } from "../lib/cards";
const feed: { cards: Card[] } = JSON.parse(
  readFileSync(new URL("../content/master-feed.json", import.meta.url), "utf8"),
);
import { readFile } from "node:fs/promises";
test("curated feed reveals explanations and persists bookmarks and review", async ({
  page,
}) => {
  await page.goto("/");
  await chooseCourses(page);
  await expect(page.locator("article.study-card")).toHaveCount(
    feed.cards.filter((card) => (card.school ?? "Harvard") === "Harvard").length,
  );
  const card = page.locator("article.study-card").first();
  await expect(card.locator(".answer")).toHaveCount(0);
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await expect(card.locator(".answer .katex").first()).toBeVisible();
  await expect(card.locator(".answer annotation").first()).toHaveText("99+2^{-46}");
  await card.getByRole("button", { name: "Save card", exact: true }).click();
  await card.getByRole("button", { name: /^Easy/ }).click();
  await page.reload();
  await chooseCourses(page);
  await page.locator("nav").getByRole("button", { name: "Study", exact: true }).click();
  await page.getByRole("button", { name: /Saved cards/ }).click();
  await expect(page.locator("article.study-card")).toHaveCount(1);
  await expect(page.locator(".learned-label")).toContainText("Reviewed");
  await page.screenshot({ path: "tmp/saved-desktop.png", fullPage: false });
});
test("course filter includes cross-course connections and guide is reachable", async ({
  page,
}) => {
  await page.goto("/");
  await chooseCourses(page);
  await page
    .locator(".filters")
    .getByRole("button", { name: "AM 205", exact: true })
    .click();
  const expected = feed.cards.filter(
    (c) => c.course === "AM 205" || c.relatedCourses?.includes("AM 205"),
  ).length;
  await expect(page.locator("article.study-card")).toHaveCount(expected);
  await expect(
    page.getByRole("heading", {
      name: "Does a numerically accurate least-squares fit guarantee valid inference?",
    }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Explore the course map" }).click();
  await expect(page).toHaveURL(/feed-guide/);
});
test("import creates more than twenty cards without truncation and keeps course path", async ({
  request,
}) => {
  const paragraphs = Array.from(
    { length: 27 },
    (_, i) =>
      `Concept number ${i} describes independent observations and explains why careful measurement and explicit assumptions are necessary for statistical interpretation`,
  );
  const response = await request.post("/api/import", {
    multipart: {
      files: {
        name: "Semester/TEST 101/notes.md",
        mimeType: "text/markdown",
        buffer: Buffer.from(paragraphs.join("\n\n")),
      },
    },
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.cards).toHaveLength(27);
  expect(data.cards[0].course).toBe("TEST 101");
  expect(data.skipped).toHaveLength(0);
});
test("PDF extraction works and source downloads are disabled", async ({
  request,
}) => {
  const file = "courses/harvard/am205/homeworks/ps1/ps1.pdf";
  const response = await request.post("/api/import", {
    multipart: {
      files: {
        name: "Semester/AM 205/ps1.pdf",
        mimeType: "application/pdf",
        buffer: await readFile(file),
      },
    },
  });
  const data = await response.json();
  expect(data.cards.length).toBeGreaterThan(0);
  expect(data.skipped).toEqual([]);
  const source = await request.get(
    `/api/source?path=${encodeURIComponent(file)}`,
  );
  expect(source.status()).toBe(404);

  expect((await request.get("/api/source?path=package.json")).status()).toBe(
    404,
  );
  expect(
    (await request.get("/api/source?path=courses/../package.json")).status(),
  ).toBe(404);
});
test("mobile layout fits the viewport and supports navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await chooseCourses(page);
  await expect(page.locator(".reel-viewport")).toBeVisible();
  const bounds = await page.locator(".reel-viewport").boundingBox();
  expect(bounds?.y).toBe(0);
  expect(bounds?.width).toBe(390);
  expect(bounds?.height).toBeGreaterThan(770);
  await expect(page.locator(".heading")).toBeHidden();
  await expect(page.locator(".filters")).toBeHidden();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
  await page.screenshot({ path: "tmp/feed-mobile.png", fullPage: false });
  await page
    .locator("nav")
    .getByRole("button", { name: /My courses/ })
    .click();
  await expect(page.locator(".course-tile")).toHaveCount(
    new Set(feed.cards.filter((card) => (card.school ?? "Harvard") === "Harvard").map((card) => card.course)).size,
  );
});

test("stored retired course and lecture cards do not return after a feed update", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem(
      "studyscroll-v1",
      JSON.stringify({
        cards: [
          {
            id: "cs209-old",
            course: "CS 209a",
            body: "Old prompt",
            answer: "Old answer",
            title: "Retired course card",
          },
          {
            id: "am207-system-model",
            course: "AM 207",
            body: "",
            answer: "Old lecture 0 answer",
            title: "Retired lecture 0 card",
          },
        ],
        progress: { saved: ["cs209-old", "am207-system-model"], learned: ["cs209-old", "am207-system-model"] },
      }),
    );
  });
  await page.goto("/");
  await chooseCourses(page);
  await expect(page.locator("article.study-card")).toHaveCount(
    feed.cards.filter((card) => (card.school ?? "Harvard") === "Harvard").length,
  );
  await expect(
    page.getByText("Retired course card", { exact: true }),
  ).toHaveCount(0);
  await page.locator("nav").getByRole("button", { name: "Study", exact: true }).click();
  await page.getByRole("button", { name: /Saved cards/ }).click();
  await expect(page.locator("article.study-card")).toHaveCount(0);
  const saved = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("studyscroll-v1")!),
  );
  expect(saved.progress).toEqual({ saved: [], learned: [] });
});

for (const viewport of [
  { width: 1440, height: 1000 },
  { width: 390, height: 844 },
]) {
  test(`reels snap, navigate, and keep explanations readable at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
  await chooseCourses(page);
    const reel = page.locator(".reel-viewport");
    const card = page.locator(".reel-card").first();
    const dimensions = await reel.evaluate((e) => ({
      height: e.clientHeight,
      scroll: e.scrollHeight,
      screen: innerHeight,
    }));
    expect(dimensions.height).toBeGreaterThan(250);
    expect(dimensions.height).toBeLessThan(dimensions.screen);
    expect(dimensions.scroll).toBeGreaterThan(dimensions.height * 2);
    await reel.focus();
    await page.keyboard.press("ArrowDown");
    await expect
      .poll(() => reel.evaluate((e) => Math.abs(e.scrollTop - e.clientHeight)))
      .toBeLessThan(2);
    await reel.focus();
    await page.keyboard.press("ArrowUp");
    await expect.poll(() => reel.evaluate((e) => e.scrollTop)).toBeLessThan(2);
    await card
      .getByRole("button", { name: "Recall your answer, then reveal." })
      .click();
    await expect(card.locator(".answer")).toBeVisible();
    await card.getByRole("button", { name: /^Easy/ }).click();
    expect(await reel.evaluate((e) => e.scrollTop)).toBeLessThan(2);
    await card
      .locator(".card-reading")
      .evaluate((e) => (e.scrollTop = e.scrollHeight));
    await expect(card.locator(".review-status")).toBeInViewport();
    await expect(card.locator("a[href*='/api/source']")).toHaveCount(0);
    if (viewport.width < 650) {
      await page
        .locator("nav")
        .getByRole("button", { name: /My courses/ })
        .click();
      await page.locator(".course-tile").filter({ hasText: "AM 207" }).click();
    } else {
      await page
        .locator(".filters")
        .getByRole("button", { name: "AM 207", exact: true })
        .click();
    }
    await expect.poll(() => reel.evaluate((e) => e.scrollTop)).toBeLessThan(2);
    await expect(page.locator(".reel-position")).toContainText("1 /");
    await page.screenshot({ path: `tmp/reels-verified-${viewport.width}.png` });
  });
}

test("wheel scrolling moves to the next reel", async ({ page }) => {
  await page.goto("/");
  await chooseCourses(page);
  const reel = page.locator(".reel-viewport");
  await page.locator(".reel-card").first().locator(".card-body").hover();
  const reading = page.locator(".reel-card").first().locator(".card-reading");
  // A short viewport must finish the card's text before advancing the feed.
  await reading.evaluate((e) => (e.scrollTop = e.scrollHeight));
  await page.mouse.wheel(0, 600);
  await expect
    .poll(() => reel.evaluate((e) => e.scrollTop), { timeout: 5000 })
    .toBeGreaterThan(10);
  await expect
    .poll(() =>
      reel.evaluate((e) =>
        Math.abs(
          e.scrollTop / e.clientHeight -
            Math.round(e.scrollTop / e.clientHeight),
        ),
      ),
    )
    .toBeLessThan(0.01);
});

test("AM 209a opens lecture flashcards without PDF links and persists reviews", async ({ page, request }) => {
  const courseCards = feed.cards.filter((card) => card.course === "AM 209a");
  expect(courseCards.length).toBeGreaterThan(0);
  expect(new Set(courseCards.map((card) => card.sources![0].path.match(/lecture-(\d+)/)![1])).size).toBe(8);
  await page.goto("/");
  await chooseCourses(page);
  await page.locator(".filters").getByRole("button", { name: "AM 209a", exact: true }).click();
  await expect(page.locator("article.study-card")).toHaveCount(courseCards.length);
  const card = page.locator("article.study-card").first();
  await expect(card.locator("h2")).toHaveText(courseCards[0].title);
  await card.getByRole("button", { name: "Recall your answer, then reveal." }).click();
  await expect(card.locator(".answer")).toContainText(courseCards[0].answer);
  await expect(card.locator("a[href*='/api/source']")).toHaveCount(0);
  await card.getByRole("button", { name: "Save card", exact: true }).click();
  await card.getByRole("button", { name: /^Easy/ }).click();
  await page.reload();
  await chooseCourses(page);
  await page.locator("nav").getByRole("button", { name: "Study", exact: true }).click();
  await page.getByRole("button", { name: /Saved cards/ }).click();
  await expect(page.locator("article.study-card h2")).toHaveText(courseCards[0].title);
  await expect(page.locator(".learned-label")).toContainText("Reviewed");
});
