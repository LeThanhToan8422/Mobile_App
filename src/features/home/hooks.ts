import React from "react";
import { ImageSourcePropType } from "react-native";
import {
  products as PRODUCTS,
  brandLogos as BRAND_LOGOS,
  brandNames as BRAND_NAMES,
} from "./constants";

export type FeaturedArticle = {
  source: ImageSourcePropType;
  title: string;
  date: string;
};

export function useHomeScreen() {
  const products = PRODUCTS;
  const brandLogos = BRAND_LOGOS;
  const brandNames = BRAND_NAMES;

  const keyExtractor = React.useCallback((it: { id: string }) => it.id, []);

  const flashSaleProducts = products;
  const hotProducts = products;
  const recommendedProducts = React.useMemo(() => products.slice(0, 3), []);

  const featuredArticles: FeaturedArticle[] = React.useMemo(
    () => [
      {
        source: require("../../../assets/featured-articles/918905dd79f2a5e6d57814a5f396b5d13d0dbcb1.jpg"),
        title:
          "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động",
        date: "13/02/2025",
      },
      {
        source: require("../../../assets/featured-articles/0cd21eee2e2af2e98c3671d24fdf222a7a44a1c9.jpg"),
        title:
          "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động",
        date: "13/02/2025",
      },
      {
        source: require("../../../assets/featured-articles/3b16a3c6c59a956b498e1040eaa556d3f77ec72e.jpg"),
        title:
          "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động",
        date: "13/02/2025",
      },
    ],
    []
  );

  return {
    products,
    brandLogos,
    brandNames,
    keyExtractor,
    flashSaleProducts,
    hotProducts,
    recommendedProducts,
    featuredArticles,
  } as const;
}
