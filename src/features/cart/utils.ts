import { CartItem } from "../../store/cartStore";

export function formatPrice(price: string | number): string {
  if (typeof price === "string") {
    return parseFloat(price).toLocaleString("vi-VN");
  }
  return price.toLocaleString("vi-VN");
}

function parseVietnamesePrice(priceStr: string): number {
  const cleanedPrice = priceStr.replace(/[₫,.đ\s]/g, "");
  return parseFloat(cleanedPrice) || 0;
}

export function formatCartItemForAdd(item: any): Omit<CartItem, "quantity"> {
  return {
    id: item.id,
    name: item.name,
    price:
      typeof item.price === "string"
        ? parseVietnamesePrice(item.price)
        : item.price,
    oldPrice: item.oldPrice
      ? typeof item.oldPrice === "string"
        ? parseVietnamesePrice(item.oldPrice)
        : item.oldPrice
      : undefined,
    image: item.source,
    source: item.source,
    soldText: item.soldText,
    progress: item.progress,
    variant: item.variant || "default",
  };
}

export function calculateItemTotal(item: CartItem): number {
  return item.price * item.quantity;
}

export function getCartSummary(items: CartItem[]) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, item) => sum + calculateItemTotal(item),
    0
  );

  return { totalItems, totalAmount };
}
