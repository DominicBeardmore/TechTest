import { Step } from "./steps";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalSessions: number;
  currentStreak: number;
  accuracyPercentage: number;
  password: string;
  sessions: Session[];
}

export interface Session {
  id: string;
  startedAt: string;
  progress: number; // last question the user was on
  score: number;
  accuracy: number; // percentage of correct answers
  totalTime: number; // total time taken to complete the session
  averageTime: number; // average time taken to complete a question
  completed: boolean;
  completedAt: string;
  steps: Step[];
}
