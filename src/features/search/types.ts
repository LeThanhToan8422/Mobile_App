export interface SearchFilters {
  priceRange: {
    min: number;
    max: number;
  };
  brands: string[];
  categories: string[];
  rating: number;
  inStock: boolean;
}

export interface SearchSort {
  field: "price" | "name" | "rating" | "createdAt";
  order: "asc" | "desc";
}

export interface SearchState {
  query: string;
  filters: SearchFilters;
  sort: SearchSort;
  results: any[];
  isLoading: boolean;
  hasMore: boolean;
}

export interface SearchSuggestion {
  id: string;
  text: string;
  type: "product" | "category" | "brand";
  count?: number;
}
