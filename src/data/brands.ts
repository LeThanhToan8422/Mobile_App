// Mock data for brands - In real project, this would come from API

import { Brand } from "../types";

export const mockBrands: Brand[] = [
  {
    id: "b1",
    name: "HONDA",
    logo: require("../../assets/brands/b09f1027f2bd526e47e67b2b1deaa713c0895772.jpg"),
    description: "Thương hiệu xe hơi Nhật Bản nổi tiếng với độ tin cậy cao",
    website: "https://www.honda.com",
    productCount: 45,
  },
  {
    id: "b2",
    name: "FORD",
    logo: require("../../assets/brands/4678da3bcde13cb1ff580967508fa30dc80ce8be.jpg"),
    description: "Hãng xe Mỹ với lịch sử lâu đời và công nghệ tiên tiến",
    website: "https://www.ford.com",
    productCount: 38,
  },
  {
    id: "b3",
    name: "BMW",
    logo: require("../../assets/brands/25cc03ea8a4590777d56de3629d49279aa29e44f.jpg"),
    description: "Thương hiệu xe Đức cao cấp, nổi tiếng về hiệu suất",
    website: "https://www.bmw.com",
    productCount: 52,
  },
  {
    id: "b4",
    name: "AUDI",
    logo: require("../../assets/brands/bca601aec604298cdf9e90966f162ba015bbcee5.jpg"),
    description: "Hãng xe Đức với thiết kế sang trọng và công nghệ hiện đại",
    website: "https://www.audi.com",
    productCount: 41,
  },
  {
    id: "b5",
    name: "KIA",
    logo: require("../../assets/brands/38b37c602ef2f858732d0ee61e7eac5df69c58cd.jpg"),
    description: "Thương hiệu xe Hàn Quốc với giá cả hợp lý và chất lượng tốt",
    website: "https://www.kia.com",
    productCount: 33,
  },
  {
    id: "b6",
    name: "NISSAN",
    logo: require("../../assets/brands/b9c70885c04e57709a9fb4e5999f1e588c9984ea.jpg"),
    description: "Hãng xe Nhật Bản với nhiều mẫu xe đa dạng",
    website: "https://www.nissan.com",
    productCount: 29,
  },
  {
    id: "b7",
    name: "CHEVROLET",
    logo: require("../../assets/brands/6cef17731c2df8a62b0fe748cd319c50cf80e709.jpg"),
    description: "Thương hiệu xe Mỹ với thiết kế mạnh mẽ và bền bỉ",
    website: "https://www.chevrolet.com",
    productCount: 36,
  },
  {
    id: "b8",
    name: "VW",
    logo: require("../../assets/brands/469b8da4951e846eb09f3c79a05b76cb9cad2edc.jpg"),
    description: "Volkswagen - Hãng xe Đức với thiết kế đơn giản, hiệu quả",
    website: "https://www.volkswagen.com",
    productCount: 31,
  },
  {
    id: "b9",
    name: "LEXUS",
    logo: require("../../assets/brands/d1c06a6c6b0149100c6ad3c0046be0f6b9f1e700.jpg"),
    description: "Thương hiệu xe cao cấp của Toyota với chất lượng hoàn hảo",
    website: "https://www.lexus.com",
    productCount: 24,
  },
  {
    id: "b10",
    name: "VOLVO",
    logo: require("../../assets/brands/5afb93e3fee05ec430710c25408a59d5fc617d34.jpg"),
    description: "Hãng xe Thụy Điển nổi tiếng về an toàn và bền bỉ",
    website: "https://www.volvo.com",
    productCount: 18,
  },
];

export const getBrandById = (id: string): Brand | undefined => {
  return mockBrands.find((brand) => brand.id === id);
};

export const getBrandByName = (name: string): Brand | undefined => {
  return mockBrands.find(
    (brand) => brand.name.toLowerCase() === name.toLowerCase()
  );
};

export const getPopularBrands = (limit: number = 5): Brand[] => {
  return mockBrands
    .sort((a, b) => b.productCount - a.productCount)
    .slice(0, limit);
};
