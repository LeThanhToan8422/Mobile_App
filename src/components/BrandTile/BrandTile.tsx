import React from "react";
import { View, Image } from "react-native";
import { BrandTileProps } from "./BrandTile.types";
import { styles } from "./BrandTile.styles";

export default function BrandTile({
  name,
  source,
  style,
  boxWidth,
  boxHeight,
  padding,
  radius,
  borderWidth,
  borderColor,
}: BrandTileProps) {
  return (
    <View
      style={[
        styles.wrap,
        style,
        boxWidth && boxHeight ? { width: boxWidth, height: boxHeight } : null,
        radius ? { borderRadius: radius } : null,
        padding !== undefined ? { padding } : null,
        borderWidth !== undefined ? { borderWidth } : null,
        borderColor ? { borderColor } : null,
      ]}>
      {source ? (
        <Image
          source={source}
          style={[styles.logo, { width: "100%", height: "100%" }]}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.logo} />
      )}
    </View>
  );
}
