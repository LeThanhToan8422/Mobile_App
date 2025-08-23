import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { Colors } from "../theme/colors";

const { width } = Dimensions.get("window");
const ITEM_W = (width - 24 - 16) / 3;

export type CategoryItem = { id: string; name: string };

export default function CategorySection({
  title,
  items,
}: {
  title: string;
  items: CategoryItem[];
}) {
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

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    paddingBottom: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  title: { fontWeight: "800", color: Colors.text },
  more: { color: Colors.primary, fontWeight: "600" },
  item: { width: ITEM_W, alignItems: "center", paddingVertical: 12 },
  thumb: {
    width: ITEM_W - 24,
    height: ITEM_W - 24,
    borderRadius: 12,
    backgroundColor: "#f4f6f8",
    marginBottom: 6,
  },
  name: { fontSize: 12, color: Colors.text },
});
