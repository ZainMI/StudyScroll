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
  await expect(page.locator("article.study-card")).toHaveCount(
    feed.cards.length,
  );
  const card = page.locator("article.study-card").first();
  await expect(card.locator(".answer")).toHaveCount(0);
  await card
    .getByRole("button", { name: "Think about it. Then reveal." })
    .click();
  await expect(card.locator(".answer")).toContainText("2⁻⁴⁶");
  await card.getByRole("button", { name: "Save card", exact: true }).click();
  await card.getByRole("button", { name: "I got it", exact: true }).click();
  await page.reload();
  await page
    .locator("nav")
    .getByRole("button", { name: /Saved cards/ })
    .click();
  await expect(page.locator("article.study-card")).toHaveCount(1);
  await expect(page.locator(".learned-label")).toContainText("Learned");
  await page.screenshot({ path: "tmp/saved-desktop.png", fullPage: false });
});
test("course filter includes cross-course connections and guide is reachable", async ({
  page,
}) => {
  await page.goto("/");
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
      name: "One least-squares problem. Two different questions.",
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
test("PDF extraction works and source endpoint only serves curated files", async ({
  request,
}) => {
  const file = "courses/am205/homeworks/ps1/ps1.pdf";
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
  expect(source.status()).toBe(200);
  expect(source.headers()["content-type"]).toBe("application/pdf");
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
  await expect(
    page.getByRole("heading", { name: "Meet your new rabbit hole." }),
  ).toBeVisible();
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
  await expect(page.locator(".course-tile")).toHaveCount(3);
});

test("stored retired course cards do not return after a feed update", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("studyscroll-v1", JSON.stringify({
      cards: [{ id: "cs209-old", course: "CS 209a", body: "Old prompt", answer: "Old answer", title: "Retired course card" }],
      progress: { saved: ["cs209-old"], learned: ["cs209-old"] },
    }));
  });
  await page.goto("/");
  await expect(page.locator("article.study-card")).toHaveCount(feed.cards.length);
  await expect(page.getByText("Retired course card", { exact: true })).toHaveCount(0);
  await page.locator("nav").getByRole("button", { name: /Saved cards/ }).click();
  await expect(page.locator("article.study-card")).toHaveCount(0);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!));
  expect(saved.progress).toEqual({ saved: [], learned: [] });
});
