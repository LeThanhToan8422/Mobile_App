import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  carouselContainer: {
    height: 54,
    overflow: "hidden",
  },
  brandsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  brandTile: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  brandLogo: {
    width: "100%",
    height: "100%",
  },
});
