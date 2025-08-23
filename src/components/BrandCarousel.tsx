import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Animated,
  Easing,
} from "react-native";

type Props = {
  brands: Array<{
    name: string;
    source: ImageSourcePropType;
  }>;
  boxWidth?: number;
  boxHeight?: number;
  padding?: number;
  radius?: number;
  borderWidth?: number;
  borderColor?: string;
  speed?: number; // pixels per second
};

export default function BrandCarousel({
  brands,
  boxWidth = 68,
  boxHeight = 54,
  padding = 4.53,
  radius = 5.44,
  borderWidth = 0.45,
  borderColor = "rgba(145,158,171,0.2)",
  speed = 40, // 40 pixels per second for smooth movement
}: Props) {
  const scrollX = useRef(new Animated.Value(0)).current;

  // Calculate dimensions
  const itemSpacing = 12; // gap between items
  const totalItemWidth = boxWidth + itemSpacing;
  const totalWidth = brands.length * totalItemWidth;

  // Create a longer list with multiple copies for seamless loop
  // We need enough copies so that when one set finishes, another is already visible
  const copies = 4; // 4 copies for smooth transition
  const extendedBrands = Array(copies).fill(brands).flat();

  useEffect(() => {
    // Create continuous animation that never stops
    const animate = () => {
      scrollX.setValue(0);

      Animated.timing(scrollX, {
        toValue: -totalWidth,
        duration: (totalWidth / speed) * 1000, // Duration for one complete cycle
        useNativeDriver: true,
        easing: Easing.linear, // Linear easing for smooth movement
      }).start(() => {
        // When animation completes, immediately start the next one
        // This creates a seamless loop effect
        animate();
      });
    };

    // Start the animation
    animate();

    return () => {
      // Cleanup if needed
    };
  }, [brands, speed, totalWidth]);

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Animated.View
          style={[
            styles.brandsContainer,
            {
              transform: [{ translateX: scrollX }],
            },
          ]}>
          {extendedBrands.map((brand, index) => (
            <View
              key={`brand-${index}`}
              style={[
                styles.brandTile,
                {
                  width: boxWidth,
                  height: boxHeight,
                  padding,
                  borderRadius: radius,
                  borderWidth,
                  borderColor,
                },
              ]}>
              <Image
                source={brand.source}
                style={styles.brandLogo}
                resizeMode="contain"
              />
            </View>
          ))}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  carouselContainer: {
    height: 54,
    overflow: "hidden",
  },
  brandsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  brandTile: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  brandLogo: {
    width: "100%",
    height: "100%",
  },
});
