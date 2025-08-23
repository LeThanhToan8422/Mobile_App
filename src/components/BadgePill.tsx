import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BadgePill({ text }: { text: string }) {
  return (
    <LinearGradient
      colors={["#FFD666", "#FFAB00"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.wrap}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/icons/Left.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.txt}>{text}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 16,
    alignSelf: "flex-start",
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    borderRadius: 999,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2.51,
  },
  icon: {
    width: 10,
    height: 10,
  },
  txt: {
    fontSize: 8,
    fontWeight: "600",
    color: "rgba(122, 9, 22, 1)",
    lineHeight: 12, // 150% of 8px
    textAlign: "center",
    textAlignVertical: "center",
  },
});
