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
test("spacing grows only after delayed recall and lapses reset it", () => {
  const first = schedule(undefined, "good", now);
  expect(first.due).toBe(now + DAY);
  const early = schedule(first, "easy", now + 1000);
  expect(early.due).toBe(first.due);
  expect(early.interval).toBe(first.interval);
  expect(early.successes).toBe(first.successes);
  const later = schedule(first, "good", first.due);
  expect(later.interval).toBe(2.5 * DAY);
  const missed = schedule(later, "again", later.due);
  expect(missed.interval).toBe(600000);
  expect(missed.successes).toBe(0);
  expect(missed.lapses).toBe(1);
  expect(schedule(undefined, "hard", now).interval).toBe(DAY / 4);
  expect(schedule(undefined, "easy", now).interval).toBe(4 * DAY);
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
  await card.getByRole("button", { name: /^Good/ }).click();
  await expect(card.getByRole("status")).toContainText("Next review in 1d");
  const before = await page.evaluate(
    () => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews,
  );
  expect(Object.values(before).map((r: any) => r.attempts)).toEqual([1]);
  await page.reload();
  await expect(
    page.locator("article.study-card").first().locator("h2"),
  ).not.toHaveText(title);
  await page
    .locator("nav")
    .getByRole("button", { name: /My courses/ })
    .click();
  await page
    .getByRole("button", { name: "Browse all material", exact: true })
    .click();
  const original = page
    .locator("article.study-card")
    .filter({ has: page.getByRole("heading", { name: title, exact: true }) });
  await original
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await expect(original.locator(".review-status")).toContainText(
    "schedule stays unchanged",
  );
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
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    "href",
    /favicon.ico/,
  );
});

test("reset can be cancelled and clears only learning progress after confirmation", async ({
  page,
}) => {
  await page.goto("/");
  const card = page.locator(".study-card").first();
  await card.getByRole("button", { name: "Save card", exact: true }).click();
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await card.getByRole("button", { name: /^Good/ }).click();
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
  const after = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("studyscroll-v1")!),
  );
  expect(after.progress.learned).toEqual([]);
  expect(after.progress.saved).toEqual(before.progress.saved);
  expect(after.cards).toEqual(before.cards);
  expect(after.reviews).toEqual({});
});
