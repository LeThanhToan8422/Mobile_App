import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../features/cart";

interface CartTabIconProps {
  color: string;
  size: number;
}

export default function CartTabIcon({ color, size }: CartTabIconProps) {
  const { totalItems } = useCart();

  return (
    <View style={{ position: "relative" }}>
      <Ionicons name="cart-outline" color={color} size={size} />
      {totalItems > 0 && (
        <View
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            backgroundColor: "#FF4D4F",
            minWidth: 16,
            height: 16,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: "#fff",
          }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "700",
              textAlign: "center",
            }}>
            {totalItems > 99 ? "99+" : totalItems}
          </Text>
        </View>
      )}
    </View>
  );
}
