import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function CategoryShortcuts() {
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

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#E9EEF5",
    marginRight: 8,
  },
  chipActive: { backgroundColor: "#0B66D5" },
  text: { color: "#0B66D5", fontWeight: "700" },
  textActive: { color: "#fff" },
});
