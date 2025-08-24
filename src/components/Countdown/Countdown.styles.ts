import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  // pill style (old)
  pill: {
    backgroundColor: "#FF6B57",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginHorizontal: 4,
  },
  pillTxt: { color: "#fff", fontWeight: "900", fontSize: 12 },
  // box style per Figma
  box: {
    width: 26,
    height: 26,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E53935",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  boxTxt: { color: "#fff", fontWeight: "900", fontSize: 12 },
});
