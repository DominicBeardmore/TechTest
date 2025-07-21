import { useUserStore } from '../store/user';
import { useAccountsStore } from '../store/accounts';
import { User } from '../types/user';
import { fetchSteps } from './steps';

export async function loginUser(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  // Get users from the accounts store
  const { users } = useAccountsStore.getState();
  const { login } = useUserStore.getState();

  // Find user by email
  const user = users.find(u => u.email === email);

  if (!user) {
    return { success: false, error: 'User not found.' };
  }
  if (user.password !== password) {
    return { success: false, error: 'Incorrect password.' };
  }

  // create a bearer token
  const token = { userId: user.id, expiry: Date.now() + 1000 * 60 * 60 };

  login(user as User, JSON.stringify(token));
  await fetchSteps();
  return { success: true };
}

export async function registerUser(newUser: Omit<User, 'id' | 'createdAt'>): Promise<{ success: boolean; error?: string }> {
  const { users, addUser } = useAccountsStore.getState();

  // Check if email already exists
  if (users.some(u => u.email === newUser.email)) {
    return { success: false, error: 'Email is already registered.' };
  }

  // Create new user object
  const user = {
    ...newUser,
    id: Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
  };

  addUser(user);
  return { success: true };
}
