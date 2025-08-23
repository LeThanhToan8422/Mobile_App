import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const CARD_WIDTH = 80;
const CARD_HEIGHT = 110;
const CARD_GAP = 8;

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  image: any;
  icon?: string;
  onPress?: () => void;
  index?: number;
}

export default function CategoryCard({
  title,
  image,
  onPress,
  index = 0,
}: CategoryCardProps) {
  const [imageError, setImageError] = useState(false);

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

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginBottom: CARD_GAP,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 12,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    marginBottom: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  fallbackContainer: {
    width: 70,
    height: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    width: 77,
    height: 18,
    fontFamily: "System",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.24,
    color: "rgba(28, 37, 46, 1)",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
