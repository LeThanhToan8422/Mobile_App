import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Section containers
  sectionContainer: {
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: 8,
  },

  // Banner carousel container
  bannerContainer: {
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: 8,
  },

  // Flash sale gradient container
  flashSaleContainer: {
    borderRadius: 12,
    marginHorizontal: 0,
  },

  // For You section
  forYouContainer: {
    paddingHorizontal: 12,
  },
  forYouWrapper: {
    width: 369,
    height: 327,
    gap: 12,
  },
  forYouRow: {
    flexDirection: "row",
    gap: 8,
    width: 369,
    height: 291,
  },
  forYouProductList: {
    flex: 1,
  },

  // New Arrivals section
  newArrivalsContainer: {
    backgroundColor: "rgba(2, 95, 202, 1)",
  },
  newArrivalsContent: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },

  // Featured Articles section
  featuredArticlesContainer: {
    paddingHorizontal: 12,
  },
  featuredArticlesList: {
    gap: 16,
  },

  // Product list containers
  hotProductsContainer: {
    paddingHorizontal: 12,
  },
  productItemWrapper: {
    width: 148, // FLASH_ITEM_WIDTH from constants
  },

  // Spacing utilities
  sectionSpacing: {
    marginTop: 24,
  },
  itemSpacing: {
    width: 8,
  },

  // Text styles
  newArrivalsTitle: {
    color: "#FFFFFF",
  },
  forYouTitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
});
