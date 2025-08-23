import { ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconType = keyof typeof Ionicons.glyphMap | ImageSourcePropType;

export const SECTION_TITLES: Record<string, { icon: IconType; title: string }> =
  {
    featuredCategories: {
      icon: "grid-outline",
      title: "Danh mục tiêu biểu",
    },
    flashSale: {
      icon: require("../../../assets/icons/FlashSale.png"),
      title: "FLASH SALE",
    },
    featuredBrands: {
      icon: require("../../../assets/icons/FeaturedBrands.png"),
      title: "Thương Hiệu Nổi Bật",
    },
    hotProducts: {
      icon: require("../../../assets/icons/HotProducts.png"),
      title: "Sản Phẩm Bán Chạy",
    },
    forYou: {
      icon: require("../../../assets/icons/ForYou.png"),
      title: "Dành Cho Bạn",
    },
    coupons: {
      icon: "pricetags-outline",
      title: "Mã Giảm Giá",
    },
    newsFeatured: {
      icon: require("../../../assets/icons/Article.png"),
      title: "Bài Viết Nổi Bật",
    },
    newArrivals: {
      icon: require("../../../assets/icons/Goods.png"),
      title: "Hàng Mới Về",
    },
  };

export const UI_TEXT = {
  buttons: {
    seeAll: "Xem tất cả",
    buyNow: "Mua ngay",
  },
  productInfo: {
    soldText: "Đã bán 88 sản phẩm",
    onlyOneLeft: "Chỉ còn 1 sản phẩm",
    discount: "-10%",
  },
  sections: {
    newArrivals: "Hàng Mới Về",
    newsFeatured: "Bài Viết Nổi Bật",
  },
};
