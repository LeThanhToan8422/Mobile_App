import { ImageSourcePropType } from "react-native";

export type ProductCardProps = {
  index?: number;
  image?: string;
  source?: ImageSourcePropType;
  name: string;
  price: string | number;
  oldPrice?: string | number;
  soldText?: string;
  progress?: number; // 0..1
  width?: number;
  variant?: "default" | "flashSale";
  badgeText?: string;
};

export type ProductCardStyles = {
  titleContainerStyle: any;
  infoBlockWidth?: number;
};
