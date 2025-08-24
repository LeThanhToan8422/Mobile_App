// Global types for the entire application

// Base API Response
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  error?: string;
}

// Pagination
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Error handling
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error: AppError | null;
}

// Product types
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  images: string[];
  thumbnail: string;
  category: string;
  brand: string;
  description?: string;
  specifications?: Record<string, any>;
  inStock: boolean;
  stockQuantity: number;
  rating?: number;
  reviewCount?: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  parentId?: string;
  children?: ProductCategory[];
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string | any; // Allow both string and ImageSourcePropType
  description?: string;
  website?: string;
  productCount: number;
}

// User types
export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  avatar?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  address?: Address;
  preferences?: UserPreferences;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  address: string;
  isDefault: boolean;
}

export interface UserPreferences {
  language: "vi" | "en";
  currency: "VND" | "USD";
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

// Order types
export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  shippingFee: number;
  discountAmount: number;
  finalAmount: number;
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentMethod =
  | "cod"
  | "bank_transfer"
  | "credit_card"
  | "momo"
  | "vnpay"
  | "zalopay";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

// News/Article types
export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  featuredImage: string;
  author: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// Cart types
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selected: boolean;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  updatedAt: string;
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Category: { categoryId?: string };
  ProductDetail: { productId: string };
  Cart: undefined;
  Account: undefined;
  News: undefined;
  OrderDetail: { orderId: string };
  Checkout: undefined;
  Search: { query?: string };
};

export type TabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  News: undefined;
  Account: undefined;
};

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface ThemeTypography {
  h1: {
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
  };
  h2: {
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
  };
  h3: {
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
  };
  body: {
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
  };
  caption: {
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
  };
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}
