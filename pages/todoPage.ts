import { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly inputBox: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputBox = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
  }

  async navigate() {
    await this.page.goto('https://demo.playwright.dev/todomvc/#/');
  }

  async addTodo(text: string) {
    await this.inputBox.fill(text);
    await this.page.keyboard.press('Enter');
  }
}

