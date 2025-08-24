import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // Khung chứa progress
    width: 132,
    height: 16,
    paddingTop: 5,
    paddingRight: 50,
    paddingBottom: 5,
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-start",
    opacity: 1,
  },
  progressBar: {
    // thanh trước icon
    flexDirection: "row",
    width: 120, // Increased from 82 to 120
    height: 6,
    borderRadius: 100,
    overflow: "hidden",
    opacity: 1,
  },
  filledPart: {
    height: "100%",
    borderRadius: 100,
  },
  unfilledPart: {
    height: "100%",
    backgroundColor: "#F8E0E0", // Lighter pink color for unfilled part
  },
  iconContainer: {
    // icon
    position: "absolute",
    width: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: "#F5F5DC", // Beige background for the icon
    justifyContent: "center",
    alignItems: "center",
    top: -1, // Adjusted from -6 to -5 to center better
    opacity: 1,
    zIndex: 1,
    // Add shadow for glow effect
    shadowColor: "#FFA500",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 14,
    height: 14,
  },
});
