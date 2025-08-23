# 📱 Mobile App

Ứng dụng di động được xây dựng bằng React Native và Expo, cung cấp trải nghiệm mua sắm trực tuyến với giao diện người dùng hiện đại và thân thiện.

## ✨ Tính năng chính

- 🏠 **Trang chủ**: Hiển thị banner, danh mục sản phẩm, thương hiệu nổi bật
- 🛍️ **Danh mục**: Duyệt và tìm kiếm sản phẩm theo danh mục
- 📰 **Tin tức**: Cập nhật tin tức và bài viết mới nhất
- 🛒 **Giỏ hàng**: Quản lý sản phẩm đã chọn
- 👤 **Tài khoản**: Quản lý thông tin cá nhân và đơn hàng
- 🎯 **Khuyến mãi**: Flash sale và ưu đãi đặc biệt
- 🔍 **Tìm kiếm**: Tìm kiếm sản phẩm nhanh chóng

## 🚀 Cài đặt

### Yêu cầu hệ thống

- Node.js (phiên bản 18 trở lên)
- npm hoặc yarn
- Expo CLI
- Android Studio (để chạy trên Android)
- Xcode (để chạy trên iOS - chỉ macOS)

### Cài đặt dependencies

```bash
# Clone repository
git clone <repository-url>
cd Mobile-App

# Cài đặt dependencies
npm install
# hoặc
yarn install

# Cài đặt Expo CLI (nếu chưa có)
npm install -g @expo/cli
```

## 🏃‍♂️ Chạy ứng dụng

### Khởi động development server

```bash
# Khởi động Expo development server
npm start
# hoặc
expo start
```

### Chạy trên thiết bị

```bash
# Chạy trên Android
npm run android
# hoặc
expo start --android

# Chạy trên iOS
npm run ios
# hoặc
expo start --ios

# Chạy trên web
npm run web
# hoặc
expo start --web
```

## 📱 Cấu trúc dự án

```
Mobile-App/
├── assets/                 # Tài nguyên tĩnh (hình ảnh, icons)
│   ├── banners/           # Banner quảng cáo
│   ├── brands/            # Logo thương hiệu
│   ├── products/          # Hình ảnh sản phẩm
│   └── icons/             # Icons giao diện
├── src/
│   ├── api/               # API configuration và HTTP client
│   │   └── client.ts      # Axios client với interceptors
│   ├── components/        # Components tái sử dụng
│   │   ├── BannerCarousel.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CategoryIconStrip.tsx
│   │   └── ...
│   ├── constants/         # Hằng số toàn cục
│   │   └── index.ts       # API config, validation, messages
│   ├── data/              # Mock data và helper functions
│   │   ├── products.ts    # Product data
│   │   └── brands.ts      # Brand data
│   ├── features/          # Logic nghiệp vụ theo tính năng
│   │   ├── home/          # Tính năng trang chủ
│   │   │   ├── constants.ts    # Home constants (assets, limits)
│   │   │   ├── helpers.ts      # Home helper functions
│   │   │   ├── hooks.ts        # Home custom hooks
│   │   │   ├── sectionTitles.ts # Home section titles
│   │   │   ├── styles.ts       # Home styles
│   │   │   └── types.ts        # Home TypeScript types
│   │   ├── category/      # Tính năng danh mục
│   │   │   ├── constants.ts    # Category constants (text, images)
│   │   │   ├── helpers.ts      # Category helper functions
│   │   │   ├── hooks.ts        # Category custom hooks
│   │   │   ├── sectionTitles.ts # Category section titles
│   │   │   ├── styles.ts       # Category styles
│   │   │   └── types.ts        # Category TypeScript types
│   │   └── news/          # Tính năng tin tức
│   ├── hooks/             # Custom hooks
│   │   └── useApi.ts      # API handling, pagination, search
│   ├── navigation/        # Điều hướng ứng dụng
│   │   └── RootNavigator.tsx
│   ├── screens/           # Màn hình chính
│   │   ├── HomeScreen.tsx
│   │   ├── CategoryScreen.tsx
│   │   ├── NewsScreen.tsx
│   │   ├── CartScreen.tsx
│   │   └── AccountScreen.tsx
│   ├── services/          # Business logic services
│   ├── store/             # State management (Zustand)
│   │   └── productStore.ts # Product state management
│   ├── theme/             # Giao diện và màu sắc
│   │   └── colors.ts
│   ├── types/             # TypeScript types và interfaces
│   │   └── index.ts       # Global types
│   ├── utils/             # Utility functions
│   │   └── formatters.ts  # Data formatting utilities
│   └── index.ts           # Main export file
├── App.tsx                # Component gốc
├── package.json           # Dependencies và scripts
└── app.json              # Cấu hình Expo
```

