import React from "react";
import { View, Image } from "react-native";
import { SubBannerProps } from "./SubBanner.types";
import { getSubBannerStyles } from "./SubBanner.styles";

export default function SubBanner({ source }: SubBannerProps) {
  const styles = getSubBannerStyles();

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}
