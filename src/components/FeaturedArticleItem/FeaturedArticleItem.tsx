import React from "react";
import { View, Text, Image } from "react-native";
import { FeaturedArticleItemProps } from "./FeaturedArticleItem.types";
import { styles } from "./FeaturedArticleItem.styles";

export default function FeaturedArticleItem({
  source,
  title,
  date,
}: FeaturedArticleItemProps) {
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
