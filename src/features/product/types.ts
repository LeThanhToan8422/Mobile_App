import { Product } from "../../types";

export interface ProductDetail extends Product {
  // Extended properties for detail view
  selectedImageIndex?: number;
  quantity?: number;
}

export interface ProductDetailProps {
  productId: string;
}

export interface ProductDetailActions {
  onAddToCart: () => void;
  onBuyNow: () => void;
  onQuantityChange: (quantity: number) => void;
  onImageSelect: (index: number) => void;
}
