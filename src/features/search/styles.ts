import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const searchScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5F8",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    paddingVertical: 0,
  },

  clearButton: {
    marginLeft: 8,
    padding: 2,
  },

  suggestionsContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    maxHeight: 200,
  },

  suggestionsList: {
    flexGrow: 0,
  },

  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },

  suggestionIcon: {
    marginRight: 12,
  },

  suggestionText: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
  },

  resultsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loadingText: {
    fontSize: 16,
    color: Colors.muted,
    marginTop: 16,
  },

  resultsCount: {
    fontSize: 14,
    color: Colors.muted,
    marginVertical: 16,
  },

  productList: {
    paddingBottom: 20,
    paddingHorizontal: 8,
  },

  productWrapper: {
    flex: 1,
    marginHorizontal: 4,
    marginBottom: 16,
    alignItems: "center",
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
    marginTop: 16,
    marginBottom: 8,
  },

  emptySubtitle: {
    fontSize: 14,
    color: Colors.muted,
    textAlign: "center",
  },

  initialContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  initialTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.text,
    marginTop: 16,
    marginBottom: 8,
  },

  initialSubtitle: {
    fontSize: 16,
    color: Colors.muted,
    textAlign: "center",
    lineHeight: 24,
  },
});
