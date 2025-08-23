import { StyleSheet } from "react-native";

export const categoryStyles = StyleSheet.create({
  // Main Content Frame - Khung lớn chứa nội dung bên dưới
  mainContentFrame: {
    width: 393,
    height: 844,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
  },

  // Left Sidebar - Phần bên trái chứa các filter bộ lọc
  leftSidebar: {
    width: 90,
    height: 816,
    backgroundColor: "#E8EEF6",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },

  // Phần ô chứa bộ lọc
  filterItem: {
    width: 90,
    height: 100,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    backgroundColor: "rgba(230, 241, 255, 1)",
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 16,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Khung chứa ô bộ lọc được chọn
  filterItemActive: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  // Hình ảnh bộ lọc
  filterIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  // Hình ảnh bộ lọc thực tế
  filterImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },

  // Text bộ lọc
  filterText: {
    width: 60,
    height: 32,
    fontFamily: "System",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    textTransform: "capitalize",
    color: "rgba(2, 72, 151, 1)",
    textAlign: "center",
    textAlignVertical: "center",
  },

  // Text bộ lọc khi active
  filterTextActive: {
    color: "rgba(28, 37, 46, 1)",
  },

  // Right Content Area
  rightContent: {
    width: 303,
    flex: 1,
    backgroundColor: "#fff",
    gap: 12,
    padding: 12,
  },

  contentScroll: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },

  // Khung chứa title - Main Category Header
  mainTitleFrame: {
    width: 279,
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  // Text title - Bộ Lọc Không Khí
  mainTitleText: {
    width: 139,
    height: 32,
    fontFamily: "System",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: 0,
    color: "rgba(28, 37, 46, 1)",
    textAlignVertical: "center",
    textTransform: "capitalize",
  },

  // Sub Category Header - Custom UI
  subCategoryHeader: {
    width: 279,
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },

  // Sub Category Title Container
  subCategoryTitleContainer: {
    width: 107,
    height: 32,
    justifyContent: "center",
  },

  // Sub Category Title Text
  subCategoryTitleText: {
    width: 107,
    height: 32,
    fontFamily: "System",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 32,
    letterSpacing: 0,
    color: "rgba(28, 37, 46, 1)",
    textAlignVertical: "center",
    textTransform: "capitalize",
  },

  // View All Button
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  // View All Text
  viewAllText: {
    fontFamily: "System",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
    color: "rgba(3, 115, 243, 1)",
  },

  // Row trong grid sản phẩm 3x3
  productRow: {
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 8,
  },

  // Container cho grid sản phẩm
  productGridContainer: {
    width: 279,
    minHeight: 400,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },

  scrollContent: {
    paddingBottom: 150,
  },

  sidebarContent: {
    paddingBottom: 20,
  },
});
