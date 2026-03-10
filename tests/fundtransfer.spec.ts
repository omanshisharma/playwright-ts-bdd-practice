// Import test and expect from Playwright
import { test, expect } from '@playwright/test';

// Import page classes
import { LoginPage } from '../pages/bankloginPage';
import { dashboardPages } from '../pages/dashboardPage';
import { banktransferPage } from '../pages/banktransferPage';

test('User can transfer money successfully', async ({ page }) => {

  const bankloginPage = new LoginPage(page);
  const dashboardPage = new dashboardPages(page);
  const transferPage = new banktransferPage(page);

  // Open application
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Perform login
  await bankloginPage.login('john', 'demo');

  // Capture initial balance
  const initialBalance = await dashboardPage.getBalance();

  // Navigate to transfer
  await dashboardPage.goTotransfer();

  // Transfer money
  await transferPage.transfer(500);

  // Capture new balance
  const updatedBalance = await dashboardPage.getBalance();

  // Validate balance deduction
  expect(updatedBalance).toBe(initialBalance - 500);

});