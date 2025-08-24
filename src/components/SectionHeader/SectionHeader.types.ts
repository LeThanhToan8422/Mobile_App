import { TextStyle, ImageSourcePropType } from "react-native";
import { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";

export type SectionHeaderProps = {
  icon?: keyof typeof Ionicons.glyphMap | ImageSourcePropType;
  title: string;
  onPressSeeAll?: () => void;
  rightExtra?: ReactNode;
  hideSeeAll?: boolean;
  marginTop?: number;
  marginBottom?: number;
  titleStyle?: TextStyle;
};
