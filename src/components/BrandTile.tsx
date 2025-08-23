import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";
import { Colors } from "../theme/colors";

const { width } = Dimensions.get("window");

type Props = {
  name: string;
  source?: ImageSourcePropType;
  style?: ViewStyle;
  boxWidth?: number;
  boxHeight?: number;
  padding?: number;
  radius?: number;
  borderWidth?: number;
  borderColor?: string;
};

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
}: Props) {
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

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {},
});
