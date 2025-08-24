import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CartItem } from "../store/cartStore";
import { useCart, cartStyles } from "../features/cart";

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
    <View style={cartStyles.cartItem}>
      {/* Product Image */}
      <View style={cartStyles.itemImageContainer}>
        <Image
          source={item.image}
          style={cartStyles.itemImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Info */}
      <View style={cartStyles.itemInfo}>
        <Text style={cartStyles.itemName} numberOfLines={2}>
          {item.name}
        </Text>

        <View style={cartStyles.priceContainer}>
          <Text style={cartStyles.itemPrice}>
            {typeof item.price === "number"
              ? item.price.toLocaleString("vi-VN")
              : item.price}
            đ
          </Text>
          {item.oldPrice && (
            <Text style={cartStyles.itemOldPrice}>
              {typeof item.oldPrice === "number"
                ? item.oldPrice.toLocaleString("vi-VN")
                : item.oldPrice}
              đ
            </Text>
          )}
        </View>

        {/* Quantity Controls */}
        <View style={cartStyles.quantityContainer}>
          <TouchableOpacity
            style={cartStyles.quantityBtn}
            onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
            activeOpacity={0.7}>
            <Ionicons name="remove" size={16} color="#007AFF" />
          </TouchableOpacity>

          <Text style={cartStyles.quantityText}>{item.quantity}</Text>

          <TouchableOpacity
            style={cartStyles.quantityBtn}
            onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
            activeOpacity={0.7}>
            <Ionicons name="add" size={16} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Remove Button */}
      <TouchableOpacity
        style={cartStyles.removeBtn}
        onPress={() => handleRemoveItem(item.id, item.name)}
        activeOpacity={0.7}>
        <Ionicons name="trash-outline" size={20} color="#FF4D4F" />
      </TouchableOpacity>
    </View>
  );

  if (items.length === 0) {
    return (
      <View style={[cartStyles.container, { paddingTop: insets.top }]}>
        <View style={cartStyles.emptyContainer}>
          <Ionicons name="cart-outline" size={80} color="#8E8E93" />
          <Text style={cartStyles.emptyTitle}>Giỏ hàng trống</Text>
          <Text style={cartStyles.emptySubtitle}>
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </Text>
          <TouchableOpacity style={cartStyles.shopNowBtn} activeOpacity={0.8}>
            <Text style={cartStyles.shopNowText}>Mua sắm ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={[cartStyles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={cartStyles.header}>
        <Text style={cartStyles.headerTitle}>Giỏ hàng</Text>
        <TouchableOpacity onPress={handleClearCart} activeOpacity={0.7}>
          <Text style={cartStyles.clearCartText}>Xóa tất cả</Text>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <FlatList
        data={items}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={cartStyles.cartList}
        ItemSeparatorComponent={() => <View style={cartStyles.separator} />}
      />

      {/* Footer with Total and Checkout */}
      <View style={cartStyles.footer}>
        {/* Order Summary */}
        <View style={cartStyles.orderSummary}>
          <Text style={cartStyles.summaryTitle}>Tóm tắt đơn hàng</Text>

          <View style={cartStyles.summaryRow}>
            <Text style={cartStyles.summaryLabel}>Số lượng sản phẩm:</Text>
            <Text style={cartStyles.summaryValue}>{totalItems}</Text>
          </View>

          <View style={cartStyles.summaryRow}>
            <Text style={cartStyles.summaryLabel}>Phí vận chuyển:</Text>
            <Text style={cartStyles.summaryValue}>Miễn phí</Text>
          </View>

          <View style={cartStyles.summaryRow}>
            <Text style={cartStyles.summaryLabel}>Thuế VAT:</Text>
            <Text style={cartStyles.summaryValue}>0đ</Text>
          </View>

          <View style={[cartStyles.summaryRow, cartStyles.totalRow]}>
            <Text style={cartStyles.totalLabel}>
              Tổng cộng ({totalItems} sản phẩm):
            </Text>
            <Text style={cartStyles.totalAmount}>
              {totalAmount.toLocaleString("vi-VN")}đ
            </Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity
          style={cartStyles.checkoutBtn}
          onPress={handleCheckout}
          activeOpacity={0.8}>
          <Text style={cartStyles.checkoutText}>Thanh toán ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
