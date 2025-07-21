import { Dimensions } from 'react-native';

// Screen dimensions
const { width, height } = Dimensions.get('window');

export const SCREEN = {
  WIDTH: width,
  HEIGHT: height,
  PADDING: 20,
  MARGIN: 10,
};

// Colors
export const COLORS = {
  // Primary colors
  primary: '#007AFF',
  primaryDark: '#0056CC',
  primaryLight: '#4DA3FF',

  // Secondary colors
  secondary: '#5856D6',
  secondaryDark: '#3A3A8C',
  secondaryLight: '#7A79E6',

  // Success colors
  success: '#34C759',
  successDark: '#28A745',
  successLight: '#5CDB7F',

  // Warning colors
  warning: '#FF9500',
  warningDark: '#E6850E',
  warningLight: '#FFB340',

  // Error colors
  error: '#FF3B30',
  errorDark: '#DC3545',
  errorLight: '#FF6B6B',

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Background colors
  background: '#F5F5F5',
  surface: '#FFFFFF',
  card: '#FFFFFF',

  // Text colors
  text: '#1F2937',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textInverse: '#FFFFFF',
};

// Typography
export const FONTS = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

// Border radius
export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  base: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

// Shadows
export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  base: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
};

// Animation
export const ANIMATION = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// API configuration
export const API_CONFIG = {
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com',
  timeout: 10000,
  retries: 3,
};

// Storage keys
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  APP_SETTINGS: 'app_settings',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// App configuration
export const APP_CONFIG = {
  name: 'MedleyAI',
  version: '1.0.0',
  buildNumber: '1',
  bundleIdentifier: 'com.medleyai.app',
};
