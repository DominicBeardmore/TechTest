import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { asyncStorage } from './shared';
import { User } from '../types/';

export interface UserState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      login: (user: User) =>
        set({ user, isAuthenticated: true, isLoading: false }),
      logout: () =>
        set({ user: null, isAuthenticated: false, isLoading: false }),
      setLoading: (loading: boolean) => set({ isLoading: loading }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => asyncStorage),
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
