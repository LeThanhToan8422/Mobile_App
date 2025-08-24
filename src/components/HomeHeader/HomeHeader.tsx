import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { HomeHeaderProps } from "./HomeHeader.types";
import { styles } from "./HomeHeader.styles";

export default function HomeHeader({}: HomeHeaderProps) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleSearchPress = () => {
    (navigation as any).navigate("Search");
  };

  return (
    <View style={{ backgroundColor: "#007AFF" }}>
      <View style={[styles.spacer, { height: Math.max(insets.top, 24) }]} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.searchWrap}
          onPress={handleSearchPress}
          activeOpacity={0.8}>
          <Ionicons
            name="search"
            color="#8E8E93"
            size={18}
            style={{ marginHorizontal: 8 }}
          />
          <View style={styles.input}>
            <Text style={styles.searchPlaceholder}>Tìm kiếm sản phẩm</Text>
          </View>
          <View style={styles.cameraButton}>
            <Ionicons name="camera-outline" color="#8E8E93" size={18} />
          </View>
        </TouchableOpacity>
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
