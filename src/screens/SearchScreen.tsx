import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ProductCard from "../components/ProductCard";
import { useSearchScreen } from "../features/search/SearchScreen.hooks";
import { searchScreenStyles } from "../features/search/styles";

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const {
    state: { query, results, isLoading },
    actions: {
      handleSearchInput,
      handleSearchSubmit,
      handleClearSearch,
      handleProductPress,
      handleBuyNow,
      handleBackPress,
    },
    data: { legacyResults },
  } = useSearchScreen();

  const renderProduct = ({ item, index }: { item: any; index: number }) => (
    <View style={searchScreenStyles.productWrapper}>
      <ProductCard
        {...item}
        index={index}
        width={160}
        onPress={() => handleProductPress(item)}
        onBuyNowPress={() => handleBuyNow(item)}
      />
    </View>
  );

  return (
    <View style={[searchScreenStyles.container, { paddingTop: insets.top }]}>
      {/* Header with Search Input */}
      <View style={searchScreenStyles.header}>
        <TouchableOpacity
          style={searchScreenStyles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.8}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={searchScreenStyles.searchContainer}>
          <Ionicons
            name="search"
            size={18}
            color="#8E8E93"
            style={searchScreenStyles.searchIcon}
          />
          <TextInput
            style={searchScreenStyles.searchInput}
            value={query}
            onChangeText={handleSearchInput}
            onSubmitEditing={handleSearchSubmit}
            placeholder="Tìm kiếm sản phẩm..."
            placeholderTextColor="#8E8E93"
            returnKeyType="search"
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {query.length > 0 && (
            <TouchableOpacity
              onPress={handleClearSearch}
              style={searchScreenStyles.clearButton}>
              <Ionicons name="close-circle" size={18} color="#8E8E93" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Search Results */}
      {query.length > 0 && (
        <View style={searchScreenStyles.resultsContainer}>
          {isLoading ? (
            <View style={searchScreenStyles.loadingContainer}>
              <Text style={searchScreenStyles.loadingText}>
                Đang tìm kiếm...
              </Text>
            </View>
          ) : results.length > 0 ? (
            <>
              <Text style={searchScreenStyles.resultsCount}>
                Tìm thấy {results.length} kết quả cho "{query}"
              </Text>
              <FlatList
                data={legacyResults}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={searchScreenStyles.productList}
              />
            </>
          ) : (
            <View style={searchScreenStyles.emptyContainer}>
              <Ionicons name="search-outline" size={64} color="#8E8E93" />
              <Text style={searchScreenStyles.emptyTitle}>
                Không tìm thấy kết quả
              </Text>
              <Text style={searchScreenStyles.emptySubtitle}>
                Thử tìm kiếm với từ khóa khác
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Initial State */}
      {query.length === 0 && (
        <View style={searchScreenStyles.initialContainer}>
          <Ionicons name="search-outline" size={80} color="#8E8E93" />
          <Text style={searchScreenStyles.initialTitle}>Tìm kiếm sản phẩm</Text>
          <Text style={searchScreenStyles.initialSubtitle}>
            Nhập từ khóa để tìm kiếm sản phẩm bạn muốn
          </Text>
        </View>
      )}
    </View>
  );
}
