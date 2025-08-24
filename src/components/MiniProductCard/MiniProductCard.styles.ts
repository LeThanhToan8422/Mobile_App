import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const ERROR_DARK = "#B71D18";

export const styles = StyleSheet.create({
  card: {
    width: 148,
    height: 291,
    backgroundColor: Colors.card,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    overflow: "hidden",
  },
  imageWrap: {
    width: 148,
    height: 148,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 132,
    height: 132,
    borderRadius: 3.35,
  },
  info: {
    width: 148,
    height: 143,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  title: {
    width: 132,
    height: 37,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
    color: Colors.text,
  },
  price: {
    fontWeight: "600",
    color: ERROR_DARK,
    fontSize: 14,
    lineHeight: 16,
    textDecorationLine: "underline",
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 8,
  },
  oldPrice: {
    color: Colors.muted,
    textDecorationLine: "line-through",
    fontSize: 12,
    lineHeight: 16,
  },
  discount: {
    color: ERROR_DARK,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
  },
  buyBtn: {
    marginTop: 12,
    height: 32,
    backgroundColor: "#E6F1FF",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buyText: { color: Colors.primary, fontWeight: "700" },
});
