import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function QualityFilterCard() {
  return (
    <View style={styles.container}>
      {/* Title "BỘ LỌC" */}
      <Text style={styles.title}>BỘ LỌC</Text>
      {/* Chip "CHẤT LƯỢNG CAO" */}
      <LinearGradient
        colors={["#FFD666", "#FFAB00"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.chip}>
        <Text style={styles.chipText}>CHẤT LƯỢNG CAO</Text>
      </LinearGradient>
      {/* Background motif */}
      <Image
        source={require("../../assets/card/Light_icon_shape.png")}
        style={StyleSheet.absoluteFillObject as any}
        resizeMode="cover"
      />
      {/* Product image */}
      <Image
        source={require("../../assets/card/88ebb8e1348b1b1237d095ec68b2462c0161b260.png")}
        style={styles.product}
        resizeMode="contain"
      />
      {/* Bulleted benefits */}
      <View style={[styles.row, { top: 197, left: 27 }]}>
        <Image
          source={require("../../assets/icons/Checked.png")}
          style={styles.bullet}
        />
        <Text style={styles.benefit}>Thân thiện với môi trường</Text>
      </View>
      <View style={[styles.row, { top: 215.65, left: 18 }]}>
        <Image
          source={require("../../assets/icons/Checked.png")}
          style={styles.bullet}
        />
        <Text style={styles.benefit}>An toàn cho sức khoẻ</Text>
      </View>
      <View style={[styles.row, { top: 234.29, left: 9 }]}>
        <Image
          source={require("../../assets/icons/Checked.png")}
          style={styles.bullet}
        />
        <Text style={styles.benefit}>Bền bỉ, đáng tin cậy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 291,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "rgba(183, 29, 24, 1)",
    position: "relative",
    padding: 0,
  },
  title: {
    position: "absolute",
    top: 24,
    left: 72,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 16,
    textTransform: "uppercase",
    color: "#FFF5CC",
  },
  chip: {
    position: "absolute",
    top: 44,
    left: 56,
    height: 20,
    borderRadius: 999,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  chipText: {
    fontWeight: "700",
    fontSize: 8,
    lineHeight: 8,
    textTransform: "uppercase",
    color: "rgba(122, 9, 22, 1)",
  },
  product: {
    position: "absolute",
    top: 75,
    left: 0.23,
    width: 150.2238,
    height: 141.1686,
  },
  row: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    gap: 3.73,
  },
  bullet: {
    width: 9.32,
    height: 9.32,
    marginRight: 4,
  },
  benefit: {
    fontWeight: "600",
    fontSize: 7.46,
    lineHeight: 7.46 * 1.5,
    letterSpacing: 0.02 * 16,
    color: "#FFFFFF",
  },
});
