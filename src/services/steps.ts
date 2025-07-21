import questionsJson from '../../assets/questions.json';
import { useStepsStore } from '../store/steps';
import { Step } from '../types/steps';

// Simulate an API call to fetch steps/questions
export async function fetchSteps(): Promise<Step[]> {
  const { setSteps } = useStepsStore.getState();
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));

  setSteps(questionsJson.steps as Step[]);

  return questionsJson.steps as Step[];
}
