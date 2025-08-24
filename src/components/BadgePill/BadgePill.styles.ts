import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    height: 16,
    alignSelf: "flex-start",
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    borderRadius: 999,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2.51,
  },
  icon: {
    width: 10,
    height: 10,
  },
  txt: {
    fontSize: 8,
    fontWeight: "600",
    color: "rgba(122, 9, 22, 1)",
    lineHeight: 12, // 150% of 8px
    textAlign: "center",
    textAlignVertical: "center",
  },
});
