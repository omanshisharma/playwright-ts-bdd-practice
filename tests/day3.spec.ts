import { test, expect } from '@playwright/test';

test('day 3 locator practice', async ({ page }) => {
  await page.goto('/');

  const inputBox = page.getByPlaceholder('What needs to be done?');
  await inputBox.fill('learn playwright');

  await inputBox.press('Enter');

  const todoItem = page.getByText('learn playwright');
  await expect(todoItem).toBeVisible();
});
