import { test } from '@playwright/test';
import { SauceLoginPage } from '../pages/sauceLoginPage';
import { SauceProductsPage } from '../pages/sauceProductsPage';

test('User can login and add product to cart', async ({ page }) => {
  const loginPage = new SauceLoginPage(page);
  const productsPage = new SauceProductsPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addFirstProductToCart();
  await productsPage.validateCartCount('1');
});