import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LEFT_RAIL_TITLES } from "@features/category/constants";
import { FEATURED_ARTICLES } from "./constants";
import { mockProducts } from "../../data/products";
import { mockBrands } from "../../data/brands";
import { convertToLegacyProducts } from "../../utils/helpers";
import { FeaturedArticle } from "./types";

export function useHomeScreen() {
  const navigation = useNavigation();

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

  const flashSaleProducts = products;
  const hotProducts = products;
  const recommendedProducts = React.useMemo(
    () => products.slice(0, 3),
    [products]
  );

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

  return {
    products,
    brandLogos,
    brandNames,
    brandsForCarousel,
    keyExtractor,
    flashSaleProducts,
    hotProducts,
    recommendedProducts,
    featuredArticles,
    handleCategoryPress,
  } as const;
}
