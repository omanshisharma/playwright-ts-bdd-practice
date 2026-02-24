import { test, expect } from '@playwright/test';

test('Browser context isolation demo', async ({ browser }) => {

  // Context 1
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  await page1.goto('https://example.com');

  await context1.addCookies([
    {
      name: 'user',
      value: 'Robin',
      domain: 'example.com',
      path: '/',
    },
  ]);

  const cookies1 = await context1.cookies();
  console.log('Context 1 Cookies:', cookies1);

  // Context 2
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page2.goto('https://example.com');

  const cookies2 = await context2.cookies();
  console.log('Context 2 Cookies:', cookies2);

  await context1.close();
  await context2.close();
});


