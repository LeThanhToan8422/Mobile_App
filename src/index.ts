// Main export file for the entire application

// Types
export * from "./types";

// Constants
export * from "./constants";

// Utils
export * from "./utils/formatters";
export * from "./utils/helpers";

// Hooks
export * from "./hooks/useApi";

// Store
export * from "./store/productStore";

// Data
export * from "./data/products";
export * from "./data/brands";

// API
export { default as apiClient } from "./api/client";

// Components (re-export main components)
export { default as ProductCard } from "./components/ProductCard";
export { default as BannerCarousel } from "./components/BannerCarousel";
export { default as BrandCarousel } from "./components/BrandCarousel";
export { default as CategoryIconStrip } from "./components/CategoryIconStrip";
export { default as HomeHeader } from "./components/HomeHeader";
export { default as MiniProductCard } from "./components/MiniProductCard";
export { default as SectionHeader } from "./components/SectionHeader";

// Screens
export { default as HomeScreen } from "./screens/HomeScreen";
export { default as CategoryScreen } from "./screens/CategoryScreen";
export { default as NewsScreen } from "./screens/NewsScreen";
export { default as CartScreen } from "./screens/CartScreen";
export { default as AccountScreen } from "./screens/AccountScreen";

// Navigation
export { default as RootNavigator } from "./navigation/RootNavigator";

// Theme
export * from "./theme/colors";
