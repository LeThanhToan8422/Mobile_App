import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = 80;
const CARD_HEIGHT = 110;
const CARD_GAP = 8;

export const getCategoryCardStyles = () => {
  return { CARD_WIDTH, CARD_HEIGHT, CARD_GAP };
};

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginBottom: CARD_GAP,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 12,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    marginBottom: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  fallbackContainer: {
    width: 70,
    height: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    width: 77,
    height: 18,
    fontFamily: "System",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.24,
    color: "rgba(28, 37, 46, 1)",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
