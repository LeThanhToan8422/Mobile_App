import { ProductCardStyles } from "./ProductCard.types";

type StyleProps = {
  index?: number;
  width?: number;
  variant?: "default" | "flashSale";
};

export const getProductCardStyles = (props: StyleProps): ProductCardStyles => {
  const { index = 0, width = 220, variant = "default" } = props;
  const isFlash = variant === "flashSale";

  const containerStyle = [
    {
      width,
      borderRadius: isFlash ? 8 : 12,
      padding: 12,
      marginRight: isFlash ? 0 : 12,
    },
  ];

  const titleStyle = [isFlash ? { fontSize: 14, lineHeight: 18 } : {}];

  const titleContainerStyle = {
    width: isFlash ? Math.round(132 * (width / 148)) : undefined,
    minHeight: 36, // ensure space for 2 lines at lineHeight 18
  };

  const infoBlockWidth = isFlash ? Math.round(132 * (width / 148)) : undefined;

  return {
    titleContainerStyle,
    infoBlockWidth,
  };
};
