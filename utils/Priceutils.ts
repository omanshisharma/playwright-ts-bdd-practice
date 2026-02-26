export function applyDiscount(
  price: number,
  discountPercent: number,
  isDiscountAlreadyApplied: boolean
): number {

  // If discount already applied, return same price
  if (isDiscountAlreadyApplied) {
    return price;
  }

  const discountedPrice = price - (price * discountPercent / 100);

  return parseFloat(discountedPrice.toFixed(2));
}