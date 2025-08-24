import { Product } from "../../types";
import { SearchFilters, SearchSort } from "./types";

export function searchProducts(
  products: Product[],
  query: string,
  filters: SearchFilters,
  sort: SearchSort
): Product[] {
  let results = products;

  // Text search
  if (query.trim()) {
    const searchTerm = query.toLowerCase().trim();
    results = results.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        (product.description &&
          product.description.toLowerCase().includes(searchTerm))
    );
  }

  // Price filter
  if (filters.priceRange.min > 0 || filters.priceRange.max > 0) {
    results = results.filter((product) => {
      const price = product.price;
      return (
        price >= filters.priceRange.min &&
        (filters.priceRange.max === 0 || price <= filters.priceRange.max)
      );
    });
  }

  // Brand filter
  if (filters.brands.length > 0) {
    results = results.filter((product) =>
      filters.brands.includes(product.brand)
    );
  }

  // Category filter
  if (filters.categories.length > 0) {
    results = results.filter((product) =>
      filters.categories.includes(product.category)
    );
  }

  // Rating filter
  if (filters.rating > 0) {
    results = results.filter(
      (product) => (product.rating || 0) >= filters.rating
    );
  }

  // Stock filter
  if (filters.inStock) {
    results = results.filter((product) => product.inStock);
  }

  // Sort results
  results.sort((a, b) => {
    let aValue: any, bValue: any;

    switch (sort.field) {
      case "price":
        aValue = a.price;
        bValue = b.price;
        break;
      case "name":
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case "rating":
        aValue = a.rating || 0;
        bValue = b.rating || 0;
        break;
      case "createdAt":
        aValue = new Date(a.createdAt).getTime();
        bValue = new Date(b.createdAt).getTime();
        break;
      default:
        return 0;
    }

    if (sort.order === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return results;
}

export function generateSearchSuggestions(
  products: Product[],
  query: string,
  maxSuggestions: number = 5
): any[] {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase().trim();
  const suggestions = [];

  // Product name suggestions
  const productMatches = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm))
    .slice(0, maxSuggestions)
    .map((product) => ({
      id: product.id,
      text: product.name,
      type: "product" as const,
      count: 1,
    }));

  suggestions.push(...productMatches);

  // Brand suggestions
  const brandMatches = products
    .filter((product) => product.brand.toLowerCase().includes(searchTerm))
    .reduce((acc, product) => {
      const existing = acc.find((item) => item.text === product.brand);
      if (existing) {
        existing.count = (existing.count || 0) + 1;
      } else {
        acc.push({
          id: `brand-${product.brand}`,
          text: product.brand,
          type: "brand" as const,
          count: 1,
        });
      }
      return acc;
    }, [] as any[]);

  suggestions.push(
    ...brandMatches.slice(0, maxSuggestions - suggestions.length)
  );

  return suggestions.slice(0, maxSuggestions);
}

export function getPriceRange(products: Product[]) {
  if (products.length === 0) return { min: 0, max: 0 };

  const prices = products.map((p) => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}

export function getAvailableBrands(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.brand))].sort();
}

export function getAvailableCategories(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.category))].sort();
}
