import { ProductDetail } from "./types";

export function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN");
}

export function calculateDiscount(
  oldPrice: number,
  currentPrice: number
): number {
  return Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
}

export function getProductImages(product: ProductDetail): any[] {
  // Return product images or fallback to thumbnail
  if (product.images && product.images.length > 0) {
    return product.images;
  }
  return [product.thumbnail];
}

export function getProductDescription(product: ProductDetail): string {
  return (
    product.description ||
    `${product.name} - ${product.brand} - ${product.category}`
  );
}

export function getProductSpecs(product: ProductDetail): string[] {
  // Convert specifications object to array of strings
  if (product.specifications) {
    return Object.entries(product.specifications).map(
      ([key, value]) => `${key}: ${value}`
    );
  }

  return [
    `Thương hiệu: ${product.brand}`,
    `Danh mục: ${product.category}`,
    `Tình trạng: ${product.inStock ? "Còn hàng" : "Hết hàng"}`,
  ];
}
