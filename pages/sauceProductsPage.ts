import { Page, expect } from '@playwright/test';

export class SauceProductsPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page.click('.inventory_item button');
  }

  async validateCartCount(count: string) {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
  }

  async removeProduct() {
    await this.page.click('button:has-text("Remove")');
  }
}