import { test, expect } from '@playwright/test';
import { applyDiscount } from '../utils/Priceutils';

test.describe('Discount Module Tests', () => {

  test('Validate discount calculation logic', async () => {

    const price = 2000;
    const discount = 10;

    const finalPrice = applyDiscount(price, discount, false);

    expect(finalPrice).toBe(1800);

  });

  test('Ensure discount is not applied twice', async () => {

    const price = 2000;
    const discount = 10;

    const firstApply = applyDiscount(price, discount, false);
    const secondApply = applyDiscount(firstApply, discount, true);

    expect(secondApply).toBe(1800);

  });

});

