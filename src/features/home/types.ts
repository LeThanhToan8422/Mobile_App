import { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  source: ImageSourcePropType;
};

export type FeaturedArticle = {
  source: ImageSourcePropType;
  title: string;
  date: string;
};
