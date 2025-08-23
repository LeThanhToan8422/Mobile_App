import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CategoryHeaderProps {
  onBackPress?: () => void;
  onSearchChange?: (text: string) => void;
  onCameraPress?: () => void;
  onNotificationPress?: () => void;
}

export default function CategoryHeader({
  onBackPress,
  onSearchChange,
  onCameraPress,
  onNotificationPress,
}: CategoryHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ backgroundColor: Colors.primary }}>
      {/* Status Bar Spacer */}
      <View style={[styles.spacer, { height: Math.max(insets.top, 24) }]} />

      {/* Header Content */}
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackPress}
          activeOpacity={0.8}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Search Bar */}
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
            onChangeText={onSearchChange}
          />
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={onCameraPress}
            activeOpacity={0.8}>
            <Ionicons name="camera-outline" color={Colors.muted} size={18} />
          </TouchableOpacity>
        </View>

        {/* Notification Button */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={{ position: "relative" }}
            onPress={onNotificationPress}
            activeOpacity={0.8}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeTxt}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    backgroundColor: Colors.primary,
  },
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingTop: Platform.select({ ios: 8, android: 6 }),
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  searchWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 42,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    color: Colors.text,
    paddingRight: 12,
    fontSize: 14,
  },
  cameraButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
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
  badgeTxt: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "900",
  },
});
