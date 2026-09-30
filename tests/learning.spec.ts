import { chooseCourses } from "./study-helper";
import { test, expect } from "@playwright/test";
import { DAY, learningQueue, schedule, readReviews } from "../lib/learning";
import type { Card } from "../lib/cards";
const now = 1800000000000;
const make = (
  id: string,
  course = "A",
  prerequisiteIds: string[] = [],
): Card => ({
  id,
  course,
  prerequisiteIds,
  topic: id,
  title: id,
  body: id,
  answer: id,
  kind: "recall",
  source: "test",
  color: "green",
});
test("review choices use fixed intervals, including on repeated practice", () => {
  for (const [rating, minutes] of [["again", 10], ["hard", 30], ["good", 60], ["easy", 180]] as const) {
    const first = schedule(undefined, rating, now);
    expect(first.due).toBe(now + minutes * 60000);
    const later = schedule(first, rating, now + 1000);
    expect(later.due).toBe(now + 1000 + minutes * 60000);
  }
  expect(schedule(undefined, "again", now).lapses).toBe(1);
});
test("queue prioritizes overdue retrieval, excludes future reviews, and orders prerequisites", () => {
  const cards = [
    make("child", "A", ["parent"]),
    make("future"),
    make("parent"),
    make("other", "B"),
    make("due1"),
    make("due2"),
  ];
  const reviews = {
    future: schedule(undefined, "good", now),
    due1: schedule(undefined, "good", now - 2 * DAY),
    due2: schedule(undefined, "good", now - 3 * DAY),
  };
  const ids = learningQueue(cards, reviews, now).map((c) => c.id);
  expect(ids.slice(0, 2)).toEqual(["due2", "due1"]);
  expect(ids).not.toContain("future");
  expect(ids.indexOf("parent")).toBeLessThan(ids.indexOf("child"));
  expect(new Set(ids).size).toBe(ids.length);
  expect(
    learningQueue([make("a", "A", ["b"]), make("b", "A", ["a"])], {}, now),
  ).toHaveLength(2);
});
test("invalid or retired stored reviews cannot poison a schedule", () => {
  const valid = schedule(undefined, "good", now);
  expect(
    readReviews(
      { ok: valid, retired: valid, invalid: { ...valid, due: NaN } },
      new Set(["ok", "invalid"]),
    ),
  ).toEqual({ ok: valid });
});
test("recall is persisted once, future reviews rest, and browsing does not reschedule", async ({
  page,
}) => {
  await page.goto("/");
  await chooseCourses(page);
  const card = page.locator("article.study-card").first();
  const title = await card.locator("h2").innerText();
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  expect(
    await page.evaluate(() =>
      Object.keys(JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews),
    ),
  ).toHaveLength(0);
  await card.getByRole("button", { name: /^Easy/ }).click();
  await expect(card.getByRole("status")).toContainText("Next review in 1h");
  const before = await page.evaluate(
    () => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews,
  );
  expect(Object.values(before).map((r: any) => r.attempts)).toEqual([1]);
  await page.reload();
  await chooseCourses(page);
  await expect(
    page.locator("article.study-card").first().locator("h2"),
  ).not.toHaveText(title);
  await page
    .locator("nav")
    .getByRole("button", { name: /My courses/ })
    .click();
  await page
    .getByRole("button", { name: "Choose study material", exact: true })
    .click();
  await chooseCourses(page);
  const original = page
    .locator("article.study-card")
    .filter({ has: page.getByRole("heading", { name: title, exact: true }) });
  await original
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await expect(original.getByRole("button", { name: /^Easy/ })).toBeVisible();
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews,
    ),
  ).toEqual(before);
});
test("a missed card returns with its answer hidden when due, without moving the current card", async ({
  page,
}) => {
  await page.clock.install({ time: now });
  await page.goto("/");
  await chooseCourses(page);
  const first = page.locator("article.study-card").first();
  const title = await first.locator("h2").innerText();
  await first
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await first.getByRole("button", { name: /^Again/ }).click();
  await page.clock.fastForward(11 * 60000);
  await expect(
    page.locator("article.study-card").nth(1).locator("h2"),
  ).toHaveText(title);
  await expect(
    page.locator("article.study-card").nth(1).locator(".answer"),
  ).toHaveCount(0);
  expect(
    await page.locator(".reel-viewport").evaluate((e) => e.scrollTop),
  ).toBe(0);
});
test("favicon is a real ICO and is linked by the page", async ({
  page,
  request,
}) => {
  const response = await request.get("/favicon.ico");
  expect(response.ok()).toBeTruthy();
  expect([...(await response.body()).subarray(0, 4)]).toEqual([0, 0, 1, 0]);
  await page.goto("/");
  await chooseCourses(page);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    "href",
    /favicon.ico/,
  );
});

test("reset can be cancelled and clears only learning progress after confirmation", async ({
  page,
}) => {
  await page.goto("/");
  await chooseCourses(page);
  const card = page.locator(".study-card").first();
  await card.getByRole("button", { name: "Save card", exact: true }).click();
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await card.getByRole("button", { name: /^Easy/ }).click();
  const before = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("studyscroll-v1")!),
  );
  await page
    .locator("nav")
    .getByRole("button", { name: /My courses/ })
    .click();
  page.once("dialog", (dialog) => dialog.dismiss());
  await page
    .getByRole("button", { name: "Reset learning progress", exact: true })
    .click();
  expect(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews,
    ),
  ).toEqual(before.reviews);
  page.once("dialog", (dialog) => dialog.accept());
  await page
    .getByRole("button", { name: "Reset learning progress", exact: true })
    .click();
  await expect
    .poll(() =>
      page.evaluate(
        () => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews,
      ),
    )
    .toEqual({});
  await page.reload();
  await chooseCourses(page);
  const after = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("studyscroll-v1")!),
  );
  expect(after.progress.learned).toEqual([]);
  expect(after.progress.saved).toEqual(before.progress.saved);
  expect(after.cards).toEqual(before.cards);
  expect(after.reviews).toEqual({});
});
