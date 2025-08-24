import React from "react";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BadgePillProps } from "./BadgePill.types";
import { styles } from "./BadgePill.styles";

export default function BadgePill({ text }: BadgePillProps) {
  return (
    <LinearGradient
      colors={["#FFD666", "#FFAB00"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.wrap}>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/icons/Left.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.txt}>{text}</Text>
      </View>
    </LinearGradient>
  );
}
