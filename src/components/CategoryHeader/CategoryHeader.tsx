import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { CategoryHeaderProps } from "./CategoryHeader.types";
import { styles } from "./CategoryHeader.styles";

export default function CategoryHeader({
  onBackPress,
  onSearchChange,
  onCameraPress,
  onNotificationPress,
}: CategoryHeaderProps) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleSearchPress = () => {
    (navigation as any).navigate("Search");
  };

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
        <TouchableOpacity
          style={styles.searchWrap}
          onPress={handleSearchPress}
          activeOpacity={0.8}>
          <Ionicons
            name="search"
            color={Colors.muted}
            size={18}
            style={{ marginHorizontal: 8 }}
          />
          <Text style={styles.searchPlaceholder}>Tìm kiếm sản phẩm</Text>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={onCameraPress}
            activeOpacity={0.8}>
            <Ionicons name="camera-outline" color={Colors.muted} size={18} />
          </TouchableOpacity>
        </TouchableOpacity>

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
