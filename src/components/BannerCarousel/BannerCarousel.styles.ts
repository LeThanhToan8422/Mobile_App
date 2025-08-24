import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dots: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginHorizontal: 3,
  },
  dotActive: { backgroundColor: "#fff", width: 16 },
});
