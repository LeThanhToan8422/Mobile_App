import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function PromoGrid() {
  const contentWidth = width - 24; // padding-left + padding-right (12px each)
  const gap = 12;
  const columnWidth = Math.floor((contentWidth - gap) / 2); // equals 177 when contentWidth=366
  const tileHeight = 129;
  const containerHeight = 270;

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      {/* Left column */}
      <View style={[styles.col, { width: columnWidth }]}>
        {/* Mua 1 tặng 1 */}
        <View
          style={[
            styles.leftTile,
            styles.redTile,
            { width: columnWidth, height: tileHeight },
          ]}>
          <Text style={styles.promoTitle}>{"MUA 1\nTẶNG 1"}</Text>
          <Image
            source={require("../../assets/promotions/Group 624658.png")}
            style={{ width: 82.19, height: 114.96 }}
            resizeMode="contain"
          />
        </View>
        {/* Xả kho giá sốc */}
        <View
          style={[
            styles.leftTile,
            styles.orangeTile,
            { width: columnWidth, height: tileHeight },
          ]}>
          <Text style={[styles.promoTitle, styles.promoTitleDark]}>
            {"XẢ KHO\nGIÁ SỐC"}
          </Text>
          <Image
            source={require("../../assets/promotions/Group 624659.png")}
            style={{ width: 80.5, height: 86.8 }}
            resizeMode="contain"
          />
        </View>
      </View>
      {/* Right column (Đồng giá 299K) */}
      <View
        style={[
          styles.rightTile,
          {
            width: columnWidth,
            height: containerHeight,
            paddingTop: 12,
            paddingRight: 12,
            backgroundColor: "rgba(2, 95, 202, 1)",
          },
        ]}>
        <View>
          <LinearGradient
            colors={["#FFF5CC", "#FFD666"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.hotPill}>
            <Text style={styles.hotPillText}>Mới cực hot!</Text>
          </LinearGradient>
          <View style={styles.priceBlock}>
            <Text style={styles.priceTop}>ĐỒNG GIÁ</Text>
            <Text style={styles.priceValue}>299K</Text>
          </View>
        </View>
        <Image
          source={require("../../assets/promotions/img.png")}
          style={{ width: columnWidth, height: 162, alignSelf: "flex-start" }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 12,
    paddingRight: 12,
    columnGap: 12,
  },
  col: {
    rowGap: 12,
    height: 270,
  },
  leftTile: {
    borderRadius: 12,
    overflow: "hidden",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  redTile: { backgroundColor: "rgba(183, 29, 24, 1)" },
  orangeTile: { backgroundColor: "rgba(255, 171, 0, 1)" },
  rightTile: {
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  promoTitle: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 14 * 1.45,
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  promoTitleDark: {
    color: "rgba(28, 37, 46, 1)",
  },
  hotPill: {
    width: 100,
    height: 20,
    paddingTop: 4,
    paddingRight: 12,
    paddingBottom: 4,
    paddingLeft: 12,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  hotPillText: {
    width: 76,
    height: 12,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 12, // 100% line height
    letterSpacing: 0.12, // 1% of 12px
    color: "rgba(183, 29, 24, 1)", // error-dark
    textAlign: "center",
  },
  priceBlock: {
    width: 165,
    height: 76,
    paddingTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
  priceTop: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 14 * 1.02,
    textTransform: "uppercase",
  },
  priceValue: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 32 * 1.02,
    textTransform: "uppercase",
  },
});
