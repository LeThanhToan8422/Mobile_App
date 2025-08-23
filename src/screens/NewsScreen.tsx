import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import SectionHeader from "@components/SectionHeader";
import { Colors } from "@theme/colors";
import { useNewsScreen } from "@features/news/hooks";
import { SECTION_TITLES } from "@features/news/sectionTitles";

export default function NewsScreen() {
  const { items, keyExtractor } = useNewsScreen();

  return (
    <FlatList
      ListHeaderComponent={
        <SectionHeader
          icon={SECTION_TITLES.newsFeatured.icon}
          title={SECTION_TITLES.newsFeatured.title}
        />
      }
      data={items}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate="normal"
      bounces={true}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.thumb} />
          <View style={{ flex: 1 }}>
            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <Text style={styles.dots}>⋯</Text>
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 24 }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  thumb: { width: 88, height: 56, borderRadius: 8, marginRight: 12 },
  title: { fontWeight: "700", color: Colors.text },
  date: { color: Colors.muted, marginTop: 8 },
  dots: { fontSize: 22, color: Colors.muted, paddingHorizontal: 8 },
});
