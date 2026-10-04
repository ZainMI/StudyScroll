import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import type { Card } from "../lib/cards";
import { studyGroups } from "../lib/study-groups";
import { chronological } from "../lib/study-session";
const feed: { cards: Card[] } = JSON.parse(readFileSync("content/master-feed.json", "utf8"));
const duke = feed.cards.filter((c) => c.school === "Duke");

test("Duke's supplied lectures are distinct, complete groups in source order", () => {
  expect(duke).toHaveLength(174);
  const groups = studyGroups(duke, "lectures");
  expect(groups.map((g) => g.label)).toEqual(["Lecture 1", "Lecture 3", "Lecture 9", "Recorded lecture 1"]);
  expect(new Set(groups.flatMap((g) => g.cardIds))).toEqual(new Set(duke.map((c) => c.id)));
  expect(groups.every((g) => g.course === "MATH 218D")).toBe(true);
  const sorted = chronological([...duke].reverse());
  const sourceOrder = [...new Set(sorted.map((c) => c.sources![0].path.split("/").pop()))];
  expect(sourceOrder).toEqual(["F25-L1.pdf", "F25-R1.pdf", "F25-L3.pdf", "F25-L9.pdf"]);
  for (const filename of sourceOrder) {
    const pages = sorted.filter((c) => c.sources![0].path.endsWith(filename!)).map((c) => c.sources![0].page!);
    expect(pages).toEqual([...pages].sort((a,b) => a-b));
  }
});

test("Duke lecture selection renders mobile math and preserves reviews across schools", async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto("/");
  await page.getByRole("button", {name:/Duke/}).click();
  await expect(page.locator(".study-course")).toHaveCount(1);
  await expect(page.locator(".study-course summary")).toContainText("MATH 218D");
  await page.getByRole("checkbox", {name:/^Lecture 9 /}).check();
  await page.getByLabel("Card order").selectOption("chronological");
  await page.screenshot({path:"tmp/duke-selection-mobile.png"});
  await page.getByRole("button", {name:"Start studying"}).click();
  await expect(page.locator("article.study-card")).toHaveCount(48);
  const card = page.locator('[data-card-id="duke-218d-perp-equation"]');
  await card.scrollIntoViewIfNeeded();
  await card.getByRole("button", {name:"Recall your answer, then reveal."}).click();
  await expect(card.locator(".answer .katex").first()).toBeVisible();
  await expect(page.locator(".math-fallback,.katex-error")).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({path:"tmp/duke-card-mobile.png",animations:"disabled"});
  await card.getByRole("button", {name:"Hard",exact:true}).click();
  const reviews = await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews);
  expect(reviews["duke-218d-perp-equation"].rating).toBe("hard");
  await page.reload();
  await page.getByRole("button", {name:/Harvard/}).click();
  await expect(page.locator(".study-course")).toHaveCount(4);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews)).toEqual(reviews);
  await page.reload();
  await page.getByRole("button", {name:/Duke/}).click();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem("studyscroll-v1")!).reviews)).toEqual(reviews);
});
