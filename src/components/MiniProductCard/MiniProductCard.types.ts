import { ImageSourcePropType } from "react-native";

export type MiniProductCardProps = {
  image?: string;
  source?: ImageSourcePropType;
  name: string;
  price: string | number;
  oldPrice?: string | number;
};
