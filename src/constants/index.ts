// Global constants for the entire application

// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://api.example.com",
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  VERSION: "v1",
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: "Mobile App",
  VERSION: "1.0.0",
  BUILD_NUMBER: "1",
  BUNDLE_ID: "com.example.mobileapp",
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  USER_TOKEN: "user_token",
  USER_PROFILE: "user_profile",
  CART_DATA: "cart_data",
  THEME_MODE: "theme_mode",
  LANGUAGE: "language",
  NOTIFICATIONS: "notifications",
  RECENT_SEARCHES: "recent_searches",
  FAVORITES: "favorites",
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

// Validation
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  PHONE_REGEX: /^(\+84|84|0)[3|5|7|8|9][0-9]{8}$/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

// Currency
export const CURRENCY = {
  VND: "VND",
  USD: "USD",
  DEFAULT: "VND",
} as const;

// Language
export const LANGUAGE = {
  VI: "vi",
  EN: "en",
  DEFAULT: "vi",
} as const;

// Theme
export const THEME = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
  DEFAULT: "light",
} as const;

// Product
export const PRODUCT = {
  MIN_PRICE: 0,
  MAX_PRICE: 1000000000,
  MIN_RATING: 0,
  MAX_RATING: 5,
  MAX_IMAGES: 10,
  MAX_DESCRIPTION_LENGTH: 1000,
} as const;

// Order
export const ORDER = {
  MIN_AMOUNT: 0,
  MAX_AMOUNT: 1000000000,
  MIN_QUANTITY: 1,
  MAX_QUANTITY: 999,
  MAX_NOTES_LENGTH: 500,
} as const;

// Cart
export const CART = {
  MAX_ITEMS: 100,
  MAX_QUANTITY_PER_ITEM: 99,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Lỗi kết nối mạng. Vui lòng kiểm tra lại.",
  UNAUTHORIZED: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
  FORBIDDEN: "Bạn không có quyền truy cập tính năng này.",
  NOT_FOUND: "Không tìm thấy dữ liệu yêu cầu.",
  VALIDATION_ERROR: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
  SERVER_ERROR: "Lỗi máy chủ. Vui lòng thử lại sau.",
  UNKNOWN_ERROR: "Đã xảy ra lỗi không xác định.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Đăng nhập thành công!",
  REGISTER_SUCCESS: "Đăng ký thành công!",
  LOGOUT_SUCCESS: "Đăng xuất thành công!",
  UPDATE_PROFILE_SUCCESS: "Cập nhật thông tin thành công!",
  ADD_TO_CART_SUCCESS: "Đã thêm sản phẩm vào giỏ hàng!",
  REMOVE_FROM_CART_SUCCESS: "Đã xóa sản phẩm khỏi giỏ hàng!",
  ORDER_SUCCESS: "Đặt hàng thành công!",
  SAVE_SUCCESS: "Lưu thành công!",
  DELETE_SUCCESS: "Xóa thành công!",
} as const;

// Loading Messages
export const LOADING_MESSAGES = {
  LOADING: "Đang tải...",
  SAVING: "Đang lưu...",
  DELETING: "Đang xóa...",
  UPLOADING: "Đang tải lên...",
  PROCESSING: "Đang xử lý...",
} as const;

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: "DD/MM/YYYY",
  DISPLAY_TIME: "DD/MM/YYYY HH:mm",
  API: "YYYY-MM-DD",
  API_TIME: "YYYY-MM-DDTHH:mm:ss.SSSZ",
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp"],
  MAX_FILES: 5,
} as const;

// Cache
export const CACHE = {
  DEFAULT_TTL: 5 * 60 * 1000, // 5 minutes
  LONG_TTL: 30 * 60 * 1000, // 30 minutes
  VERY_LONG_TTL: 24 * 60 * 60 * 1000, // 24 hours
} as const;

// Animation
export const ANIMATION = {
  DURATION: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
  },
  EASING: {
    EASE_IN: "ease-in",
    EASE_OUT: "ease-out",
    EASE_IN_OUT: "ease-in-out",
  },
} as const;

// Dimensions
export const DIMENSIONS = {
  SCREEN_PADDING: 16,
  CARD_PADDING: 12,
  BORDER_RADIUS: {
    SMALL: 4,
    MEDIUM: 8,
    LARGE: 12,
    XLARGE: 16,
  },
  SHADOW: {
    SMALL: 2,
    MEDIUM: 4,
    LARGE: 8,
  },
} as const;
