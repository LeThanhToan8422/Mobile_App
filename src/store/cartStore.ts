import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: any;
  quantity: number;
  source: string;
  soldText?: string;
  progress?: number;
  variant?: "default" | "flashSale";
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;

  // Actions
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (itemId: string) => number;
  isInCart: (itemId: string) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalAmount: 0,

      addToCart: (item) => {
        const { items } = get();
        const existingItem = items.find((i) => i.id === item.id);

        if (existingItem) {
          // If item already exists, increase quantity
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            totalItems: state.totalItems + 1,
            totalAmount: state.totalAmount + item.price,
          }));
        } else {
          // Add new item with quantity 1
          const newItem = { ...item, quantity: 1 };
          set((state) => ({
            items: [...state.items, newItem],
            totalItems: state.totalItems + 1,
            totalAmount: state.totalAmount + item.price,
          }));
        }
      },

      removeFromCart: (itemId) => {
        const { items } = get();
        const itemToRemove = items.find((i) => i.id === itemId);

        if (itemToRemove) {
          set((state) => ({
            items: state.items.filter((i) => i.id !== itemId),
            totalItems: state.totalItems - itemToRemove.quantity,
            totalAmount:
              state.totalAmount - itemToRemove.price * itemToRemove.quantity,
          }));
        }
      },

      updateQuantity: (itemId, quantity) => {
        const { items } = get();
        const item = items.find((i) => i.id === itemId);

        if (item && quantity > 0) {
          const quantityDiff = quantity - item.quantity;
          set((state) => ({
            items: state.items.map((i) =>
              i.id === itemId ? { ...i, quantity } : i
            ),
            totalItems: state.totalItems + quantityDiff,
            totalAmount: state.totalAmount + item.price * quantityDiff,
          }));
        } else if (quantity <= 0) {
          get().removeFromCart(itemId);
        }
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalAmount: 0,
        });
      },

      getItemQuantity: (itemId) => {
        const { items } = get();
        const item = items.find((i) => i.id === itemId);
        return item ? item.quantity : 0;
      },

      isInCart: (itemId) => {
        const { items } = get();
        return items.some((i) => i.id === itemId);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
