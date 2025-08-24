import { useState, useRef } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { mockProducts } from "../../data/products";
import {
  SearchScreenState,
  SearchScreenActions,
  SearchScreenData,
} from "./SearchScreen.types";
import {
  convertProductsToLegacy,
  searchProductsByQuery,
} from "./SearchScreen.utils";

export function useSearchScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Simple search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const filtered = searchProductsByQuery(mockProducts, searchQuery);
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  };

  // Handle search input
  const handleSearchInput = (text: string) => {
    setQuery(text);

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Debounced search
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(text);
    }, 500);
  };

  // Handle search submit
  const handleSearchSubmit = () => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    performSearch(query);
  };

  // Handle clear search
  const handleClearSearch = () => {
    setQuery("");
    setResults([]);
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
  };

  // Handle product press
  const handleProductPress = (product: any) => {
    (navigation as any).navigate("ProductDetail", {
      productId: product.id,
    });
  };

  // Handle buy now
  const handleBuyNow = (product: any) => {
    Alert.alert("Thêm vào giỏ hàng", `Đã thêm "${product.name}" vào giỏ hàng`, [
      { text: "OK" },
    ]);
  };

  // Handle back press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Convert to legacy format
  const legacyResults = convertProductsToLegacy(results);

  const state: SearchScreenState = {
    query,
    results,
    isLoading,
  };

  const actions: SearchScreenActions = {
    handleSearchInput,
    handleSearchSubmit,
    handleClearSearch,
    handleProductPress,
    handleBuyNow,
    handleBackPress,
  };

  const data: SearchScreenData = {
    legacyResults,
  };

  return {
    state,
    actions,
    data,
  };
}
