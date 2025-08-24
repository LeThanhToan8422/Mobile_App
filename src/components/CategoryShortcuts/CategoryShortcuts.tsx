import React from "react";
import { View, Text, ScrollView } from "react-native";
import { CategoryShortcutsProps } from "./CategoryShortcuts.types";
import { styles } from "./CategoryShortcuts.styles";

export default function CategoryShortcuts({}: CategoryShortcutsProps) {
  const items = [
    "Bộ lọc dầu",
    "Bộ lọc không khí",
    "Bộ lọc nhiên liệu",
    "Bộ lọc trong cabin",
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      scrollEventThrottle={16}
      decelerationRate="normal"
      bounces={false}>
      {items.map((t, i) => (
        <View key={i} style={[styles.chip, i === 0 && styles.chipActive]}>
          <Text style={[styles.text, i === 0 && styles.textActive]}>{t}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
