import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import ProgressBar from "../ProgressBar";
import Animated, { FadeInUp } from "react-native-reanimated";
import BadgePill from "../BadgePill";
import { ProductCardProps } from "./ProductCard.types";
import { styles } from "./ProductCard.styles";
import { getProductCardStyles } from "./ProductCard.utils";

const ERROR_DARK = "#B71D18";

export default function ProductCard({
  index = 0,
  image,
  source,
  name,
  price,
  oldPrice,
  soldText,
  progress,
  width = 220,
  variant = "default",
  badgeText,
  onBuyNowPress,
  onPress,
}: ProductCardProps) {
  const isFlash = variant === "flashSale";
  const { titleContainerStyle, infoBlockWidth } = getProductCardStyles({
    index,
    width,
    variant,
  });

  const containerStyle = [
    styles.card,
    {
      width,
      borderRadius: isFlash ? 8 : 12,
      padding: 12,
      marginRight: isFlash ? 0 : 12,
    },
  ];

  const titleStyle = [
    styles.name,
    isFlash ? { fontSize: 14, lineHeight: 18 } : {},
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{ width: width || 220 }}>
      <Animated.View
        entering={FadeInUp.delay(index * 80)}
        style={containerStyle}>
        {source ? (
          <Image
            source={source}
            style={[
              styles.image,
              isFlash && { height: undefined, aspectRatio: 1 },
            ]}
          />
        ) : (
          <Image
            source={{ uri: image || "" }}
            style={[
              styles.image,
              isFlash && { height: undefined, aspectRatio: 1 },
            ]}
          />
        )}
        {badgeText ? (
          <View
            style={{
              width: infoBlockWidth,
              alignSelf: "flex-start",
              marginTop: 6,
              marginBottom: 6,
            }}>
            <BadgePill text={badgeText} />
          </View>
        ) : null}
        <View style={titleContainerStyle}>
          <Text numberOfLines={2} style={titleStyle}>
            {name}
          </Text>
        </View>
        <View
          style={{
            width: infoBlockWidth,
            alignSelf: "flex-start",
            marginTop: isFlash ? 6 : 8,
            paddingRight: 8,
          }}>
          <Text style={styles.price}>{price}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 6,
            }}>
            {!!oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
            {!!oldPrice && <Text style={styles.discount}>-10%</Text>}
          </View>
        </View>
        {!!progress && (
          <View
            style={{
              marginTop: isFlash ? 8 : 12,
              width: infoBlockWidth,
              alignSelf: "flex-start",
            }}>
            <ProgressBar progress={progress} />
          </View>
        )}
        {!!soldText && (
          <Text
            style={[
              styles.sold,
              isFlash && { marginTop: 4, width: infoBlockWidth },
            ]}>
            {soldText}
          </Text>
        )}
        <Pressable
          style={[
            styles.buyBtn,
            {
              width: isFlash ? "100%" : infoBlockWidth,
              height: isFlash ? 32 : 24,
              paddingVertical: isFlash ? 8 : 4,
              paddingHorizontal: isFlash ? 16 : 12,
              borderRadius: 4,
              backgroundColor: "#E6F1FF",
            },
            isFlash ? { alignSelf: "stretch" } : null,
          ]}
          onPress={onBuyNowPress}>
          <Text
            style={[
              styles.buyText,
              isFlash && { fontSize: 14, fontWeight: "600" },
            ]}>
            Mua ngay
          </Text>
        </Pressable>
      </Animated.View>
    </TouchableOpacity>
  );
}
