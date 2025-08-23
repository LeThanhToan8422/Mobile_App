import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "../theme/colors";

type Props = {
  source: ImageSourcePropType;
  title: string;
  date: string;
};

export default function FeaturedArticleItem({ source, title, date }: Props) {
  return (
    <View style={styles.card}>
      <Image source={source} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 369,
    height: 88,
    flexDirection: "row",
    gap: 16,
    borderRadius: 8,
    padding: 4,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  thumbnail: {
    width: 120,
    height: 80,
    borderRadius: 8,
    resizeMode: "cover",
  },
  details: {
    width: 225,
    height: 80,
    gap: 4,
    justifyContent: "center",
  },
  title: {
    width: 225,
    height: 52,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
  date: {
    width: 65,
    height: 24,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: Colors.primary,
  },
});
