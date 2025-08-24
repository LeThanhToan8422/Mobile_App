import { ImageSourcePropType } from "react-native";

export type Brand = {
  name: string;
  source: ImageSourcePropType;
};

export interface BrandCarouselProps {
  brands: Brand[];
  boxWidth?: number;
  boxHeight?: number;
  padding?: number;
  radius?: number;
  borderWidth?: number;
  borderColor?: string;
  speed?: number; // pixels per second
}
