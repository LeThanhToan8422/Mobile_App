import { Ionicons } from "@expo/vector-icons";

export const CATEGORY_SECTION_TITLES = {
  mainCategory: {
    title: "Danh mục sản phẩm",
    icon: "grid-outline" as keyof typeof Ionicons.glyphMap,
  },
  subCategory1: {
    title: "Sub Category 1",
    icon: "chevron-forward" as keyof typeof Ionicons.glyphMap,
  },
  subCategory2: {
    title: "Sub Category 2",
    icon: "chevron-forward" as keyof typeof Ionicons.glyphMap,
  },
} as const;

export const CATEGORY_UI_TEXT = {
  viewAll: "Xem tất cả",
  backButton: "Quay lại",
  searchPlaceholder: "Tìm kiếm sản phẩm...",
} as const;
