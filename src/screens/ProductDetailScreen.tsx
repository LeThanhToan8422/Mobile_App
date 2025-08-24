import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Colors } from "../theme/colors";
import { useProductDetail } from "../features/product";
import {
  formatPrice,
  calculateDiscount,
  getProductImages,
  getProductDescription,
  getProductSpecs,
} from "../features/product";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function ProductDetailScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const navigation = useNavigation();

  // Get productId from route params
  const { productId } = route.params as { productId: string };

  // Use product detail hook
  const {
    product,
    selectedImageIndex,
    quantity,
    handleAddToCart,
    handleBuyNow,
    handleQuantityChange,
    handleImageSelect,
  } = useProductDetail(productId);

  // Get product data
  const productImages = getProductImages(product);
  const productDescription = getProductDescription(product);
  const productSpecs = getProductSpecs(product);
  const discount = product.oldPrice
    ? calculateDiscount(product.oldPrice, product.price)
    : 0;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <Ionicons name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.8}>
            <Ionicons name="heart-outline" size={24} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.8}>
            <Ionicons name="share-outline" size={24} color={Colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Images */}
        <View style={styles.imageSection}>
          <Image
            source={productImages[selectedImageIndex]}
            style={styles.mainImage}
            resizeMode="contain"
          />

          {/* Image Thumbnails */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailContainer}>
            {productImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.thumbnail,
                  selectedImageIndex === index && styles.selectedThumbnail,
                ]}
                onPress={() => handleImageSelect(index)}
                activeOpacity={0.8}>
                <Image
                  source={image}
                  style={styles.thumbnailImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          {/* Price Section */}
          <View style={styles.priceSection}>
            <Text style={styles.price}>{formatPrice(product.price)}đ</Text>
            {product.oldPrice && (
              <View style={styles.oldPriceContainer}>
                <Text style={styles.oldPrice}>
                  {formatPrice(product.oldPrice)}đ
                </Text>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>-{discount}%</Text>
                </View>
              </View>
            )}
          </View>

          {/* Product Name */}
          <Text style={styles.productName}>{product.name}</Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= (product.rating || 0) ? "star" : "star-outline"}
                  size={16}
                  color={
                    star <= (product.rating || 0) ? "#FFD700" : Colors.muted
                  }
                />
              ))}
            </View>
            <Text style={styles.ratingText}>
              {product.rating || 0} ({product.reviewCount || 0} đánh giá)
            </Text>
          </View>

          {/* Stock Status */}
          <View style={styles.stockContainer}>
            <View
              style={[
                styles.stockIndicator,
                { backgroundColor: product.inStock ? "#4CAF50" : "#F44336" },
              ]}
            />
            <Text style={styles.stockText}>
              {product.inStock ? "Còn hàng" : "Hết hàng"}
            </Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>{productDescription}</Text>

          {/* Specifications */}
          <View style={styles.specsSection}>
            <Text style={styles.sectionTitle}>Thông số kỹ thuật</Text>
            {productSpecs.map((spec: string, index: number) => (
              <View key={index} style={styles.specItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={16}
                  color={Colors.primary}
                />
                <Text style={styles.specText}>{spec}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.quantitySection}>
          <Text style={styles.quantityLabel}>Số lượng:</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={() => handleQuantityChange(quantity - 1)}
              activeOpacity={0.7}>
              <Ionicons name="remove" size={16} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={() => handleQuantityChange(quantity + 1)}
              activeOpacity={0.7}>
              <Ionicons name="add" size={16} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionBtn, styles.addToCartBtn]}
            onPress={handleAddToCart}
            activeOpacity={0.8}>
            <Ionicons name="cart-outline" size={20} color={Colors.primary} />
            <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionBtn, styles.buyNowBtn]}
            onPress={handleBuyNow}
            activeOpacity={0.8}>
            <Text style={styles.buyNowText}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  headerActions: {
    flexDirection: "row",
    gap: 12,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  // Image Section
  imageSection: {
    paddingVertical: 20,
  },
  mainImage: {
    width: SCREEN_WIDTH,
    height: 300,
    alignSelf: "center",
  },
  thumbnailContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "transparent",
    marginRight: 12,
    overflow: "hidden",
  },
  selectedThumbnail: {
    borderColor: Colors.primary,
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
  },

  // Product Info
  productInfo: {
    padding: 16,
  },
  priceSection: {
    marginBottom: 16,
  },
  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FF4D4F",
    marginBottom: 8,
  },
  oldPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  oldPrice: {
    fontSize: 18,
    color: Colors.muted,
    textDecorationLine: "line-through",
  },
  discountBadge: {
    backgroundColor: "#FF4D4F",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  productName: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 16,
    lineHeight: 26,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  stars: {
    flexDirection: "row",
    gap: 2,
  },
  ratingText: {
    fontSize: 14,
    color: Colors.muted,
  },
  stockContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  stockIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  stockText: {
    fontSize: 14,
    color: Colors.muted,
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
    marginBottom: 24,
  },

  // Specifications
  specsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 16,
  },
  specItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  specText: {
    fontSize: 14,
    color: Colors.text,
    flex: 1,
    lineHeight: 20,
  },

  // Bottom Action Bar
  bottomBar: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    backgroundColor: "#fff",
  },
  quantitySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.text,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  quantityBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    minWidth: 20,
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  addToCartBtn: {
    backgroundColor: "#F0F8FF",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  addToCartText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  buyNowBtn: {
    backgroundColor: Colors.primary,
  },
  buyNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
