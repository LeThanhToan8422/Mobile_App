import { StyleSheet, Dimensions } from "react-native";

// Figma measurements: width 369px, height 65px, radius 8px
const FIGMA_W = 369;
const FIGMA_H = 65;
const RADIUS = 8;

export const getSubBannerStyles = () => {
  const screenW = Dimensions.get("window").width;
  const contentW = screenW - 24; // paddingHorizontal 12*2
  const height = Math.round((FIGMA_H / FIGMA_W) * contentW);

  return {
    container: {
      paddingHorizontal: 12,
      marginTop: 12,
    },
    image: {
      height,
      borderRadius: RADIUS,
      width: "100%" as any,
    },
  };
};
