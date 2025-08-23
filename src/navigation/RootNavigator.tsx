import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import AccountScreen from "../screens/AccountScreen";
import CategoryScreen from "../screens/CategoryScreen";
import NewsScreen from "../screens/NewsScreen";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#0B66D5",
        tabBarInactiveTintColor: "#8A8F98",
        tabBarStyle: {
          height: 64,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => {
          let name: keyof typeof Ionicons.glyphMap = "home-outline";
          if (route.name === "Home") name = "home-outline";
          else if (route.name === "Cart") name = "cart-outline";
          else if (route.name === "Category") name = "grid-outline";
          else if (route.name === "News") name = "newspaper-outline";
          else if (route.name === "Account") name = "person-outline";
          return <Ionicons name={name} color={color} size={size} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Trang chủ" }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarLabel: "Giỏ hàng" }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{ tabBarLabel: "Danh mục" }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{ tabBarLabel: "Tin tức" }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ tabBarLabel: "Tài khoản" }}
      />
    </Tab.Navigator>
  );
}
