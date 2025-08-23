import React from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";
import SectionHeader from "@components/SectionHeader";
import { Colors } from "@theme/colors";
import ProductCard from "@components/ProductCard";
import { LinearGradient } from "expo-linear-gradient";
import {
  SCALE,
  FLASH_ITEM_WIDTH,
  SCREEN_WIDTH,
} from "@features/home/constants";
import { useHomeScreen } from "@features/home/hooks";
import { SECTION_TITLES, UI_TEXT } from "@features/home/sectionTitles";
import HomeHeader from "@components/HomeHeader";
import Countdown from "@components/Countdown";

import BrandCarousel from "@components/BrandCarousel";
import PromoGrid from "@components/PromoGrid";
import BannerCarousel from "@components/BannerCarousel";
import CategoryIconStrip from "@components/CategoryIconStrip";
import SubBanner from "@components/SubBanner";
import QualityFilterCard from "@components/QualityFilterCard";
import MiniProductCard from "@components/MiniProductCard";
import { Ionicons } from "@expo/vector-icons";
import FeaturedArticleItem from "@components/FeaturedArticleItem";

export default function HomeScreen() {
  const {
    products,
    brandLogos,
    brandNames,
    keyExtractor,
    flashSaleProducts,
    hotProducts,
    recommendedProducts,
    featuredArticles,
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
          <SubBanner
            source={require("../../assets/banners/111f441263cc356856a3d5519edba39600c39b2e.png")}
          />

          {/* Danh mục tiêu biểu */}
          <SectionHeader
            icon={SECTION_TITLES.featuredCategories.icon}
            title={SECTION_TITLES.featuredCategories.title}
            hideSeeAll
            marginTop={12}
            marginBottom={8}
          />
          <CategoryIconStrip />

          {/* Banner lớn (slide - mua 10 tặng 2) */}
          <View
            style={{ paddingHorizontal: 12, marginTop: 8, marginBottom: 8 }}>
            <BannerCarousel
              sources={[
                require("../../assets/banners/374b719df0c2fd9721df208e12a37f169addfc7e.png"),
                require("../../assets/banners/111f441263cc356856a3d5519edba39600c39b2e.png"),
              ]}
            />
          </View>

          {/* FLASH SALE */}
          <LinearGradient
            colors={["rgba(255,237,217,0.2)", "rgba(255,232,206,0.3)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0.1 }}
            style={{ borderRadius: 12, marginHorizontal: 0 }}>
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
                  index={index}
                  width={FLASH_ITEM_WIDTH}
                  source={item.source}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  progress={0.7}
                  soldText={UI_TEXT.productInfo.soldText}
                  variant="flashSale"
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
            brands={brandNames.map((name, index) => ({
              name,
              source: brandLogos[index],
            }))}
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
              <View style={{ width: FLASH_ITEM_WIDTH }}>
                <ProductCard
                  index={index}
                  width={FLASH_ITEM_WIDTH}
                  source={item.source}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  variant="flashSale"
                  badgeText={UI_TEXT.productInfo.onlyOneLeft}
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
            titleStyle={{ fontSize: 16, fontWeight: "600", lineHeight: 24 }}
          />
          <View style={{ paddingHorizontal: 12 }}>
            <View style={{ width: 369, height: 327, gap: 12 }}>
              {/* Row: left banner + product list */}
              <View
                style={{
                  flexDirection: "row",
                  gap: 8,
                  width: 369,
                  height: 291,
                }}>
                <QualityFilterCard />
                <View style={{ flex: 1 }}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={recommendedProducts}
                    keyExtractor={(it) => it.id + "rr"}
                    ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                    renderItem={({ item }) => (
                      <MiniProductCard
                        source={item.source}
                        name={item.name}
                        price={item.price}
                        oldPrice={item.oldPrice}
                      />
                    )}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Hàng mới về */}
          <View
            style={{
              backgroundColor: "rgba(2, 95, 202, 1)",
            }}>
            <SectionHeader
              icon={SECTION_TITLES.newArrivals.icon}
              title={SECTION_TITLES.newArrivals.title}
              titleStyle={{ color: "#FFFFFF" }}
            />
            <View style={{ paddingHorizontal: 12, paddingBottom: 16 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={products}
                keyExtractor={(it) => it.id + "new"}
                ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                renderItem={({ item }) => (
                  <MiniProductCard
                    source={require("../../assets/products/78edeebfee2c722175d103530b55162861f60fdb.png")}
                    name={item.name}
                    price={item.price}
                    oldPrice={item.oldPrice}
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
          <View style={{ paddingHorizontal: 12 }}>
            <View style={{ gap: 16 }}>
              {featuredArticles.map((art, i) => (
                <FeaturedArticleItem
                  key={i}
                  source={art.source}
                  title={art.title}
                  date={art.date}
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
