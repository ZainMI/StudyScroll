import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import type { Card } from "../lib/cards";
const curated: Card[] = JSON.parse(
  readFileSync(new URL("../content/master-feed.json", import.meta.url), "utf8"),
).cards;
import { studyGroups } from "../lib/study-groups";

test("lecture groups consolidate multipart decks and preserve course boundaries", () => {
  const groups = studyGroups(curated, "lectures");
  const lecture = groups.find(
    (g) => g.course === "AM 209a" && g.label === "Lecture 4",
  )!;
  expect(lecture.cardIds.length).toBeGreaterThan(1);
  expect(new Set(lecture.cardIds).size).toBe(lecture.cardIds.length);
  expect(
    new Set(
      curated
        .filter((c) => lecture.cardIds.includes(c.id))
        .flatMap((c) => c.sources!.map((s) => s.path)),
    ),
  ).toEqual(
    new Set([
      "courses/harvard/am209a/lecnotes/lecture-04a.pdf",
      "courses/harvard/am209a/lecnotes/lecture-04b.pdf",
    ]),
  );
  expect(groups.some((g) => g.label === "Lecture 0")).toBe(false);
  expect(
    groups.some(
      (g) => g.course === "STAT 244" && g.label === "Linear algebra notes",
    ),
  ).toBe(true);
});

test("mobile study selection deduplicates topics and lectures and isolates the session", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: /Harvard/ }).click();
  await expect(page.locator("article.study-card")).toHaveCount(0);
  const nav = page.locator("nav");
  await expect(
    nav.getByRole("button", { name: "Session", exact: true }),
  ).toBeDisabled();
  await expect(nav.getByRole("button")).toHaveText([
    /Session/,
    /My courses/,
    "Study",
  ]);
  await nav.getByRole("button", { name: "Study", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Start studying" }),
  ).toBeDisabled();
  const course = page.locator(".study-course").filter({ hasText: "AM 209a" });
  await course.locator("summary").click();
  await expect(page.getByRole("button", { name: "Lectures / chapters", exact: true })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Topics", exact: true }).click();
  await course
    .getByRole("checkbox", { name: /^Data science workflow/ })
    .check();
  await page
    .getByRole("button", { name: "Lectures / chapters", exact: true })
    .click();
  await course.getByRole("checkbox", { name: /^Lecture 1 / }).check();
  const expected = curated.filter(
    (c) =>
      c.course === "AM 209a" &&
      c.sources?.some((s) => s.path.endsWith("lecture-01.pdf")),
  );
  await expect(page.locator(".study-start")).toContainText(
    `${expected.length} cards · 2 groups`,
  );
  await page.screenshot({ path: "tmp/study-picker-mobile.png" });
  await page.getByRole("button", { name: "Start studying" }).click();
  await expect(page.locator("article.study-card")).toHaveCount(expected.length);
  const headings = await page
    .locator("article.study-card h2")
    .allTextContents();
  expect(new Set(headings)).toEqual(new Set(expected.map((c) => c.title)));
  const card = page.locator("article.study-card").first();
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await card.getByRole("button", { name: /^Easy/ }).click();
  await expect(card.locator(".review-status")).toBeVisible();
  await nav.getByRole("button", { name: "Study", exact: true }).click();
  await nav.getByRole("button", { name: "Session", exact: true }).click();
  await expect(page.locator("article.study-card")).toHaveCount(expected.length);
});

test("swiping defaults revealed cards to Easy, skips hidden cards, and preserves explicit ratings", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Harvard/ }).click();
  const { chooseCourses } = await import("./study-helper");
  await chooseCourses(page);
  const cards = page.locator("article.study-card");
  const scrollTo = async (index: number) => {
    await page.locator(".reel-viewport").evaluate((el, n) => el.scrollTo({ top: el.clientHeight * n, behavior: "instant" }), index);
  };
  const reviews = () => page.evaluate(() => Object.values(JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews) as { rating: string; interval: number; attempts: number }[]);
  await scrollTo(1);
  expect(await reviews()).toHaveLength(0);
  await cards.nth(1).getByRole("button", { name: "Recall your answer, then reveal." }).click();
  await expect(cards.nth(1).locator(".recall-rating button")).toHaveText(["Again", "Hard", "Easy", "Super easy"]);
  await scrollTo(2);
  await expect.poll(reviews).toEqual([expect.objectContaining({ rating: "good", interval: 3600000, attempts: 1 })]);
  await cards.nth(2).getByRole("button", { name: "Recall your answer, then reveal." }).click();
  await cards.nth(2).getByRole("button", { name: "Hard", exact: true }).click();
  await scrollTo(3);
  await expect.poll(reviews).toEqual([
    expect.objectContaining({ rating: "good", attempts: 1 }),
    expect.objectContaining({ rating: "hard", interval: 1800000, attempts: 1 }),
  ]);
  await scrollTo(1);
  await scrollTo(2);
  expect((await reviews())[0].attempts).toBe(1);
});

