import React, { ReactNode } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextStyle,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/colors";

type Props = {
  icon?: keyof typeof Ionicons.glyphMap | ImageSourcePropType;
  title: string;
  onPressSeeAll?: () => void;
  rightExtra?: ReactNode;
  hideSeeAll?: boolean;
  marginTop?: number;
  marginBottom?: number;
  titleStyle?: TextStyle;
};

export default function SectionHeader({
  icon = "star-outline",
  title,
  onPressSeeAll,
  rightExtra,
  hideSeeAll,
  marginTop = 16,
  marginBottom = 8,
  titleStyle,
}: Props) {
  const isIonIcon = typeof icon === "string";

  return (
    <View style={[styles.container, { marginTop, marginBottom }]}>
      <View style={styles.left}>
        {isIonIcon ? (
          <Ionicons
            name={icon as keyof typeof Ionicons.glyphMap}
            size={24}
            color={Colors.primary}
            style={{ marginRight: 8 }}
          />
        ) : (
          <View style={[styles.iconContainer, { marginRight: 8 }]}>
            <Image
              source={icon as ImageSourcePropType}
              style={styles.customIcon}
              resizeMode="contain"
            />
          </View>
        )}
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      <View style={styles.right}>
        {rightExtra}
        {!hideSeeAll && (
          <Pressable
            onPress={onPressSeeAll}
            hitSlop={8}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 8,
            }}>
            <Text style={styles.seeAll}>Xem tất cả</Text>
            <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  left: { flexDirection: "row", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "700", color: Colors.text },
  right: { flexDirection: "row", alignItems: "center" },
  seeAll: {
    color: Colors.primary,
    fontWeight: "600",
    marginRight: 4,
    fontSize: 12,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  customIcon: {
    width: 24,
    height: 24,
    opacity: 1,
  },
});
