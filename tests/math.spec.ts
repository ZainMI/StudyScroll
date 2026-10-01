import { test, expect } from "@playwright/test";
import { chooseCourses } from "./study-helper";
import { curated } from "../lib/cards";
import katex from "katex";

test("every authored expression parses and finance currency remains literal", () => {
  let count = 0;
  for (const card of curated) {
    const fields = [
      card.title,
      card.body,
      card.answer,
      card.takeaway ?? "",
      ...(card.visual?.items.flatMap((i) => [i.label, i.value]) ?? []),
    ];
    for (const text of fields) {
      for (const match of text.matchAll(
        /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g,
      )) {
        expect(() =>
          katex.renderToString(match[1] ?? match[2], {
            strict: "error",
            trust: false,
          }),
        ).not.toThrow();
        count++;
      }
    }
  }
  expect(count).toBeGreaterThan(1000);
  expect(
    curated.find((c) => c.id === "am207-probability-axioms")?.title,
  ).toContain("assign probabilities");
  expect(
    curated.find((c) => c.id === "am207-probability-axioms")?.answer,
  ).toContain("probability measure");
});

test("mobile renders a long regression equation without overflowing the screen", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await chooseCourses(page);
  const target = curated.find((c) => c.id === "stat244-differentiate-loss")!;
  // Text uses a readable prose prefix because the equation is now accessible MathML.
  const card = page
    .locator("article.study-card")
    .filter({ has: page.locator("h2", { hasText: "What is the gradient of" }) })
    .first();
  await card
    .getByRole("button", { name: "Recall your answer, then reveal." })
    .click();
  await expect(card.locator(".answer .katex").first()).toBeVisible();
  await expect(card.locator(".math-fallback")).toHaveCount(0);
  await expect(card.locator(".katex-error")).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({ path: "tmp/math-mobile.png" });
  expect(target.answer).toContain("\\(");
});
