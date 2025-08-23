import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tài khoản</Text>
      <Text style={{ color: Colors.muted }}>Đăng nhập / Đăng ký</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "700", color: Colors.text },
});
