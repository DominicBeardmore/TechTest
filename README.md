# MedleyAI - React Native Expo App

A modern React Native application built with Expo, TypeScript, and best practices for mobile development.

## 🚀 Features

- **Expo Router**: File-based navigation with deep linking
- **TypeScript**: Full type safety throughout the application
- **Zustand**: Lightweight state management with persistence
- **React Query**: Data fetching and caching
- **Zod**: Runtime validation and type inference
- **Testing**: Jest and React Native Testing Library
- **Linting & Formatting**: ESLint and Prettier configuration
- **Performance**: React Native Reanimated and Gesture Handler
- **Security**: Encrypted storage for sensitive data
- **Internationalization**: Multi-language support

## 📱 Screens

- **Home**: Welcome screen with navigation
- **Counter Demo**: Interactive counter using custom hooks
- **Profile**: User profile with statistics

## 🛠 Tech Stack

### Core Dependencies
- `expo` - React Native framework
- `expo-router` - File-based navigation
- `react-native` - Mobile app framework
- `typescript` - Type safety

### State Management & Data
- `zustand` - Lightweight state management
- `@tanstack/react-query` - Data fetching and caching
- `@react-native-async-storage/async-storage` - Local storage

### UI & Animation
- `react-native-reanimated` - High-performance animations
- `react-native-gesture-handler` - Touch handling
- `expo-image` - Optimized image loading
- `react-native-safe-area-context` - Safe area management

### Validation & Utilities
- `zod` - Schema validation
- `react-native-i18n` - Internationalization

### Development Tools
- `jest` - Testing framework
- `@testing-library/react-native` - Component testing
- `eslint` - Code linting
- `prettier` - Code formatting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   ├── forms/          # Form components
│   └── ui/             # Basic UI elements
├── screens/            # Screen components
├── navigation/         # Navigation configuration
├── services/           # Business logic
│   ├── api/            # API calls
│   └── storage/        # Local storage
├── store/              # State management
├── utils/              # Helper functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript types
├── constants/          # App constants
└── assets/             # Static assets

app/                    # Expo Router pages
├── _layout.tsx         # Root layout
├── index.tsx           # Home screen
├── counter.tsx         # Counter demo
└── profile.tsx         # Profile screen
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MedleyAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- `src/__tests__/hooks/` - Hook tests
- `src/__tests__/screens/` - Screen component tests

## 🔧 Development

### Code Quality
```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### Available Scripts
- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code

## 📦 Key Dependencies Explained

### State Management (Zustand)
- Lightweight alternative to Redux
- Built-in TypeScript support
- Persistence with AsyncStorage
- Example usage in `src/store/index.ts`

### Data Fetching (React Query)
- Automatic caching and background updates
- Optimistic updates
- Error handling and retries
- Example setup in `src/services/api/index.ts`

### Validation (Zod)
- Runtime type checking
- Form validation
- Type inference
- Example schemas in `src/utils/validation.ts`

### Navigation (Expo Router)
- File-based routing
- Type-safe navigation
- Deep linking support
- Automatic code splitting

## 🎨 Styling & Theming

The app uses a comprehensive design system with:
- Consistent color palette (`src/constants/index.ts`)
- Typography scale
- Spacing system
- Shadow definitions
- Border radius values

## 🔒 Security

- Encrypted storage for sensitive data
- Secure API communication
- Input validation with Zod
- Environment variable management

## 🌍 Internationalization

- Multi-language support with `react-native-i18n`
- RTL layout support
- Localized date and number formatting

## 📱 Performance

- React Native Reanimated for smooth animations
- Optimized image loading with `expo-image`
- Code splitting with Expo Router
- Lazy loading of non-critical components

## 🚀 Deployment

### Building for Production
```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

### Environment Variables
Create a `.env` file with:
```
EXPO_PUBLIC_API_URL=your_api_url_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the [Expo documentation](https://docs.expo.dev/)
- Review the [React Native documentation](https://reactnative.dev/)
- Open an issue in this repository 