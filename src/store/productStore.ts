// Product store using Zustand for state management

import { create } from "zustand";
import { Product, LoadingState, AppError } from "../types";
import {
  mockProducts,
  getProductById,
  getProductsByCategory,
  getProductsByBrand,
  searchProducts,
} from "../data/products";

interface ProductState extends LoadingState {
  products: Product[];
  featuredProducts: Product[];
  currentProduct: Product | null;
  filteredProducts: Product[];
  searchQuery: string;
  selectedCategory: string;
  selectedBrand: string;
  sortBy: "name" | "price" | "rating" | "newest";
  sortOrder: "asc" | "desc";
}

interface ProductActions {
  // Fetch products
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
  fetchProductsByCategory: (category: string) => Promise<void>;
  fetchProductsByBrand: (brand: string) => Promise<void>;

  // Search and filter
  searchProducts: (query: string) => void;
  filterByCategory: (category: string) => void;
  filterByBrand: (brand: string) => void;
  clearFilters: () => void;

  // Sorting
  setSortBy: (sortBy: "name" | "price" | "rating" | "newest") => void;
  setSortOrder: (order: "asc" | "desc") => void;

  // Featured products
  setFeaturedProducts: (products: Product[]) => void;

  // State management
  setLoading: (loading: boolean) => void;
  setError: (error: AppError | null) => void;
  reset: () => void;
}

type ProductStore = ProductState & ProductActions;

const initialState: ProductState = {
  products: [],
  featuredProducts: [],
  currentProduct: null,
  filteredProducts: [],
  searchQuery: "",
  selectedCategory: "",
  selectedBrand: "",
  sortBy: "newest",
  sortOrder: "desc",
  isLoading: false,
  error: null,
};

export const useProductStore = create<ProductStore>((set, get) => ({
  ...initialState,

  // Fetch products
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const products = mockProducts;
      set({
        products,
        filteredProducts: products,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error as AppError,
        isLoading: false,
      });
    }
  },

  fetchProductById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const product = getProductById(id);
      if (product) {
        set({ currentProduct: product, isLoading: false });
      } else {
        set({
          error: {
            code: "NOT_FOUND",
            message: "Không tìm thấy sản phẩm",
          },
          isLoading: false,
        });
      }
    } catch (error) {
      set({
        error: error as AppError,
        isLoading: false,
      });
    }
  },

  fetchProductsByCategory: async (category: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const products = getProductsByCategory(category);
      set({
        filteredProducts: products,
        selectedCategory: category,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error as AppError,
        isLoading: false,
      });
    }
  },

  fetchProductsByBrand: async (brand: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const products = getProductsByBrand(brand);
      set({
        filteredProducts: products,
        selectedBrand: brand,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error as AppError,
        isLoading: false,
      });
    }
  },

  // Search and filter
  searchProducts: (query: string) => {
    const { products, selectedCategory, selectedBrand, sortBy, sortOrder } =
      get();

    let filtered = products;

    // Apply search
    if (query.trim()) {
      filtered = searchProducts(query);
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply brand filter
    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    // Apply sorting
    filtered = sortProducts(filtered, sortBy, sortOrder);

    set({
      filteredProducts: filtered,
      searchQuery: query,
    });
  },

  filterByCategory: (category: string) => {
    const { products, searchQuery, selectedBrand, sortBy, sortOrder } = get();

    let filtered = products;

    // Apply search
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
    }

    // Apply category filter
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Apply brand filter
    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    // Apply sorting
    filtered = sortProducts(filtered, sortBy, sortOrder);

    set({
      filteredProducts: filtered,
      selectedCategory: category,
    });
  },

  filterByBrand: (brand: string) => {
    const { products, searchQuery, selectedCategory, sortBy, sortOrder } =
      get();

    let filtered = products;

    // Apply search
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply brand filter
    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    // Apply sorting
    filtered = sortProducts(filtered, sortBy, sortOrder);

    set({
      filteredProducts: filtered,
      selectedBrand: brand,
    });
  },

  clearFilters: () => {
    const { products, sortBy, sortOrder } = get();
    const sortedProducts = sortProducts(products, sortBy, sortOrder);

    set({
      filteredProducts: sortedProducts,
      searchQuery: "",
      selectedCategory: "",
      selectedBrand: "",
    });
  },

  // Sorting
  setSortBy: (sortBy: "name" | "price" | "rating" | "newest") => {
    const { filteredProducts, sortOrder } = get();
    const sorted = sortProducts(filteredProducts, sortBy, sortOrder);

    set({
      sortBy,
      filteredProducts: sorted,
    });
  },

  setSortOrder: (order: "asc" | "desc") => {
    const { filteredProducts, sortBy } = get();
    const sorted = sortProducts(filteredProducts, sortBy, order);

    set({
      sortOrder: order,
      filteredProducts: sorted,
    });
  },

  // Featured products
  setFeaturedProducts: (products: Product[]) => {
    set({ featuredProducts: products });
  },

  // State management
  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },

  setError: (error: AppError | null) => {
    set({ error });
  },

  reset: () => {
    set(initialState);
  },
}));

// Helper function to sort products
function sortProducts(
  products: Product[],
  sortBy: string,
  order: "asc" | "desc"
): Product[] {
  const sorted = [...products].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "price":
        comparison = a.price - b.price;
        break;
      case "rating":
        comparison = (a.rating || 0) - (b.rating || 0);
        break;
      case "newest":
        comparison =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        break;
      default:
        comparison = 0;
    }

    return order === "asc" ? comparison : -comparison;
  });

  return sorted;
}

// Selectors for better performance
export const useProducts = () => useProductStore((state) => state.products);
export const useFeaturedProducts = () =>
  useProductStore((state) => state.featuredProducts);
export const useCurrentProduct = () =>
  useProductStore((state) => state.currentProduct);
export const useFilteredProducts = () =>
  useProductStore((state) => state.filteredProducts);
export const useProductLoading = () =>
  useProductStore((state) => state.isLoading);
export const useProductError = () => useProductStore((state) => state.error);
export const useProductFilters = () =>
  useProductStore((state) => ({
    searchQuery: state.searchQuery,
    selectedCategory: state.selectedCategory,
    selectedBrand: state.selectedBrand,
    sortBy: state.sortBy,
    sortOrder: state.sortOrder,
  }));
