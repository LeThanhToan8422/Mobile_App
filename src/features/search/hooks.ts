import { useState, useCallback, useMemo } from "react";
import { mockProducts } from "../../data/products";
import { SearchFilters, SearchSort, SearchState } from "./types";
import {
  searchProducts,
  generateSearchSuggestions,
  getPriceRange,
  getAvailableBrands,
  getAvailableCategories,
} from "./utils";

const initialFilters: SearchFilters = {
  priceRange: { min: 0, max: 0 },
  brands: [],
  categories: [],
  rating: 0,
  inStock: false,
};

const initialSort: SearchSort = {
  field: "name",
  order: "asc",
};

export function useSearch() {
  const [state, setState] = useState<SearchState>({
    query: "",
    filters: initialFilters,
    sort: initialSort,
    results: [],
    isLoading: false,
    hasMore: true,
  });

  // Get available filter options
  const availableBrands = useMemo(() => getAvailableBrands(mockProducts), []);
  const availableCategories = useMemo(
    () => getAvailableCategories(mockProducts),
    []
  );
  const priceRange = useMemo(() => getPriceRange(mockProducts), []);

  // Search suggestions
  const suggestions = useMemo(
    () => generateSearchSuggestions(mockProducts, state.query),
    [state.query]
  );

  // Perform search
  const performSearch = useCallback(() => {
    setState((prev) => ({ ...prev, isLoading: true }));

    // Simulate API delay
    setTimeout(() => {
      const results = searchProducts(
        mockProducts,
        state.query,
        state.filters,
        state.sort
      );

      setState((prev) => ({
        ...prev,
        results,
        isLoading: false,
        hasMore: results.length > 0,
      }));
    }, 300);
  }, [state.query, state.filters, state.sort]);

  // Perform search with specific query (for external calls)
  const performSearchWithQuery = useCallback(
    (searchQuery: string) => {
      setState((prev) => ({ ...prev, isLoading: true }));

      // Simulate API delay
      setTimeout(() => {
        const results = searchProducts(
          mockProducts,
          searchQuery,
          state.filters,
          state.sort
        );

        setState((prev) => ({
          ...prev,
          results,
          isLoading: false,
          hasMore: results.length > 0,
        }));
      }, 300);
    },
    [state.filters, state.sort]
  );

  // Update query
  const updateQuery = useCallback((query: string) => {
    setState((prev) => ({ ...prev, query }));
  }, []);

  // Update filters
  const updateFilters = useCallback((filters: Partial<SearchFilters>) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...filters },
    }));
  }, []);

  // Update sort
  const updateSort = useCallback((sort: Partial<SearchSort>) => {
    setState((prev) => ({
      ...prev,
      sort: { ...prev.sort, ...sort },
    }));
  }, []);

  // Clear filters
  const clearFilters = useCallback(() => {
    setState((prev) => ({
      ...prev,
      filters: initialFilters,
    }));
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setState((prev) => ({
      ...prev,
      query: "",
      results: [],
    }));
  }, []);

  // Reset search
  const resetSearch = useCallback(() => {
    setState({
      query: "",
      filters: initialFilters,
      sort: initialSort,
      results: [],
      isLoading: false,
      hasMore: true,
    });
  }, []);

  return {
    // State
    query: state.query,
    filters: state.filters,
    sort: state.sort,
    results: state.results,
    isLoading: state.isLoading,
    hasMore: state.hasMore,
    suggestions,

    // Available options
    availableBrands,
    availableCategories,
    priceRange,

    // Actions
    performSearch,
    performSearchWithQuery,
    updateQuery,
    updateFilters,
    updateSort,
    clearFilters,
    clearSearch,
    resetSearch,
  };
}
