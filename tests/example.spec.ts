import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // ad automated test for playwright

  // Go to the Playwright homepage
  const KEY = "123";
  if (process.env.KEY === KEY) {
    await page.goto("http://localhost:5173/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Router App/);
  } else {
    expect(2).toBe(3);
  }
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
