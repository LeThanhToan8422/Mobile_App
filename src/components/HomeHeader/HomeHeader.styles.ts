import { StyleSheet, Platform } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  spacer: { backgroundColor: Colors.primary },
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingTop: Platform.select({ ios: 8, android: 6 }),
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 42,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    color: Colors.text,
    paddingRight: 12,
    fontSize: 14,
  },
  cameraButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  actions: { flexDirection: "row", alignItems: "center", marginLeft: 12 },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FF4D4F",
    minWidth: 14,
    height: 14,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: { color: "#fff", fontSize: 9, fontWeight: "900" },
});
