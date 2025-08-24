import { FLASH_ITEM_WIDTH } from "./constants";

export function renderProductCard({
  item,
  index,
  variant = "default",
  progress,
  soldText,
  badgeText,
  onBuyNowPress,
  onPress,
  ...props
}: {
  item: any;
  index: number;
  variant?: "flashSale" | "default";
  progress?: number;
  soldText?: string;
  badgeText?: string;
  onBuyNowPress?: () => void;
  onPress?: () => void;
  [key: string]: any;
}) {
  return {
    index,
    width: FLASH_ITEM_WIDTH,
    source: item.source,
    name: item.name,
    price: item.price,
    oldPrice: item.oldPrice,
    variant,
    progress,
    soldText,
    badgeText,
    onBuyNowPress,
    onPress,
    ...props,
  };
}

export function renderMiniProductCard({
  item,
  customSource,
  onPress,
}: {
  item: any;
  customSource?: any;
  onPress?: () => void;
}) {
  return {
    source: customSource || item.source,
    name: item.name,
    price: item.price,
    oldPrice: item.oldPrice,
    onPress,
  };
}

export function renderFeaturedArticle({
  article,
}: {
  article: any;
  index: number;
}) {
  return {
    source: article.source,
    title: article.title,
    date: article.date,
  };
}
