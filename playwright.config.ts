import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration
 * Documentation: https://playwright.dev/docs/test-configuration
 */

export default defineConfig({

  // Folder where your tests exist
  testDir: './tests',

  // Allow tests inside a file to run in parallel
  fullyParallel: true,

  // Prevent accidentally committing test.only
  forbidOnly: !!process.env.CI,

  // Retry failing tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Run tests sequentially in CI to avoid flaky failures
  workers: process.env.CI ? 1 : undefined,

  // Generate HTML report after execution
  reporter: 'html',

  use: {

    // CHANGE 1: Use your actual application URL instead of demo TODO app
    // This should be your banking app URL
    baseURL: 'https://demo.playwright.dev/todomvc/#/',

    // Collect trace only when retrying a failed test
    trace: 'on-first-retry',

    // Take screenshot only when test fails
    screenshot: 'only-on-failure',

    // Record video only when retry happens
    video: 'on-first-retry',
  },

  /*
  CHANGE 2 (IMPORTANT):
  Run tests ONLY in Chromium for CI stability.
  This prevents failures multiplying across browsers.
  */

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],

});
