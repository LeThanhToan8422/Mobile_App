import { PRODUCT_IMAGES } from "./constants";
import { CategoryProduct } from "./types";

export function makeItems(prefix: string, count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    name: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} Item ${i + 1}`,
    price: Math.floor(Math.random() * 1000000) + 100000,
    oldPrice: Math.floor(Math.random() * 1000000) + 150000,
    image: getProductImage(i),
  }));
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
    image: getProductImage(index),
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
