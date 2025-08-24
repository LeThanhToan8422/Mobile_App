import React from "react";
import { View, Image, FlatList, Dimensions } from "react-native";
import { BannerCarouselProps } from "./BannerCarousel.types";
import { styles } from "./BannerCarousel.styles";
import { useBannerCarousel } from "./useBannerCarousel";

export default function BannerCarousel({
  sources,
  height = 140,
  loop = true,
  autoPlay = true,
  autoPlayIntervalMs = 3000,
}: BannerCarouselProps) {
  const { listRef, pageW, index, canLoop, data, handleMomentumEnd, onLayout } =
    useBannerCarousel({
      sources,
      loop,
      autoPlay,
      autoPlayIntervalMs,
    });

  return (
    <View style={{ height }} onLayout={onLayout}>
      <FlatList
        ref={listRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, i) => String(i)}
        onMomentumScrollEnd={handleMomentumEnd}
        scrollEventThrottle={16}
        decelerationRate="normal"
        bounces={false}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{ width: pageW, height, borderRadius: 8 }}
          />
        )}
      />
      <View style={styles.dots}>
        {sources.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}
