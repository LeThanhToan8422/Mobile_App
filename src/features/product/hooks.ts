import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCartStore } from "../../store/cartStore";
import { formatCartItemForAdd } from "../cart";
import { ProductDetail } from "./types";
import { mockProducts } from "../../data/products";

export function useProductDetail(productId: string) {
  const navigation = useNavigation();
  const { addToCart } = useCartStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Get product data from mock data (in real app this would come from API)
  const product: ProductDetail = mockProducts.find(
    (p) => p.id === productId
  ) || {
    id: productId,
    name: "Bộ lọc động cơ cao cấp",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../../assets/products/3efca5a09429cf058dbaf27f6f3f241f69d16190.png"),
    ],
    thumbnail: require("../../../assets/products/3efca5a09429cf058dbaf27f6f3f241f69d16190.png"),
    category: "air-filter",
    brand: "OEM",
    description:
      "Bộ lọc động cơ chất lượng cao, giúp bảo vệ động cơ khỏi bụi bẩn và tạp chất, tăng tuổi thọ động cơ.",
    specifications: {
      "Chất liệu": "Giấy lọc cao cấp",
      "Kích thước": "Phù hợp đa dạng động cơ",
      "Hiệu suất lọc": "99.9%",
      "Tuổi thọ": "10,000 - 15,000 km",
      "Thương hiệu": "OEM",
    },
    inStock: true,
    stockQuantity: 50,
    rating: 4.6,
    reviewCount: 89,
    tags: ["lọc gió", "động cơ", "OEM", "air filter"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  };

  const handleAddToCart = () => {
    const cartItem = formatCartItemForAdd({
      ...product,
      source: product.thumbnail,
      variant: "default",
    });

    addToCart(cartItem);

    Alert.alert("Thành công!", `Đã thêm "${product.name}" vào giỏ hàng`, [
      { text: "Tiếp tục mua sắm" },
      {
        text: "Xem giỏ hàng",
        onPress: () =>
          (navigation as any).navigate("MainTabs", { screen: "Cart" }),
      },
    ]);
  };

  const handleBuyNow = () => {
    const cartItem = formatCartItemForAdd({
      ...product,
      source: product.thumbnail,
      variant: "default",
    });

    addToCart(cartItem);
    (navigation as any).navigate("MainTabs", { screen: "Cart" });
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  };

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  return {
    product,
    selectedImageIndex,
    quantity,
    handleAddToCart,
    handleBuyNow,
    handleQuantityChange,
    handleImageSelect,
  };
}
