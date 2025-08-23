import React from "react";
import { View, TextInput, StyleSheet, Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeHeader() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: Colors.primary }}>
      <View style={[styles.spacer, { height: Math.max(insets.top, 24) }]} />
      <View style={styles.container}>
        <View style={styles.searchWrap}>
          <Ionicons
            name="search"
            color={Colors.muted}
            size={18}
            style={{ marginHorizontal: 8 }}
          />
          <TextInput
            placeholder="Tìm kiếm sản phẩm"
            placeholderTextColor={Colors.muted}
            style={styles.input}
          />
          <Ionicons
            name="camera-outline"
            color={Colors.muted}
            size={18}
            style={{ marginHorizontal: 8 }}
          />
        </View>
        <View style={styles.actions}>
          <View style={{ position: "relative" }}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeTxt}>1</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: { backgroundColor: Colors.primary },
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingTop: Platform.select({ ios: 8, android: 6 }),
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 42,
  },
  input: { flex: 1, color: Colors.text, paddingRight: 12 },
  actions: { flexDirection: "row", alignItems: "center", marginLeft: 12 },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FF4D4F",
    minWidth: 14,
    height: 14,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: { color: "#fff", fontSize: 9, fontWeight: "900" },
});
