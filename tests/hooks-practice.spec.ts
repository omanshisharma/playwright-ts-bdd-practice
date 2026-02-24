import { test } from '@playwright/test';

test.beforeEach(async ({page}) => {
    console.log("navigating beofre each test run");
    await page.goto('https://example.com');

});

test('Test A', async ({page}) => {
    console.log('Running Test A');

});

test('Test B', async ({page}) => {
    console.log('Running Test B');

})