// Home screen constants and configuration
// Data has been moved to src/data/ directory

import { Dimensions, ImageSourcePropType } from "react-native";
import { FeaturedArticle } from "./types";

export const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const CONTENT_BASE = 369;
export const CONTENT_WIDTH = SCREEN_WIDTH - 24; // padding 12*2
export const SCALE = CONTENT_WIDTH / CONTENT_BASE;
export const FLASH_ITEM_WIDTH = 148 * SCALE;

// Animation constants
export const ANIMATION_DELAY = 80; // milliseconds between each item animation

// Layout constants
export const CARD_SPACING = 12;
export const SECTION_SPACING = 24;
export const HEADER_HEIGHT = 60;

// Flash sale constants
export const FLASH_SALE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
export const FLASH_SALE_UPDATE_INTERVAL = 1000; // 1 second

// Banner constants
export const BANNER_AUTO_PLAY_INTERVAL = 5000; // 5 seconds
export const BANNER_HEIGHT = 200;

// Category constants
export const CATEGORY_ICON_SIZE = 48;
export const CATEGORY_GRID_COLUMNS = 4;

// Product grid constants
export const PRODUCT_GRID_COLUMNS = 2;
export const PRODUCT_CARD_HEIGHT = 280;
export const PRODUCT_IMAGE_HEIGHT = 180;

// Brand carousel constants
export const BRAND_ITEM_WIDTH = 100;
export const BRAND_ITEM_HEIGHT = 60;
export const BRAND_SPACING = 16;

// Featured section constants
export const FEATURED_ITEMS_LIMIT = 6;
export const HOT_PRODUCTS_LIMIT = 8;
export const NEW_ARRIVALS_LIMIT = 4;

// Assets constants
export const HOME_ASSETS = {
  banners: {
    subBanner: require("../../../assets/banners/111f441263cc356856a3d5519edba39600c39b2e.png"),
    mainBanner1: require("../../../assets/banners/374b719df0c2fd9721df208e12a37f169addfc7e.png"),
    mainBanner2: require("../../../assets/banners/111f441263cc356856a3d5519edba39600c39b2e.png"),
  },
  products: {
    newArrival: require("../../../assets/products/78edeebfee2c722175d103530b55162861f60fdb.png"),
  },
};

export const FEATURED_ARTICLES: FeaturedArticle[] = [
  {
    source: require("../../../assets/featured-articles/918905dd79f2a5e6d57814a5f396b5d13d0dbcb1.jpg"),
    title: "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động",
    date: "13/02/2025",
  },
  {
    source: require("../../../assets/featured-articles/0cd21eee2e2af2e98c3671d24fdf222a7a44a1c9.jpg"),
    title: "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động",
    date: "13/02/2025",
  },
  {
    source: require("../../../assets/featured-articles/3b16a3c6c59a956b498e1040eaa556d3f77ec72e.jpg"),
    title: "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động",
    date: "13/02/2025",
  },
];
