import React from "react";
import { View, TextInput, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeHeaderProps } from "./HomeHeader.types";
import { styles } from "./HomeHeader.styles";

export default function HomeHeader({}: HomeHeaderProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: "#007AFF" }}>
      <View style={[styles.spacer, { height: Math.max(insets.top, 24) }]} />
      <View style={styles.container}>
        <View style={styles.searchWrap}>
          <Ionicons
            name="search"
            color="#8E8E93"
            size={18}
            style={{ marginHorizontal: 8 }}
          />
          <TextInput
            placeholder="Tìm kiếm sản phẩm"
            placeholderTextColor="#8E8E93"
            style={styles.input}
          />
          <View style={styles.cameraButton}>
            <Ionicons name="camera-outline" color="#8E8E93" size={18} />
          </View>
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
