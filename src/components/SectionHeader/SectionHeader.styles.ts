import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  left: { flexDirection: "row", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "700", color: Colors.text },
  right: { flexDirection: "row", alignItems: "center" },
  seeAll: {
    color: Colors.primary,
    fontWeight: "600",
    marginRight: 4,
    fontSize: 12,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  customIcon: {
    width: 24,
    height: 24,
    opacity: 1,
  },
});
