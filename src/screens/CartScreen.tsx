import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../theme/colors";
import { CartItem } from "../store/cartStore";
import { useCart } from "../features/cart";

export default function CartScreen() {
  const insets = useSafeAreaInsets();
  const {
    items,
    totalItems,
    totalAmount,
    handleQuantityChange,
    handleRemoveItem,
    handleClearCart,
    handleCheckout,
  } = useCart();

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      {/* Product Image */}
      <View style={styles.itemImageContainer}>
        <Image
          source={item.image}
          style={styles.itemImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Info */}
      <View style={styles.itemInfo}>
        <Text style={styles.itemName} numberOfLines={2}>
          {item.name}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>
            {typeof item.price === "number"
              ? item.price.toLocaleString("vi-VN")
              : item.price}
            đ
          </Text>
          {item.oldPrice && (
            <Text style={styles.itemOldPrice}>
              {typeof item.oldPrice === "number"
                ? item.oldPrice.toLocaleString("vi-VN")
                : item.oldPrice}
              đ
            </Text>
          )}
        </View>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityBtn}
            onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
            activeOpacity={0.7}>
            <Ionicons name="remove" size={16} color={Colors.primary} />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{item.quantity}</Text>

          <TouchableOpacity
            style={styles.quantityBtn}
            onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
            activeOpacity={0.7}>
            <Ionicons name="add" size={16} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Remove Button */}
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => handleRemoveItem(item.id, item.name)}
        activeOpacity={0.7}>
        <Ionicons name="trash-outline" size={20} color="#FF4D4F" />
      </TouchableOpacity>
    </View>
  );

  if (items.length === 0) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={80} color={Colors.muted} />
          <Text style={styles.emptyTitle}>Giỏ hàng trống</Text>
          <Text style={styles.emptySubtitle}>
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </Text>
          <TouchableOpacity style={styles.shopNowBtn} activeOpacity={0.8}>
            <Text style={styles.shopNowText}>Mua sắm ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Giỏ hàng</Text>
        <TouchableOpacity onPress={handleClearCart} activeOpacity={0.7}>
          <Text style={styles.clearCartText}>Xóa tất cả</Text>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <FlatList
        data={items}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cartList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Footer with Total and Checkout */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>
            Tổng cộng ({totalItems} sản phẩm):
          </Text>
          <Text style={styles.totalAmount}>
            {totalAmount.toLocaleString("vi-VN")}đ
          </Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={handleCheckout}
          activeOpacity={0.8}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F8",
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
  },
  clearCartText: {
    fontSize: 14,
    color: "#FF4D4F",
    fontWeight: "500",
  },

  // Empty State
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: Colors.muted,
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
  shopNowBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  shopNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  // Cart List
  cartList: {
    padding: 16,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  itemImageContainer: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF4D4F",
    marginRight: 8,
  },
  itemOldPrice: {
    fontSize: 14,
    color: Colors.muted,
    textDecorationLine: "line-through",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: "center",
  },
  removeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF2F0",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  separator: {
    height: 12,
  },

  // Footer
  footer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 16,
    color: Colors.muted,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
  },
  checkoutBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
