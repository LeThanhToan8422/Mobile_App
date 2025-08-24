import React from "react";
import { View, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SectionHeader from "@components/SectionHeader";
import ProductCard from "@components/ProductCard";
import { LinearGradient } from "expo-linear-gradient";
import { SCALE, FLASH_ITEM_WIDTH, HOME_ASSETS } from "@features/home/constants";
import { useHomeScreen } from "@features/home/hooks";
import { SECTION_TITLES, UI_TEXT } from "@features/home/sectionTitles";
import { homeStyles } from "@features/home/styles";
import {
  renderProductCard,
  renderMiniProductCard,
  renderFeaturedArticle,
} from "@features/home/helpers";

import HomeHeader from "@components/HomeHeader";
import Countdown from "@components/Countdown";

import BrandCarousel from "@components/BrandCarousel";
import PromoGrid from "@components/PromoGrid";
import BannerCarousel from "@components/BannerCarousel";
import CategoryIconStrip from "@components/CategoryIconStrip";
import SubBanner from "@components/SubBanner";
import QualityFilterCard from "@components/QualityFilterCard";
import MiniProductCard from "@components/MiniProductCard";
import FeaturedArticleItem from "@components/FeaturedArticleItem";

export default function HomeScreen() {
  const navigation = useNavigation();
  const {
    products,
    brandsForCarousel,
    keyExtractor,
    flashSaleProducts,
    hotProducts,
    recommendedProducts,
    featuredArticles,
    handleCategoryPress,
    handleBuyNow,
  } = useHomeScreen();

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ paddingBottom: 48 }}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate="normal"
      bounces={true}
      overScrollMode="always"
      ListHeaderComponent={
        <View>
          <HomeHeader />

          {/* Sub banner (giảm giá 35%) */}
          <SubBanner source={HOME_ASSETS.banners.subBanner} />

          {/* Danh mục tiêu biểu */}
          <SectionHeader
            icon={SECTION_TITLES.featuredCategories.icon}
            title={SECTION_TITLES.featuredCategories.title}
            hideSeeAll
            marginTop={12}
            marginBottom={8}
          />
          <CategoryIconStrip onCategoryPress={handleCategoryPress} />

          {/* Banner lớn (slide - mua 10 tặng 2) */}
          <View style={homeStyles.bannerContainer}>
            <BannerCarousel
              sources={[
                HOME_ASSETS.banners.mainBanner1,
                HOME_ASSETS.banners.mainBanner2,
              ]}
            />
          </View>

          {/* FLASH SALE */}
          <LinearGradient
            colors={["rgba(255,237,217,0.2)", "rgba(255,232,206,0.3)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0.1 }}
            style={homeStyles.flashSaleContainer}>
            <SectionHeader
              icon={SECTION_TITLES.flashSale.icon}
              title={SECTION_TITLES.flashSale.title}
              rightExtra={
                <Countdown seconds={3 * 3600 + 25 * 60} variant="box" />
              }
              marginTop={12}
              marginBottom={8}
            />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={flashSaleProducts}
              keyExtractor={(it) => it.id + "fs"}
              contentContainerStyle={{
                paddingHorizontal: 12,
                paddingBottom: 12,
                columnGap: 8 * SCALE,
              }}
              renderItem={({ item, index }) => (
                <ProductCard
                  {...renderProductCard({
                    item,
                    index,
                    variant: "flashSale",
                    progress: 0.7,
                    soldText: UI_TEXT.productInfo.soldText,
                    onBuyNowPress: () => handleBuyNow(item),
                    onPress: () =>
                      (navigation as any).navigate("ProductDetail", {
                        productId: item.id,
                      }),
                  })}
                />
              )}
            />
          </LinearGradient>

          {/* Thương hiệu nổi bật */}
          <SectionHeader
            icon={SECTION_TITLES.featuredBrands.icon}
            title={SECTION_TITLES.featuredBrands.title}
          />
          <BrandCarousel
            brands={brandsForCarousel}
            boxWidth={68}
            boxHeight={54}
            padding={4.53}
            radius={5.44}
            borderWidth={0.45}
            borderColor={"rgba(145,158,171,0.2)"}
            speed={40} // Tốc độ chạy mượt mà (có thể điều chỉnh)
          />

          {/* Sản phẩm bán chạy */}
          <SectionHeader
            icon={SECTION_TITLES.hotProducts.icon}
            title={SECTION_TITLES.hotProducts.title}
          />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={hotProducts}
            keyExtractor={(it) => it.id + "hot"}
            contentContainerStyle={{
              paddingHorizontal: 12,
              columnGap: 8 * SCALE,
            }}
            renderItem={({ item, index }) => (
              <View style={homeStyles.productItemWrapper}>
                <ProductCard
                  {...renderProductCard({
                    item,
                    index,
                    variant: "flashSale",
                    badgeText: UI_TEXT.productInfo.onlyOneLeft,
                    onBuyNowPress: () => handleBuyNow(item),
                    onPress: () =>
                      (navigation as any).navigate("ProductDetail", {
                        productId: item.id,
                      }),
                  })}
                />
              </View>
            )}
          />

          {/* Promo grid (giữ gradient nếu chưa có ảnh riêng) */}
          <PromoGrid />

          {/* Dành cho bạn */}
          <SectionHeader
            icon={SECTION_TITLES.forYou.icon}
            title={SECTION_TITLES.forYou.title}
            titleStyle={homeStyles.forYouTitle}
          />
          <View style={homeStyles.forYouContainer}>
            <View style={homeStyles.forYouWrapper}>
              {/* Row: left banner + product list */}
              <View style={homeStyles.forYouRow}>
                <QualityFilterCard />
                <View style={homeStyles.forYouProductList}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={recommendedProducts}
                    keyExtractor={(it) => it.id + "rr"}
                    ItemSeparatorComponent={() => (
                      <View style={homeStyles.itemSpacing} />
                    )}
                    renderItem={({ item }) => (
                      <MiniProductCard
                        {...renderMiniProductCard({
                          item,
                          onPress: () =>
                            (navigation as any).navigate("ProductDetail", {
                              productId: item.id,
                            }),
                        })}
                        onBuyNowPress={() => handleBuyNow(item)}
                      />
                    )}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Hàng mới về */}
          <View style={homeStyles.newArrivalsContainer}>
            <SectionHeader
              icon={SECTION_TITLES.newArrivals.icon}
              title={SECTION_TITLES.newArrivals.title}
              titleStyle={homeStyles.newArrivalsTitle}
            />
            <View style={homeStyles.newArrivalsContent}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={products}
                keyExtractor={(it) => it.id + "new"}
                ItemSeparatorComponent={() => (
                  <View style={homeStyles.itemSpacing} />
                )}
                renderItem={({ item }) => (
                  <MiniProductCard
                    {...renderMiniProductCard({
                      item,
                      customSource: HOME_ASSETS.products.newArrival,
                      onPress: () =>
                        (navigation as any).navigate("ProductDetail", {
                          productId: item.id,
                        }),
                    })}
                    onBuyNowPress={() => handleBuyNow(item)}
                  />
                )}
              />
            </View>
          </View>

          {/* Bài viết nổi bật */}
          <SectionHeader
            icon={SECTION_TITLES.newsFeatured.icon}
            title={SECTION_TITLES.newsFeatured.title}
            marginTop={24}
          />
          <View style={homeStyles.featuredArticlesContainer}>
            <View style={homeStyles.featuredArticlesList}>
              {featuredArticles.map((art, i) => (
                <FeaturedArticleItem
                  key={i}
                  {...renderFeaturedArticle({ article: art, index: i })}
                />
              ))}
            </View>
          </View>
        </View>
      }
      renderItem={() => null}
    />
  );
}
