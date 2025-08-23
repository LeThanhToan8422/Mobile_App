import { PRODUCT_IMAGES } from "./constants";

export function makeItems(prefix: string, count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    name: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} Item ${i + 1}`,
  }));
}

export function getProductImage(index: number) {
  return PRODUCT_IMAGES[index % PRODUCT_IMAGES.length];
}

export function renderCategoryCard({
  item,
  index,
}: {
  item: any;
  index: number;
}) {
  return {
    title: item.name,
    image: getProductImage(index),
    onPress: () => console.log(`Pressed ${item.name}`),
    index: index,
  };
}
