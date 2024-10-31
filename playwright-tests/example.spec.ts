// eslint-disable-next-line import/no-named-as-default
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/New Remix App/);
});

test("has heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Welcome to Remix",
    }),
  ).toBeVisible();
});

test("should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("/");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
