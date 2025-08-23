import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SectionHeader from "@components/SectionHeader";
import { Colors } from "@theme/colors";
import CategorySection from "@components/CategorySection";
import { useCategoryScreen } from "@features/category/hooks";
import { LEFT_RAIL_WIDTH as LEFT_W } from "@features/category/constants";
import { SECTION_TITLES } from "@features/category/sectionTitles";

export default function CategoryScreen() {
  const { leftTitles, leftActiveIndex, section1, section2 } =
    useCategoryScreen();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerBlue} />
      <View style={styles.container}>
        <View style={styles.leftRail}>
          {leftTitles.map((t, i) => (
            <View
              key={i}
              style={[
                styles.leftItem,
                i === leftActiveIndex && styles.leftItemActive,
              ]}
            />
          ))}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate="normal"
          bounces={true}>
          <SectionHeader
            icon={SECTION_TITLES.airFilter.icon}
            title={SECTION_TITLES.airFilter.title}
          />
          <CategorySection
            title={SECTION_TITLES.subCategories.category1}
            items={section1}
          />
          <CategorySection
            title={SECTION_TITLES.subCategories.category2}
            items={section2}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBlue: { height: 56, backgroundColor: Colors.primary },
  container: { flex: 1, flexDirection: "row", marginTop: -24 },
  leftRail: { width: LEFT_W, paddingTop: 8 },
  leftItem: {
    height: 64,
    width: LEFT_W - 20,
    borderRadius: 12,
    backgroundColor: "#E8EEF6",
    alignSelf: "center",
    marginVertical: 6,
  },
  leftItemActive: { backgroundColor: "#fff" },
});
