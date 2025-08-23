import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryHeader from "@components/CategoryHeader";
import CategoryCard from "@components/CategoryCard";
import { useCategoryScreen } from "@features/category/hooks";
import { CATEGORY_IMAGES, CATEGORY_TEXT } from "@features/category/constants";
import { renderCategoryCard } from "@features/category/helpers";
import { categoryStyles } from "@features/category/styles";

export default function CategoryScreen() {
  const {
    leftTitles,
    selectedFilter,
    activeFilterIndex,
    section1,
    section2,
    handleFilterPress,
    handleBackPress,
    handleSearchChange,
    handleCameraPress,
    handleNotificationPress,
    handleViewAllSubCategory1,
    handleViewAllSubCategory2,
  } = useCategoryScreen();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Category Header with Search */}
      <CategoryHeader
        onBackPress={handleBackPress}
        onSearchChange={handleSearchChange}
        onCameraPress={handleCameraPress}
        onNotificationPress={handleNotificationPress}
      />

      {/* Main Content Frame - Khung lớn chứa nội dung bên dưới */}
      <View style={categoryStyles.mainContentFrame}>
        {/* Left Sidebar - Phần bên trái chứa các filter bộ lọc */}
        <View style={categoryStyles.leftSidebar}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate="normal"
            bounces={true}
            contentContainerStyle={categoryStyles.sidebarContent}>
            {leftTitles.map((title, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  categoryStyles.filterItem,
                  i === activeFilterIndex && categoryStyles.filterItemActive,
                ]}
                onPress={() => handleFilterPress(title, i)}>
                {/* Hình ảnh bộ lọc từ CategoryIconStrip */}
                <View style={categoryStyles.filterIcon}>
                  <Image
                    source={CATEGORY_IMAGES[i % CATEGORY_IMAGES.length]}
                    style={categoryStyles.filterImage}
                    resizeMode="contain"
                  />
                </View>

                {/* Text bộ lọc */}
                <Text
                  style={[
                    categoryStyles.filterText,
                    i === activeFilterIndex && categoryStyles.filterTextActive,
                  ]}>
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Right Content Area - Khu vực nội dung chính */}
        <View style={categoryStyles.rightContent}>
          <ScrollView
            style={categoryStyles.contentScroll}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate="normal"
            bounces={true}
            contentContainerStyle={categoryStyles.scrollContent}>
            {/* Khung chứa title - Main Category Header */}
            <View style={categoryStyles.mainTitleFrame}>
              <Text style={categoryStyles.mainTitleText}>{selectedFilter}</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="rgba(28, 37, 46, 1)"
              />
            </View>

            {/* Sub Category Header 1 - Custom UI */}
            <View style={categoryStyles.subCategoryHeader}>
              <View style={categoryStyles.subCategoryTitleContainer}>
                <Text style={categoryStyles.subCategoryTitleText}>
                  {CATEGORY_TEXT.subCategories.subCategory1}
                </Text>
              </View>

              <TouchableOpacity
                style={categoryStyles.viewAllButton}
                onPress={handleViewAllSubCategory1}>
                <Text style={categoryStyles.viewAllText}>
                  {CATEGORY_TEXT.viewAll}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="rgba(3, 115, 243, 1)"
                />
              </TouchableOpacity>
            </View>

            {/* Grid sản phẩm Sub Category 1 - 3x3 */}
            <View style={categoryStyles.productGridContainer}>
              <FlatList
                data={section1}
                renderItem={({ item, index }) => (
                  <CategoryCard {...renderCategoryCard({ item, index })} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={categoryStyles.productRow}
                scrollEnabled={false}
              />
            </View>

            {/* Sub Category Header 2 - Custom UI */}
            <View style={[categoryStyles.subCategoryHeader, { marginTop: 0 }]}>
              <View style={categoryStyles.subCategoryTitleContainer}>
                <Text style={categoryStyles.subCategoryTitleText}>
                  {CATEGORY_TEXT.subCategories.subCategory2}
                </Text>
              </View>

              <TouchableOpacity
                style={categoryStyles.viewAllButton}
                onPress={handleViewAllSubCategory2}>
                <Text style={categoryStyles.viewAllText}>
                  {CATEGORY_TEXT.viewAll}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="rgba(3, 115, 243, 1)"
                />
              </TouchableOpacity>
            </View>

            {/* Grid sản phẩm Sub Category 2 - 3x3 */}
            <View style={categoryStyles.productGridContainer}>
              <FlatList
                data={section2}
                renderItem={({ item, index }) => (
                  <CategoryCard {...renderCategoryCard({ item, index })} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={categoryStyles.productRow}
                scrollEnabled={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
