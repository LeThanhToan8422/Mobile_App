import { ImageSourcePropType, ViewStyle } from "react-native";

export interface BrandTileProps {
  name: string;
  source?: ImageSourcePropType;
  style?: ViewStyle;
  boxWidth?: number;
  boxHeight?: number;
  padding?: number;
  radius?: number;
  borderWidth?: number;
  borderColor?: string;
}
