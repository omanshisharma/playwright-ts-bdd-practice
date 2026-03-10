import { Page, Locator } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
    }

    async getItemCount() {
        return await this.cartItems.count();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}