## 🛠️ Công nghệ sử dụng

- **React Native 0.79.5** - Framework phát triển ứng dụng di động
- **Expo 53.0.20** - Platform và tools để phát triển React Native
- **TypeScript 5.8.3** - Ngôn ngữ lập trình với type safety
- **React Navigation 7.x** - Thư viện điều hướng
- **React Native Reanimated** - Animation library
- **Expo Vector Icons** - Icon library
- **Zustand** - State management library
- **Axios** - HTTP client cho API calls
- **React Native Gesture Handler** - Gesture handling

## 🏗️ Kiến trúc dự án

Dự án được tổ chức theo **Feature-based Architecture** với các nguyên tắc:

### **Separation of Concerns**

- **UI Components** (`src/components/`) - Chỉ focus vào rendering
- **Business Logic** (`src/features/`) - Logic nghiệp vụ theo tính năng
- **Data Layer** (`src/api/`, `src/store/`) - Xử lý data và state

### **Feature-based Structure**

Mỗi feature có cấu trúc riêng biệt:

```
src/features/[feature-name]/
├── constants.ts      # Constants và configuration
├── helpers.ts        # Helper functions và utilities
├── hooks.ts          # Custom hooks cho logic
├── sectionTitles.ts  # UI text và titles
├── styles.ts         # StyleSheet definitions
└── types.ts          # TypeScript interfaces
```

### **Code Quality Standards**

- **Type Safety** - Strict TypeScript implementation
- **Reusability** - Components và helpers có thể tái sử dụng
- **Maintainability** - Code dễ maintain và extend
- **Consistency** - Cùng pattern across features

## 📱 Màn hình chính

### HomeScreen

- Banner carousel với khuyến mãi
- Danh mục sản phẩm nhanh (CategoryIconStrip)
- Thương hiệu nổi bật (BrandCarousel)
- Sản phẩm hot và khuyến mãi (FlashSale, HotProducts)
- **Architecture**: Feature-based với styles, constants, helpers tách biệt

### CategoryScreen

- Danh sách danh mục sản phẩm với sidebar filter
- Bộ lọc và sắp xếp theo category
- Hiển thị sản phẩm theo danh mục
- **Architecture**: Event handlers, TypeScript types, reusable components

### NewsScreen

- Tin tức và bài viết mới nhất
- Danh mục tin tức
- Tìm kiếm bài viết

### CartScreen

- Giỏ hàng sản phẩm
- Tính tổng tiền
- Xử lý đơn hàng

### AccountScreen

- Thông tin tài khoản
- Lịch sử đơn hàng
- Cài đặt ứng dụng

## 🎨 Giao diện

Ứng dụng sử dụng thiết kế Material Design với:

- Màu sắc chủ đạo: #025FD5 (xanh dương)
- Giao diện sáng với nền #F2F5F8
- Icons và hình ảnh chất lượng cao
- Responsive design cho nhiều kích thước màn hình

## 📦 Build và Deploy

### Build cho production

```bash
# Build cho Android
expo build:android

# Build cho iOS
expo build:ios

# Build cho web
expo build:web
```

### Publish lên Expo

```bash
expo publish
```

## 🤝 Đóng góp

### Quy trình phát triển

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Tuân thủ architecture pattern:
   - Tách styles vào `styles.ts`
   - Tạo constants trong `constants.ts`
   - Viết helpers trong `helpers.ts`
   - Định nghĩa types trong `types.ts`
4. Commit thay đổi (`git commit -m 'feat: add amazing feature'`)
5. Push lên branch (`git push origin feature/AmazingFeature`)
6. Mở Pull Request

### Code Standards

- **TypeScript**: Strict typing cho tất cả components
- **Architecture**: Feature-based structure
- **Styling**: StyleSheet thay vì inline styles
- **Constants**: Centralized constants thay vì hardcoded values
- **Helpers**: Reusable helper functions

## 📄 Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- **Tác giả**: Lê Thanh Toàn
- **Email**: thanhtoan84200226@gmail.com
- **GitHub**: github.com/LeThanhToan8422

## 🙏 Lời cảm ơn

Cảm ơn bạn đã quan tâm đến dự án Mobile App này. Nếu có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ với chúng tôi!
