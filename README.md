# 📱 Mobile App

A mobile application built with React Native and Expo, providing an online shopping experience with modern and user-friendly interface.

## ✨ Key Features

- 🏠 **Home**: Display banners, product categories, featured brands
- 🛍️ **Categories**: Browse and search products by category
- 📰 **News**: Latest news and articles updates
- 🛒 **Cart**: Manage selected products
- 👤 **Account**: Manage personal information and orders
- 🎯 **Promotions**: Flash sales and special offers
- 🔍 **Search**: Quick product search

## 🚀 Installation

### System Requirements

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)

### Install Dependencies

```bash
# Clone repository
git clone <repository-url>
cd Mobile-App

# Install dependencies
npm install
# or
yarn install

# Install Expo CLI (if not already installed)
npm install -g @expo/cli
```

## 🏃‍♂️ Running the App

### Start Development Server

```bash
# Start Expo development server
npm start
# or
expo start
```

### Run on Device

```bash
# Run on Android
npm run android
# or
expo start --android

# Run on iOS
npm run ios
# or
expo start --ios

# Run on web
npm run web
# or
expo start --web
```

## 📱 Project Structure

```
Mobile-App/
├── assets/                 # Static resources (images, icons)
│   ├── banners/           # Advertisement banners
│   ├── brands/            # Brand logos
│   ├── products/          # Product images
│   └── icons/             # Interface icons
├── src/
│   ├── api/               # API configuration and HTTP client
│   │   └── client.ts      # Axios client with interceptors
│   ├── components/        # Reusable components
│   │   ├── ProductCard/          # Product card component
│   │   ├── BannerCarousel/       # Banner carousel component
│   │   ├── HomeHeader/           # Home header component
│   │   ├── BadgePill/            # Badge pill component
│   │   ├── ProgressBar/           # Progress bar component
│   │   ├── SectionHeader/         # Section header component
│   │   ├── MiniProductCard/       # Mini product card component
│   │   ├── FeaturedArticleItem/   # Featured article component
│   │   ├── Countdown/             # Countdown component
│   │   ├── CategoryShortcuts/     # Category shortcuts component
│   │   ├── SubBanner/             # Sub banner component
│   │   ├── PromoGrid/             # Promo grid component
│   │   ├── QualityFilterCard/     # Quality filter card component
│   │   ├── CategoryIconStrip/     # Category icon strip component
│   │   ├── CategorySection/       # Category section component
│   │   ├── CategoryCard/          # Category card component
│   │   ├── CategoryHeader/        # Category header component
│   │   ├── BrandCarousel/         # Brand carousel component
│   │   └── BrandTile/             # Brand tile component
│   ├── constants/         # Global constants
│   │   └── index.ts       # API config, validation, messages
│   ├── data/              # Mock data and helper functions
│   │   ├── products.ts    # Product data
│   │   └── brands.ts      # Brand data
│   ├── features/          # Business logic by feature
│   │   ├── home/          # Home feature
│   │   │   ├── constants.ts    # Home constants (assets, limits)
│   │   │   ├── helpers.ts      # Home helper functions
│   │   │   ├── hooks.ts        # Home custom hooks
│   │   │   ├── sectionTitles.ts # Home section titles
│   │   │   ├── styles.ts       # Home styles
│   │   │   └── types.ts        # Home TypeScript types
│   │   ├── category/      # Category feature
│   │   │   ├── constants.ts    # Category constants (text, images)
│   │   │   ├── helpers.ts      # Category helper functions
│   │   │   ├── hooks.ts        # Category custom hooks
│   │   │   ├── sectionTitles.ts # Category section titles
│   │   │   ├── styles.ts       # Category styles
│   │   │   └── types.ts        # Category TypeScript types
│   │   └── news/          # News feature
│   ├── hooks/             # Custom hooks
│   │   └── useApi.ts      # API handling, pagination, search
│   ├── navigation/        # App navigation
│   │   └── RootNavigator.tsx
│   ├── screens/           # Main screens
│   │   ├── HomeScreen.tsx
│   │   ├── CategoryScreen.tsx
│   │   ├── NewsScreen.tsx
│   │   ├── CartScreen.tsx
│   │   └── AccountScreen.tsx
│   ├── services/          # Business logic services
│   ├── store/             # State management (Zustand)
│   │   └── productStore.ts # Product state management
│   ├── theme/             # UI and colors
│   │   └── colors.ts
│   ├── types/             # TypeScript types and interfaces
│   │   └── index.ts       # Global types
│   ├── utils/             # Utility functions
│   │   └── formatters.ts  # Data formatting utilities
│   └── index.ts           # Main export file
├── App.tsx                # Root component
├── package.json           # Dependencies and scripts
└── app.json              # Expo configuration
```

