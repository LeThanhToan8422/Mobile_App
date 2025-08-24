import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  card: {
    width: 369,
    height: 88,
    flexDirection: "row",
    gap: 16,
    borderRadius: 8,
    padding: 4,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  thumbnail: {
    width: 120,
    height: 80,
    borderRadius: 8,
    resizeMode: "cover",
  },
  details: {
    width: 225,
    height: 80,
    gap: 4,
    justifyContent: "center",
  },
  title: {
    width: 225,
    height: 52,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
  date: {
    width: 65,
    height: 24,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: Colors.primary,
  },
});
