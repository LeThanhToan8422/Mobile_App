import { useCartStore, CartItem } from "../../store/cartStore";
import { Alert } from "react-native";

export function useCart() {
  const {
    items,
    totalItems,
    totalAmount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCartStore();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      Alert.alert(
        "Xóa sản phẩm",
        "Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?",
        [
          { text: "Hủy", style: "cancel" },
          {
            text: "Xóa",
            onPress: () => removeFromCart(itemId),
            style: "destructive",
          },
        ]
      );
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId: string, itemName: string) => {
    Alert.alert(
      "Xóa sản phẩm",
      `Bạn có muốn xóa "${itemName}" khỏi giỏ hàng?`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xóa",
          onPress: () => removeFromCart(itemId),
          style: "destructive",
        },
      ]
    );
  };

  const handleClearCart = () => {
    if (items.length === 0) return;

    Alert.alert(
      "Xóa giỏ hàng",
      "Bạn có muốn xóa tất cả sản phẩm khỏi giỏ hàng?",
      [
        { text: "Hủy", style: "cancel" },
        { text: "Xóa tất cả", onPress: clearCart, style: "destructive" },
      ]
    );
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      Alert.alert(
        "Giỏ hàng trống",
        "Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán."
      );
      return;
    }

    Alert.alert(
      "Thanh toán",
      `Tổng tiền: ${totalAmount.toLocaleString(
        "vi-VN"
      )}đ\nBạn có muốn tiếp tục thanh toán?`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Thanh toán",
          onPress: () => console.log("Navigate to checkout"),
        },
      ]
    );
  };

  return {
    items,
    totalItems,
    totalAmount,
    handleQuantityChange,
    handleRemoveItem,
    handleClearCart,
    handleCheckout,
  };
}
