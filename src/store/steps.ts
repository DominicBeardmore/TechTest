import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { asyncStorage } from './shared';
import { Step } from '../types/steps';

export interface StepsState {
  steps: Step[] | null;
  setSteps: (steps: Step[]) => void;
  clearSteps: () => void;
}

export const useStepsStore = create<StepsState>()(
  persist(
    (set) => ({
      steps: null,
      setSteps: (steps) => set({ steps }),
      clearSteps: () => set({ steps: null }),
    }),
    {
      name: 'steps-storage',
      storage: createJSONStorage(() => asyncStorage),
      partialize: (state) => ({ steps: state.steps }),
    }
  )
);
