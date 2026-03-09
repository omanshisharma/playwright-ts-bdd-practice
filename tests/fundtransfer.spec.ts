// Import test and expect from Playwright
import { test, expect } from '@playwright/test';

// Import all page classes
import { LoginPage } from '../pages/bankloginPage';
import { dashboardPages } from '../pages/dashboardPage';
import { banktransferPage } from '../pages/banktransferPage';

// Define test case
test('User can transfer money successfully', async ({ page }) => {

  // Create object instances of each POM class
  const bankloginPage = new LoginPage(page);
  const dashboardPage = new dashboardPages(page);
  const transferPage = new banktransferPage(page);

  // Open banking app
  await page.goto('https://your-banking-app.com');

  // Perform login using POM method
  await bankloginPage.login('user1', 'password');

  // Capture initial balance
  const initialBalance = await dashboardPage.getBalance();

  // Navigate to transfer page
  await dashboardPage.goTotransfer();

  // Perform transfer
  await transferPage.transfer(500);

  // Capture updated balance
  const updatedBalance = await dashboardPage.getBalance();

  // Validate balance deducted correctly
  expect(updatedBalance).toBe(initialBalance - 500);

});