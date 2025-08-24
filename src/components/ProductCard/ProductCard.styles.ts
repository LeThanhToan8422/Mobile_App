import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const ERROR_DARK = "#B71D18";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: { width: "100%", height: 120, borderRadius: 8, marginBottom: 12 },
  name: { fontWeight: "700", color: Colors.text, fontSize: 14, lineHeight: 18 },
  price: {
    fontWeight: "600",
    color: ERROR_DARK,
    fontSize: 14,
    lineHeight: 16,
    textDecorationLine: "underline",
  },
  oldPrice: {
    color: Colors.muted,
    textDecorationLine: "line-through",
    marginLeft: 0,
    fontSize: 12,
    lineHeight: 16,
  },
  discount: {
    color: ERROR_DARK,
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
  },
  sold: { color: Colors.muted, marginTop: 8, fontSize: 12 },
  buyBtn: {
    alignSelf: "flex-start",
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buyText: { color: Colors.primary, fontWeight: "700", textAlign: "center" },
});
