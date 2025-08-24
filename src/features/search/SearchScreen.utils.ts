import { Product } from "../../types";

/**
 * Convert product to legacy format for ProductCard component
 */
export const convertProductToLegacy = (product: Product) => {
  return {
    id: product.id,
    name: product.name,
    price: product.price.toLocaleString("vi-VN") + "đ",
    oldPrice: product.oldPrice
      ? product.oldPrice.toLocaleString("vi-VN") + "đ"
      : undefined,
    source: product.thumbnail,
  };
};

/**
 * Convert array of products to legacy format
 */
export const convertProductsToLegacy = (products: Product[]) => {
  return products.map(convertProductToLegacy);
};

/**
 * Search products by query
 */
export const searchProductsByQuery = (
  products: Product[],
  query: string
): Product[] => {
  if (!query.trim()) return [];

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase())
  );
};
