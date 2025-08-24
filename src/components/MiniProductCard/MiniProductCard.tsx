import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { MiniProductCardProps } from "./MiniProductCard.types";
import { styles } from "./MiniProductCard.styles";

export default function MiniProductCard({
  image,
  source,
  name,
  price,
  oldPrice,
  onBuyNowPress,
  onPress,
}: MiniProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      {/* Image block */}
      <View style={styles.imageWrap}>
        {source ? (
          <Image source={source} style={styles.image} resizeMode="contain" />
        ) : (
          <Image
            source={{ uri: image || "" }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
      {/* Info block */}
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {name}
        </Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.row}>
          {!!oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
          {!!oldPrice && <Text style={styles.discount}>-10%</Text>}
        </View>
        <Pressable style={styles.buyBtn} onPress={onBuyNowPress}>
          <Text style={styles.buyText}>Mua ngay</Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
}
