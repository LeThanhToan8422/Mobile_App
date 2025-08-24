import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../theme/colors";
import { SectionHeaderProps } from "./SectionHeader.types";
import { styles } from "./SectionHeader.styles";

export default function SectionHeader({
  icon = "star-outline",
  title,
  onPressSeeAll,
  rightExtra,
  hideSeeAll,
  marginTop = 16,
  marginBottom = 8,
  titleStyle,
}: SectionHeaderProps) {
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
              source={icon as any}
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
