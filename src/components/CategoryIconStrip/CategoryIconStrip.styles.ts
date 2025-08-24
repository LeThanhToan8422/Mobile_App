import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../theme/colors";

const { width: SCREEN_W } = Dimensions.get("window");

const FIGMA_CONTENT_W = 369; // inner content width in Figma
const H_PADDING = 16;
const CONTENT_W = SCREEN_W - H_PADDING * 2;
const SCALE = CONTENT_W / FIGMA_CONTENT_W;

const ITEM_W = 79 * SCALE;
const ITEM_H = 110 * SCALE; // slightly taller to fit 2 lines
const CARD_RADIUS = 8;
const CARD_PADDING = 4 * SCALE;

export const getCategoryIconStripStyles = () => {
  return {
    SCREEN_W,
    FIGMA_CONTENT_W,
    H_PADDING,
    CONTENT_W,
    SCALE,
    ITEM_W,
    ITEM_H,
    CARD_RADIUS,
    CARD_PADDING,
  };
};

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: CARD_RADIUS,
    padding: CARD_PADDING,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  icon: {
    resizeMode: "contain",
    borderRadius: CARD_RADIUS - 2,
    marginBottom: 4,
  },
  name: {
    fontSize: 11,
    lineHeight: 14,
    color: Colors.text,
    textAlign: "center",
    paddingHorizontal: 2,
  },
  pager: {
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  dot: {
    width: 24 * (CONTENT_W / 360),
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E0E6EF",
    marginHorizontal: 3,
  },
  dotActive: { backgroundColor: Colors.primary },
});
