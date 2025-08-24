import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";
import { CategoryCardProps } from "./CategoryCard.types";
import { styles, getCategoryCardStyles } from "./CategoryCard.styles";

export default function CategoryCard({
  title,
  image,
  onPress,
  index = 0,
}: CategoryCardProps) {
  const [imageError, setImageError] = useState(false);
  const { CARD_WIDTH, CARD_HEIGHT, CARD_GAP } = getCategoryCardStyles();

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Animated.View
      entering={FadeInUp.delay(index * 100).springify()}
      style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.8}>
        <View style={styles.imageContainer}>
          {!imageError ? (
            <Image
              source={image}
              style={styles.image}
              resizeMode="contain"
              onError={handleImageError}
            />
          ) : (
            <View style={styles.fallbackContainer}>
              <Ionicons
                name="image-outline"
                size={24}
                color="rgba(28, 37, 46, 0.6)"
              />
            </View>
          )}
        </View>

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
