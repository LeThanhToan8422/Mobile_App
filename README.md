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
│   ├── components/        # Components tái sử dụng
│   │   ├── BannerCarousel.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CategoryIconStrip.tsx
│   │   └── ...
│   ├── features/          # Logic nghiệp vụ theo tính năng
│   │   ├── home/          # Tính năng trang chủ
│   │   ├── category/      # Tính năng danh mục
│   │   └── news/          # Tính năng tin tức
│   ├── navigation/        # Điều hướng ứng dụng
│   │   └── RootNavigator.tsx
│   ├── screens/           # Màn hình chính
│   │   ├── HomeScreen.tsx
│   │   ├── CategoryScreen.tsx
│   │   ├── NewsScreen.tsx
│   │   ├── CartScreen.tsx
│   │   └── AccountScreen.tsx
│   └── theme/             # Giao diện và màu sắc
│       └── colors.ts
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

## 📱 Màn hình chính

### HomeScreen

- Banner carousel với khuyến mãi
- Danh mục sản phẩm nhanh
- Thương hiệu nổi bật
- Sản phẩm hot và khuyến mãi

### CategoryScreen

- Danh sách danh mục sản phẩm
- Bộ lọc và sắp xếp
- Hiển thị sản phẩm theo danh mục

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

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- **Tác giả**: Lê Thanh Toàn
- **Email**: thanhtoan84200226@gmail.com
- **GitHub**: github.com/LeThanhToan8422

## 🙏 Lời cảm ơn

Cảm ơn bạn đã quan tâm đến dự án Mobile App này. Nếu có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ với chúng tôi!
