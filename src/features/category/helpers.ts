import { PRODUCT_IMAGES } from "./constants";
import { CategoryProduct } from "./types";
import { mockProducts } from "../../data/products";

export function makeItems(prefix: string, count: number, filterName?: string) {
  // Tạo seed dựa trên filterName để có sản phẩm khác nhau cho mỗi filter
  const filterSeed = filterName
    ? filterName.charCodeAt(0) + filterName.length
    : 0;

  // Tạo startIndex ngẫu nhiên dựa trên filter
  const startIndex =
    prefix === "s1"
      ? (filterSeed * 3) % mockProducts.length
      : (filterSeed * 7) % mockProducts.length;

  const endIndex = Math.min(startIndex + count, mockProducts.length);

  // Nếu không đủ sản phẩm từ startIndex, lấy từ đầu
  let products = mockProducts.slice(startIndex, endIndex);
  if (products.length < count) {
    const remainingCount = count - products.length;
    products = [...products, ...mockProducts.slice(0, remainingCount)];
  }

  // Shuffle sản phẩm để tạo sự đa dạng hơn
  const shuffledProducts = shuffleArray(products, filterSeed);

  return shuffledProducts.map((product) => ({
    id: product.id, // Real product ID for navigation
    name: product.name, // Real product name
    price: product.price,
    oldPrice: product.oldPrice,
    image: product.thumbnail, // Real product image
  }));
}

// Helper function để shuffle array với seed cố định
function shuffleArray<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentSeed = seed;

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Tạo random number dựa trên seed
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    const j = currentSeed % (i + 1);

    // Swap elements
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function getProductImage(index: number) {
  return PRODUCT_IMAGES[index % PRODUCT_IMAGES.length];
}

export function renderCategoryCard({
  item,
  index,
}: {
  item: CategoryProduct;
  index: number;
}) {
  return {
    index,
    title: item.name,
    image: item.image, // Use real product image
    onPress: () => console.log(`Pressed ${item.name}`),
  };
}

// Event handlers
export function createCategoryEventHandlers() {
  return {
    handleViewAllSubCategory1: () => {
      console.log("Navigate to Sub Category 1 full list");
      // TODO: Implement navigation to sub category 1 full list
    },

    handleViewAllSubCategory2: () => {
      console.log("Navigate to Sub Category 2 full list");
      // TODO: Implement navigation to sub category 2 full list
    },

    handleSearchChange: (text: string) => {
      console.log("Search:", text);
      // TODO: Implement search functionality
    },

    handleCameraPress: () => {
      console.log("Camera pressed");
      // TODO: Implement camera functionality
    },

    handleNotificationPress: () => {
      console.log("Notification pressed");
      // TODO: Implement notification functionality
    },
  };
}
