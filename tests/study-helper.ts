import type { Page } from "@playwright/test";
export async function chooseCourses(page: Page) {
  if (
    await page.getByRole("heading", { name: "Choose your school." }).isVisible()
  )
    await page.getByRole("button", { name: /Harvard/ }).click();
  await page
    .locator("nav")
    .getByRole("button", { name: "Study", exact: true })
    .click();
  for (const group of await page.locator(".study-course").all()) {
    if (!(await group.getAttribute("open"))) {
      // Native details may use an empty open attribute.
      if (!(await group.evaluate((el) => (el as HTMLDetailsElement).open)))
        await group.locator("summary").click();
    }
    await group.getByRole("checkbox", { name: /^Entire / }).check();
  }
  await page
    .getByRole("button", { name: "Start studying", exact: true })
    .click();
}
