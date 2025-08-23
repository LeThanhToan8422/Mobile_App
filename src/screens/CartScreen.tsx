import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giỏ hàng</Text>
      <Text style={{ color: Colors.muted }}>Chưa có sản phẩm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "700", color: Colors.text },
});
