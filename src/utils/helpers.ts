// Helper functions for data conversion and utilities

import { Product as NewProduct } from "../types";
import { formatPrice } from "./formatters";

// Legacy product type for compatibility
export interface LegacyProduct {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  source: any; // ImageSourcePropType
}

/**
 * Convert new Product type to legacy format for components that haven't been updated yet
 */
export const convertToLegacyProduct = (product: NewProduct): LegacyProduct => {
  return {
    id: product.id,
    name: product.name,
    price: formatPrice(product.price),
    oldPrice: product.oldPrice ? formatPrice(product.oldPrice) : undefined,
    source: product.thumbnail, // Use thumbnail directly since it's already a require()
  };
};

/**
 * Convert array of new Products to legacy format
 */
export const convertToLegacyProducts = (
  products: NewProduct[]
): LegacyProduct[] => {
  return products.map(convertToLegacyProduct);
};

/**
 * Get image source from product (for backward compatibility)
 */
export const getProductImageSource = (product: NewProduct) => {
  // Return thumbnail directly since it's already a require()
  return product.thumbnail;
};

/**
 * Format product price for display
 */
export const getFormattedPrice = (price: number): string => {
  return formatPrice(price);
};

/**
 * Get discount percentage between old and new price
 */
export const getDiscountPercentage = (
  originalPrice: number,
  newPrice: number
): number => {
  if (originalPrice <= newPrice) return 0;
  return Math.round(((originalPrice - newPrice) / originalPrice) * 100);
};

/**
 * Check if product has discount
 */
export const hasDiscount = (product: NewProduct): boolean => {
  return !!(product.oldPrice && product.oldPrice > product.price);
};

/**
 * Generate mock image URI for development
 */
export const getMockImageUri = (productId: string): string => {
  const mockImages = [
    "https://images.unsplash.com/photo-1517765371796-5bd3a2d4d0db?w=200",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200",
    "https://images.unsplash.com/photo-1517524206127-6d32c9cf9e21?w=200",
    "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=200",
    "https://images.unsplash.com/photo-1517765371796-5bd3a2d4d0db?w=200",
  ];

  // Use product ID to determine which image to use
  const index = parseInt(productId.replace(/\D/g, "")) % mockImages.length;
  return mockImages[index] || mockImages[0];
};
