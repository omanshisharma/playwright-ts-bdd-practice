import { test, expect } from '@playwright/test';

test('day 3 locator practice', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  const inputBox = page.getByPlaceholder('what needs to be done');
  await inputBox.fill('learn playwright');

  await inputBox.press('Enter');

  const todoItem = page.getByText('learn playwright');
  await expect(todoItem).toBeVisible();

});
  

