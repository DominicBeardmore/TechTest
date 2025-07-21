import AsyncStorage from '@react-native-async-storage/async-storage';

// Shared custom storage for Zustand persistence
export const asyncStorage = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(name);
    } catch {
      return null;
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch {
      // Handle error silently
    }
  },
  removeItem: async (name: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(name);
    } catch {
      // Handle error silently
    }
  },
};
