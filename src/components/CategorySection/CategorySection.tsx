import React from "react";
import { View, Text, FlatList } from "react-native";
import { CategorySectionProps } from "./CategorySection.types";
import { styles, getCategorySectionStyles } from "./CategorySection.styles";

export default function CategorySection({
  title,
  items,
}: CategorySectionProps) {
  const { ITEM_W } = getCategorySectionStyles();

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.more}>Xem tất cả ›</Text>
      </View>
      <FlatList
        data={items}
        numColumns={3}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.thumb} />
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
