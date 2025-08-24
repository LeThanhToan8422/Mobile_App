import React from "react";
import { View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PromoGridProps } from "./PromoGrid.types";
import { styles, getPromoGridStyles } from "./PromoGrid.styles";

export default function PromoGrid({}: PromoGridProps) {
  const { columnWidth, tileHeight, containerHeight } = getPromoGridStyles();

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
            source={require("../../../assets/promotions/Group 624658.png")}
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
            source={require("../../../assets/promotions/Group 624659.png")}
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
          source={require("../../../assets/promotions/img.png")}
          style={{ width: columnWidth, height: 162, alignSelf: "flex-start" }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
