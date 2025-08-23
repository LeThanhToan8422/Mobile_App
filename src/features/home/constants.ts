// Home screen constants and configuration
// Data has been moved to src/data/ directory

import { Dimensions } from "react-native";

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