## 🛠️ Technologies Used

- **React Native 0.79.5** - Mobile app development framework
- **Expo 53.0.20** - Platform and tools for React Native development
- **TypeScript 5.8.3** - Programming language with type safety
- **React Navigation 7.x** - Navigation library
- **React Native Reanimated** - Animation library
- **Expo Vector Icons** - Icon library
- **Zustand** - State management library
- **Axios** - HTTP client for API calls
- **React Native Gesture Handler** - Gesture handling

## 🏗️ Project Architecture

The project is organized using **Feature-based Architecture** with the following principles:

### **Separation of Concerns**

- **UI Components** (`src/components/`) - Focus only on rendering
- **Business Logic** (`src/features/`) - Business logic by feature
- **Data Layer** (`src/api/`, `src/store/`) - Data and state handling

### **Feature-based Structure**

Each feature has its own structure:

```
src/features/[feature-name]/
├── constants.ts      # Constants and configuration
├── helpers.ts        # Helper functions and utilities
├── hooks.ts          # Custom hooks for logic
├── sectionTitles.ts  # UI text and titles
├── styles.ts         # StyleSheet definitions
└── types.ts          # TypeScript interfaces
```

### **Code Quality Standards**

- **Type Safety** - Strict TypeScript implementation
- **Reusability** - Components and helpers are reusable
- **Maintainability** - Code is easy to maintain and extend
- **Consistency** - Same pattern across features

## 📱 Main Screens

### HomeScreen

- Banner carousel with promotions
- Quick product categories (CategoryIconStrip)
- Featured brands (BrandCarousel)
- Hot products and promotions (FlashSale, HotProducts)

### CategoryScreen

- Product category list with sidebar filter
- Filter and sort by category
- Display products by category

### NewsScreen

- Latest news and articles
- News categories
- Article search

### CartScreen

- Shopping cart products
- Calculate total price
- Process orders

### AccountScreen

- Account information
- Order history
- App settings

## 🎨 User Interface

The app uses Material Design with:

- Primary color: #025FD5 (blue)
- Light interface with #F2F5F8 background
- High-quality icons and images
- Responsive design for multiple screen sizes

## 📦 Build and Deploy

### Build for Production

```bash
# Build for Android
expo build:android

# Build for iOS
expo build:ios

# Build for web
expo build:web
```

### Publish to Expo

```bash
expo publish
```

## 🤝 Contributing

### Development Process

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Follow the architecture pattern and code standards
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Code Standards

- **TypeScript**: Strict typing for all components
- **Architecture**: Feature-based structure
- **Styling**: StyleSheet instead of inline styles
- **Constants**: Centralized constants instead of hardcoded values
- **Helpers**: Reusable helper functions

## 📄 License

This project is distributed under the MIT license. See the `LICENSE` file for more details.

## 📞 Contact

- **Author**: Lê Thanh Toàn
- **Email**: thanhtoan84200226@gmail.com
- **GitHub**: github.com/LeThanhToan8422

## 🙏 Acknowledgments

Thank you for your interest in this Mobile App project. If you have any questions or suggestions, please contact us!
