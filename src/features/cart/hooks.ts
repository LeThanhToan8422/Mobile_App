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
      "Chọn phương thức thanh toán",
      `Tổng tiền: ${totalAmount.toLocaleString(
        "vi-VN"
      )}đ\n\nVui lòng chọn phương thức thanh toán:`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Tiền mặt",
          onPress: () => processCashPayment(),
        },
        {
          text: "Chuyển khoản",
          onPress: () => processBankTransfer(),
        },
        {
          text: "Ví điện tử",
          onPress: () => processEWalletPayment(),
        },
      ]
    );
  };

  const processCashPayment = () => {
    Alert.alert(
      "Thanh toán tiền mặt",
      `Tổng tiền: ${totalAmount.toLocaleString(
        "vi-VN"
      )}đ\n\nĐơn hàng sẽ được xử lý và giao hàng trong 2-3 ngày làm việc.`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xác nhận",
          onPress: () => confirmOrder("Tiền mặt"),
        },
      ]
    );
  };

  const processBankTransfer = () => {
    Alert.alert(
      "Chuyển khoản ngân hàng",
      `Tổng tiền: ${totalAmount.toLocaleString(
        "vi-VN"
      )}đ\n\nThông tin chuyển khoản:\nNgân hàng: Vietcombank\nSố tài khoản: 1234567890\nChủ tài khoản: CÔNG TY ABC\nNội dung: Thanh toan don hang`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Đã chuyển khoản",
          onPress: () => confirmOrder("Chuyển khoản"),
        },
      ]
    );
  };

  const processEWalletPayment = () => {
    Alert.alert(
      "Ví điện tử",
      `Tổng tiền: ${totalAmount.toLocaleString(
        "vi-VN"
      )}đ\n\nChọn ví điện tử:\n- Momo\n- ZaloPay\n- VNPay\n- ShopeePay`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Tiếp tục",
          onPress: () => processEWalletSelection(),
        },
      ]
    );
  };

  const processEWalletSelection = () => {
    Alert.alert("Chọn ví điện tử", "Vui lòng chọn ví điện tử để thanh toán:", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Momo",
        onPress: () => confirmOrder("Momo"),
      },
      {
        text: "ZaloPay",
        onPress: () => confirmOrder("ZaloPay"),
      },
      {
        text: "VNPay",
        onPress: () => confirmOrder("VNPay"),
      },
      {
        text: "ShopeePay",
        onPress: () => confirmOrder("ShopeePay"),
      },
    ]);
  };

  const confirmOrder = (paymentMethod: string) => {
    Alert.alert(
      "Xác nhận đơn hàng",
      `Phương thức thanh toán: ${paymentMethod}\nTổng tiền: ${totalAmount.toLocaleString(
        "vi-VN"
      )}đ\n\nĐơn hàng của bạn đã được xác nhận và sẽ được xử lý sớm nhất!`,
      [
        {
          text: "Hoàn tất",
          onPress: () => {
            // Clear cart after successful order
            clearCart();
            Alert.alert(
              "Đặt hàng thành công!",
              "Cảm ơn bạn đã mua hàng. Chúng tôi sẽ liên hệ sớm nhất để xác nhận đơn hàng.",
              [{ text: "OK" }]
            );
          },
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
