import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { LEFT_RAIL_TITLES } from "@features/category/constants";
import { FEATURED_ARTICLES } from "./constants";
import { mockProducts } from "../../data/products";
import { mockBrands } from "../../data/brands";
import { convertToLegacyProducts } from "../../utils/helpers";
import { FeaturedArticle } from "./types";
import { useCartStore } from "../../store/cartStore";
import { formatCartItemForAdd } from "../cart";

export function useHomeScreen() {
  const navigation = useNavigation();
  const { addToCart } = useCartStore();

  const rawProducts = mockProducts;
  const products = React.useMemo(
    () => convertToLegacyProducts(rawProducts),
    [rawProducts]
  );
  const brandLogos = mockBrands.map((brand) => brand.logo);
  const brandNames = mockBrands.map((brand) => brand.name);
  const brandsForCarousel = React.useMemo(
    () =>
      mockBrands.map((brand) => ({
        name: brand.name,
        source: brand.logo, // Use logo directly since it's already a require()
      })),
    []
  );

  const keyExtractor = React.useCallback((it: { id: string }) => it.id, []);

  // Tất cả section đều sử dụng full data products
  const flashSaleProducts = products;
  const hotProducts = products;
  const recommendedProducts = products;
  const newArrivalsProducts = products;

  const featuredArticles: FeaturedArticle[] = React.useMemo(
    () => FEATURED_ARTICLES,
    []
  );

  // Navigation handler for CategoryIconStrip
  const handleCategoryPress = (categoryName: string, index: number) => {
    // Tìm index chính xác trong leftTitles
    const correctIndex = LEFT_RAIL_TITLES.findIndex(
      (title: string) => title === categoryName
    );

    // Navigate to Category screen with selected filter
    (navigation as any).navigate("Category", {
      selectedFilter: categoryName,
      filterIndex: correctIndex >= 0 ? correctIndex : index,
    });
  };

  // Add to cart handler
  const handleBuyNow = (item: any) => {
    const cartItem = formatCartItemForAdd(item);
    addToCart(cartItem);

    // Show success message
    Alert.alert("Thành công!", `Đã thêm "${item.name}" vào giỏ hàng`, [
      { text: "OK" },
    ]);
  };

  return {
    products,
    brandLogos,
    brandNames,
    brandsForCarousel,
    keyExtractor,
    flashSaleProducts,
    hotProducts,
    recommendedProducts,
    newArrivalsProducts,
    featuredArticles,
    handleCategoryPress,
    handleBuyNow,
  } as const;
}
