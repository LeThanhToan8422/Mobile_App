import React from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBarProps } from "./ProgressBar.types";
import { styles } from "./ProgressBar.styles";

export default function ProgressBar({
  progress = 0.7,
  icon = require("../../../assets/icons/Left.png"),
}: ProgressBarProps) {
  const filledWidth = 120 * progress; // Increased from 82 to 120
  const unfilledWidth = 120 - filledWidth; // Increased from 82 to 120

  return (
    <View style={styles.container}>
      {/* thanh trước icon */}
      <View style={styles.progressBar}>
        {/* Filled part with gradient */}
        <LinearGradient
          colors={["#FF5630", "#B71D18"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.filledPart, { width: filledWidth }]}
        />
        {/* Unfilled part */}
        <View style={[styles.unfilledPart, { width: unfilledWidth }]} />
      </View>

      {/* Icon positioned at the junction */}
      <View style={[styles.iconContainer, { left: filledWidth - 9 }]}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
}
