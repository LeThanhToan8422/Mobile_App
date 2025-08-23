import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "../theme/colors";
import ProgressBar from "./ProgressBar";
import Animated, { FadeInUp } from "react-native-reanimated";
import BadgePill from "./BadgePill";

const ERROR_DARK = "#B71D18";

type Props = {
  index?: number;
  image?: string;
  source?: ImageSourcePropType;
  name: string;
  price: string | number;
  oldPrice?: string | number;
  soldText?: string;
  progress?: number; // 0..1
  width?: number;
  variant?: "default" | "flashSale";
  badgeText?: string;
};

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
}: Props) {
  const isFlash = variant === "flashSale";
  const containerStyle = [
    styles.card as any,
    {
      width,
      borderRadius: isFlash ? 8 : 12,
      padding: 12,
      marginRight: isFlash ? 0 : 12,
    } as any,
  ];

  const titleStyle = [
    styles.name as any,
    (isFlash ? { fontSize: 14, lineHeight: 18 } : null) as any,
  ];
  const titleContainerStyle = {
    width: isFlash ? Math.round(132 * (width / 148)) : (undefined as any),
    minHeight: 36, // ensure space for 2 lines at lineHeight 18
  } as any;
  const infoBlockWidth = isFlash ? Math.round(132 * (width / 148)) : undefined;

  return (
    <Animated.View entering={FadeInUp.delay(index * 80)} style={containerStyle}>
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
        ]}>
        <Text
          style={[
            styles.buyText,
            isFlash && { fontSize: 14, fontWeight: "600" },
          ]}>
          Mua ngay
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: { width: "100%", height: 120, borderRadius: 8, marginBottom: 12 },
  name: { fontWeight: "700", color: Colors.text, fontSize: 14, lineHeight: 18 },
  price: {
    fontWeight: "600",
    color: ERROR_DARK,
    fontSize: 14,
    lineHeight: 16,
    textDecorationLine: "underline",
  },
  oldPrice: {
    color: Colors.muted,
    textDecorationLine: "line-through",
    marginLeft: 0,
    fontSize: 12,
    lineHeight: 16,
  },
  discount: {
    color: ERROR_DARK,
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
  },
  sold: { color: Colors.muted, marginTop: 8, fontSize: 12 },
  buyBtn: {
    alignSelf: "flex-start",
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buyText: { color: Colors.primary, fontWeight: "700", textAlign: "center" },
});
