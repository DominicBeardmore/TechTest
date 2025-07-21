import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { asyncStorage } from './shared';
import { User } from '../types/';

export interface AccountsState {
  users: User[];
  addUser: (user: User) => void;
  getUsers: () => User[];
}

export const useAccountsStore = create<AccountsState>()(
  persist(
    (set, get) => ({
      users: [],
      addUser: user => set(state => ({ users: [...state.users, user] })),
      getUsers: () => get().users,
    }),
    {
      name: 'accounts-storage',
      storage: createJSONStorage(() => asyncStorage),
      partialize: state => ({ users: state.users }),
    }
  )
);
