import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { QualityFilterCardProps } from "./QualityFilterCard.types";
import { styles } from "./QualityFilterCard.styles";

export default function QualityFilterCard({}: QualityFilterCardProps) {
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
        source={require("../../../assets/card/Light_icon_shape.png")}
        style={styles.container as any}
        resizeMode="cover"
      />
      {/* Product image */}
      <Image
        source={require("../../../assets/card/88ebb8e1348b1b1237d095ec68b2462c0161b260.png")}
        style={styles.product}
        resizeMode="contain"
      />
      {/* Bulleted benefits */}
      <View style={[styles.row, { top: 197, left: 27 }]}>
        <Image
          source={require("../../../assets/icons/Checked.png")}
          style={styles.bullet}
        />
        <Text style={styles.benefit}>Thân thiện với môi trường</Text>
      </View>
      <View style={[styles.row, { top: 215.65, left: 18 }]}>
        <Image
          source={require("../../../assets/icons/Checked.png")}
          style={styles.bullet}
        />
        <Text style={styles.benefit}>An toàn cho sức khoẻ</Text>
      </View>
      <View style={[styles.row, { top: 234.29, left: 9 }]}>
        <Image
          source={require("../../../assets/icons/Checked.png")}
          style={styles.bullet}
        />
        <Text style={styles.benefit}>Bền bỉ, đáng tin cậy</Text>
      </View>
    </View>
  );
}
