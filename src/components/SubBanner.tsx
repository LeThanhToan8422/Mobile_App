import React from "react";
import { View, Image, Dimensions } from "react-native";

type Props = { source: any };

// Figma measurements: width 369px, height 65px, radius 8px
const FIGMA_W = 369;
const FIGMA_H = 65;
const RADIUS = 8;

export default function SubBanner({ source }: Props) {
  const screenW = Dimensions.get("window").width;
  const contentW = screenW - 24; // paddingHorizontal 12*2
  const height = Math.round((FIGMA_H / FIGMA_W) * contentW);
  return (
    <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
      <Image
        source={source}
        style={{ height, borderRadius: RADIUS, width: "100%" }}
      />
    </View>
  );
}
