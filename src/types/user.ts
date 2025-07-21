export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalSessions: number;
  currentStreak: number;
  accuracyPercentage: number;
  password: string;
}
