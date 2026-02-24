import { test, expect } from '@playwright/test';
 
 test.describe('Todo App Tests', () => { //creating a test group and a label

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc/#/');
    }); //Run this code before every test inside this describe block 
        //Because every test needs to start from the homepage
test('Add a Todo item', async ({ page }) => {
    await page.getByPlaceholder('What needs to be done?').fill('Study Playwright');
    await page.keyboard.press('Enter');//stimulating a enter key
    await expect(page.getByText('Study Playwright')).toBeVisible();
    });
//getByPlaceholder()
//→ Finds input field using its placeholder text.

//.fill('Study Playwright')
//→ Types text inside input.

//await
//→ Wait until action completes.
//getByText('Study Playwright')
//→ Find element that contains this text.

//expect(...)
//→ Tell Playwright we are verifying something.

//.toBeVisible()
//→ Check if element is visible on screen.

//await
//→ Wait until it becomes visible (auto-wait feature
test('Add another todo item', async ({ page}) => {
    await page.getByPlaceholder('What needs to be done?').fill('Stay Consistent');
    await page.keyboard.press('Enter');
    await expect(page.getByText('Stay Consistent')).toBeVisible();
    });

 });   