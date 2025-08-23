import { Dimensions } from "react-native";
import { Product } from "./types";

export const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const CONTENT_BASE = 369;
export const CONTENT_WIDTH = SCREEN_WIDTH - 24; // padding 12*2
export const SCALE = CONTENT_WIDTH / CONTENT_BASE;
export const FLASH_ITEM_WIDTH = 148 * SCALE;

export const products: Product[] = [
  {
    id: "p0",
    name: "Lọc gió động cơ Air Filter - Chevrolet",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/70780663158c02fc8434f4f8bf80205b1b085f61.png"),
  },
  {
    id: "p1",
    name: "Lọc gió động cơ Air Filter - Ford",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/3efca5a09429cf058dbaf27f6f3f241f69d16190.png"),
  },
  {
    id: "p2",
    name: "Lọc gió Air Filter - BMW",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/2d9309ff663a188d749cdf2ea61585fa60c1913a.png"),
  },
  {
    id: "p3",
    name: "Bộ lọc động cơ",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/42af46caefe110b5efb29a5edea93b377d7e5f71.png"),
  },
  {
    id: "p4",
    name: "Bộ lọc mới",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/78edeebfee2c722175d103530b55162861f60fdb.png"),
  },
  {
    id: "p5",
    name: "Bộ lọc hiệu suất cao",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/afd60d967d08c0d986ec55a320d79d6d284fdc3d.png"),
  },
  {
    id: "p6",
    name: "Lọc gió cao cấp",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/9c7dbfec486162a86871a14051aab5a7d08a6335.jpg"),
  },
  {
    id: "p7",
    name: "Lọc gió xe hơi",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/b1bc86a9c4bb31c85922a515e5f70e2f45036bad.jpg"),
  },
  {
    id: "p8",
    name: "Bộ lọc tiêu chuẩn",
    price: "299,000 đ",
    oldPrice: "329,000 đ",
    source: require("../../../assets/products/cb1ae579ec0285e245d1a92aae77e841d621d420.png"),
  },
];

export const brandLogos = [
  require("../../../assets/brands/b09f1027f2bd526e47e67b2b1deaa713c0895772.jpg"),
  require("../../../assets/brands/4678da3bcde13cb1ff580967508fa30dc80ce8be.jpg"),
  require("../../../assets/brands/25cc03ea8a4590777d56de3629d49279aa29e44f.jpg"),
  require("../../../assets/brands/bca601aec604298cdf9e90966f162ba015bbcee5.jpg"),
  require("../../../assets/brands/38b37c602ef2f858732d0ee61e7eac5df69c58cd.jpg"),
  require("../../../assets/brands/b9c70885c04e57709a9fb4e5999f1e588c9984ea.jpg"),
  require("../../../assets/brands/6cef17731c2df8a62b0fe748cd319c50cf80e709.jpg"),
  require("../../../assets/brands/469b8da4951e846eb09f3c79a05b76cb9cad2edc.jpg"),
  require("../../../assets/brands/d1c06a6c6b0149100c6ad3c0046be0f6b9f1e700.jpg"),
  require("../../../assets/brands/5afb93e3fee05ec430710c25408a59d5fc617d34.jpg"),
];

export const brandNames = [
  "HONDA",
  "FORD",
  "BMW",
  "AUDI",
  "KIA",
  "NISSAN",
  "CHEVROLET",
  "VW",
  "LEXUS",
  "VOLVO",
];
 