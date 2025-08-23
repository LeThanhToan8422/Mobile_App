// Mock data for products - In real project, this would come from API

import { Product } from "../types";

export const mockProducts: Product[] = [
  {
    id: "p0",
    name: "Lọc gió động cơ Air Filter - Chevrolet",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/70780663158c02fc8434f4f8bf80205b1b085f61.png"),
    ],
    thumbnail: require("../../assets/products/70780663158c02fc8434f4f8bf80205b1b085f61.png"),
    category: "air-filter",
    brand: "Chevrolet",
    description: "Lọc gió động cơ chất lượng cao, phù hợp với xe Chevrolet",
    specifications: {
      "Kích thước": "200x150x50mm",
      "Chất liệu": "Giấy lọc cao cấp",
      "Tương thích": "Chevrolet Cruze, Aveo, Spark",
    },
    inStock: true,
    stockQuantity: 50,
    rating: 4.5,
    reviewCount: 128,
    tags: ["lọc gió", "động cơ", "Chevrolet", "air filter"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p1",
    name: "Lọc gió động cơ Air Filter - Ford",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/3efca5a09429cf058dbaf27f6f3f241f69d16190.png"),
    ],
    thumbnail: require("../../assets/products/3efca5a09429cf058dbaf27f6f3f241f69d16190.png"),
    category: "air-filter",
    brand: "Ford",
    description: "Lọc gió động cơ chính hãng Ford, đảm bảo hiệu suất tối ưu",
    specifications: {
      "Kích thước": "180x140x45mm",
      "Chất liệu": "Giấy lọc đa lớp",
      "Tương thích": "Ford Focus, Fiesta, EcoSport",
    },
    inStock: true,
    stockQuantity: 35,
    rating: 4.3,
    reviewCount: 95,
    tags: ["lọc gió", "động cơ", "Ford", "air filter"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p2",
    name: "Lọc gió Air Filter - BMW",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/2d9309ff663a188d749cdf2ea61585fa60c1913a.png"),
    ],
    thumbnail: require("../../assets/products/2d9309ff663a188d749cdf2ea61585fa60c1913a.png"),
    category: "air-filter",
    brand: "BMW",
    description: "Lọc gió cao cấp cho xe BMW, tăng hiệu suất động cơ",
    specifications: {
      "Kích thước": "220x160x55mm",
      "Chất liệu": "Giấy lọc cao cấp",
      "Tương thích": "BMW 3 Series, 5 Series, X3",
    },
    inStock: true,
    stockQuantity: 25,
    rating: 4.7,
    reviewCount: 156,
    tags: ["lọc gió", "động cơ", "BMW", "air filter", "cao cấp"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p3",
    name: "Bộ lọc động cơ đa năng",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/42af46caefe110b5efb29a5edea93b377d7e5f71.png"),
    ],
    thumbnail: require("../../assets/products/42af46caefe110b5efb29a5edea93b377d7e5f71.png"),
    category: "air-filter",
    brand: "Universal",
    description: "Bộ lọc động cơ đa năng, phù hợp nhiều loại xe",
    specifications: {
      "Kích thước": "190x145x48mm",
      "Chất liệu": "Giấy lọc đa lớp",
      "Tương thích": "Đa dạng các loại xe",
    },
    inStock: true,
    stockQuantity: 80,
    rating: 4.2,
    reviewCount: 203,
    tags: ["lọc gió", "động cơ", "đa năng", "universal"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p4",
    name: "Bộ lọc mới thế hệ",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/78edeebfee2c722175d103530b55162861f60fdb.png"),
    ],
    thumbnail: require("../../assets/products/78edeebfee2c722175d103530b55162861f60fdb.png"),
    category: "air-filter",
    brand: "Premium",
    description: "Bộ lọc thế hệ mới với công nghệ nano",
    specifications: {
      "Kích thước": "195x150x50mm",
      "Chất liệu": "Giấy lọc nano",
      "Tương thích": "Xe hiện đại",
    },
    inStock: true,
    stockQuantity: 45,
    rating: 4.6,
    reviewCount: 87,
    tags: ["lọc gió", "động cơ", "nano", "thế hệ mới"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p5",
    name: "Bộ lọc hiệu suất cao",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/afd60d967d08c0d986ec55a320d79d6d284fdc3d.png"),
    ],
    thumbnail: require("../../assets/products/afd60d967d08c0d986ec55a320d79d6d284fdc3d.png"),
    category: "air-filter",
    brand: "Performance",
    description: "Bộ lọc hiệu suất cao, tăng công suất động cơ",
    specifications: {
      "Kích thước": "200x155x52mm",
      "Chất liệu": "Giấy lọc hiệu suất cao",
      "Tương thích": "Xe thể thao, xe đua",
    },
    inStock: true,
    stockQuantity: 30,
    rating: 4.8,
    reviewCount: 112,
    tags: ["lọc gió", "động cơ", "hiệu suất cao", "performance"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p6",
    name: "Lọc gió cao cấp",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/9c7dbfec486162a86871a14051aab5a7d08a6335.jpg"),
    ],
    thumbnail: require("../../assets/products/9c7dbfec486162a86871a14051aab5a7d08a6335.jpg"),
    category: "air-filter",
    brand: "Luxury",
    description: "Lọc gió cao cấp cho xe sang trọng",
    specifications: {
      "Kích thước": "210x160x55mm",
      "Chất liệu": "Giấy lọc cao cấp",
      "Tương thích": "Xe sang trọng, xe hạng D trở lên",
    },
    inStock: true,
    stockQuantity: 20,
    rating: 4.9,
    reviewCount: 78,
    tags: ["lọc gió", "động cơ", "cao cấp", "luxury"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p7",
    name: "Lọc gió xe hơi tiêu chuẩn",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/b1bc86a9c4bb31c85922a515e5f70e2f45036bad.jpg"),
    ],
    thumbnail: require("../../assets/products/b1bc86a9c4bb31c85922a515e5f70e2f45036bad.jpg"),
    category: "air-filter",
    brand: "Standard",
    description: "Lọc gió tiêu chuẩn cho xe hơi thông dụng",
    specifications: {
      "Kích thước": "185x140x45mm",
      "Chất liệu": "Giấy lọc tiêu chuẩn",
      "Tương thích": "Xe hơi thông dụng",
    },
    inStock: true,
    stockQuantity: 100,
    rating: 4.1,
    reviewCount: 245,
    tags: ["lọc gió", "động cơ", "tiêu chuẩn", "thông dụng"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: "p8",
    name: "Bộ lọc tiêu chuẩn chất lượng",
    price: 299000,
    oldPrice: 329000,
    images: [
      require("../../assets/products/cb1ae579ec0285e245d1a92aae77e841d621d420.png"),
    ],
    thumbnail: require("../../assets/products/cb1ae579ec0285e245d1a92aae77e841d621d420.png"),
    category: "air-filter",
    brand: "Quality",
    description: "Bộ lọc tiêu chuẩn với chất lượng đảm bảo",
    specifications: {
      "Kích thước": "190x145x48mm",
      "Chất liệu": "Giấy lọc chất lượng",
      "Tương thích": "Đa dạng các loại xe",
    },
    inStock: true,
    stockQuantity: 65,
    rating: 4.4,
    reviewCount: 189,
    tags: ["lọc gió", "động cơ", "tiêu chuẩn", "chất lượng"],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter((product) => product.category === category);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return mockProducts.filter((product) => product.brand === brand);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.description?.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
