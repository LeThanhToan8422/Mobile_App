export interface CartItemDisplay {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  image: any;
  quantity: number;
  source: string;
  soldText?: string;
  progress?: number;
  variant?: "default" | "flashSale";
}

export interface CartSummary {
  totalItems: number;
  totalAmount: number;
}

export interface CartActions {
  onQuantityChange: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string, itemName: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}
