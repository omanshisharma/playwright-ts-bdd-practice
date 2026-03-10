import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/bankloginPage';
import { dashboardPages } from '../pages/dashboardPage';
import { banktransferPage } from '../pages/banktransferPage';

test.skip('User can transfer money successfully', async ({ page }) => {

  const bankloginPage = new LoginPage(page);
  const dashboardPage = new dashboardPages(page);
  const transferPage = new banktransferPage(page);

  await page.goto('https://example.com');

  await bankloginPage.login('user1', 'password');

  const initialBalance = await dashboardPage.getBalance();

  await dashboardPage.goTotransfer();

  await transferPage.transfer(500);

  const updatedBalance = await dashboardPage.getBalance();

  expect(updatedBalance).toBe(initialBalance - 500);

});