test("visual companion cards render readable prompts and hidden explanations on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: /Harvard/ }).click();
  const { chooseCourses } = await import("./study-helper");
  await chooseCourses(page);
  for (const type of ["equation", "compare", "flow", "mistake"]) {
    const card = page.locator("article.study-card").filter({ has: page.locator(`.visual-${type}`) }).first();
    await card.scrollIntoViewIfNeeded();
    await expect(card.locator(".answer")).toHaveCount(0);
    await expect(card.locator(".visual-caption")).toBeVisible();
    expect(await card.locator(".card-visual").evaluate((el) => el.scrollWidth <= el.clientWidth)).toBe(true);
    await card.getByRole("button", { name: "Recall your answer, then reveal." }).click();
    await expect(card.locator(".answer")).toBeVisible();
    await page.screenshot({ path: `tmp/visual-${type}-mobile.png` });
  }
});

test("school folders isolate courses and preserve existing progress across switches and reloads", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Choose your school." })).toBeVisible();
  await page.screenshot({ path: "tmp/schools-mobile.png" });
  await page.getByRole("button", { name: /Harvard/ }).click();
  const { chooseCourses } = await import("./study-helper");
  await chooseCourses(page);
  const card = page.locator("article.study-card").first();
  await card.getByRole("button", { name: "Save card", exact: true }).click();
  await card.getByRole("button", { name: "Recall your answer, then reveal." }).click();
  await card.getByRole("button", { name: "Hard", exact: true }).click();
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!));
  await page.locator("nav").getByRole("button", { name: "Study", exact: true }).click();
  await page.getByRole("button", { name: "Harvard", exact: true }).click();
  await page.getByRole("button", { name: /UBuffalo/ }).click();
  await expect(page.locator(".study-course")).toHaveCount(1);
  await expect(page.locator(".study-course summary")).toContainText("International Finance");
  await page.reload();
  await expect(page.getByRole("heading", { name: "Choose your school." })).toBeVisible();
  await page.getByRole("button", { name: /Harvard/ }).click();
  await expect(page.locator(".study-course")).toHaveCount(4);
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!));
  expect(after.reviews).toEqual(before.reviews);
  expect(after.progress).toEqual(before.progress);
  expect(after.cards).toHaveLength(curated.length);
});

test("International Finance offers five chapter groups and saves UBuffalo reviews independently", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const finance = curated.filter((card) => card.school === "UBuffalo" && card.course === "International Finance");
  expect(finance.length).toBe(284);
  const chapters = studyGroups(finance, "lectures");
  expect(chapters.map((group) => group.label)).toEqual(["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"]);
  expect(new Set(chapters.flatMap((group) => group.cardIds)).size).toBe(finance.length);
  await page.goto("/");
  await page.getByRole("button", { name: /UBuffalo/ }).click();
  await expect(page.locator(".study-course")).toHaveCount(1);
  await page.getByRole("button", { name: "Lectures / chapters", exact: true }).click();
  await page.getByRole("checkbox", { name: /^Chapter 5 / }).check();
  await page.screenshot({ path: "tmp/international-finance-chapters-mobile.png" });
  await page.getByRole("button", { name: "Start studying" }).click();
  await expect(page.locator("article.study-card")).toHaveCount(chapters[4].cardIds.length);
  const card = page.locator("article.study-card").first();
  await expect(card).toContainText("International Finance");
  await card.getByRole("button", { name: "Recall your answer, then reveal." }).click();
  await card.getByRole("button", { name: "Hard", exact: true }).click();
  await expect(card.getByRole("status")).toContainText("Next review");
  await page.screenshot({ path: "tmp/international-finance-card-mobile.png", animations: "disabled" });
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews);
  expect(Object.keys(before)[0]).toMatch(/^ub-if-/);
  await page.reload();
  await page.getByRole("button", { name: /Harvard/ }).click();
  await expect(page.locator(".study-course")).toHaveCount(4);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews)).toEqual(before);
});
