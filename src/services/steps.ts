import questionsJson from '../../assets/questions.json';
import { useStepsStore } from '../store/steps';
import { useUserStore } from '../store/user';
import { Step } from '../types/steps';
import { Session, User } from '../types/user';

// Simulate an API call to fetch steps/questions
export async function fetchSteps(): Promise<Step[]> {
  const { setSteps } = useStepsStore.getState();
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));

  setSteps(questionsJson.steps as Step[]);

  return questionsJson.steps as Step[];
}

export const updateSession = (id: string) => {
  const { user } = useUserStore.getState();
  return user?.sessions?.find(session => session.id === id);
}

export const createNewQuestions = () => {
  const { user, setUser } = useUserStore.getState();
  const steps = questionsJson.steps as Step[];

  // Randomly select 5 steps from the available steps
  const shuffledSteps = [...steps].sort(() => Math.random() - 0.5);
  const selectedSteps = shuffledSteps.slice(0, 5);

  // Create a new session
  const newSession: Session = {
    id: Math.random().toString(36).substring(2, 15),
    startedAt: new Date().toISOString(),
    progress: 0,
    steps: [{
      "index": 8,
      "title": "Food Categories",
      "heading": "Categorize this food item by its primary nutritional component.",
      "description": "Understanding food categories helps in making balanced dietary choices and meal planning.",
      "questionData": {
        "questionType": "sort",
        "options": [
          {"option": "Chicken breast"}
        ],
        "correctAnswer": "Categorize by primary macronutrient",
        "categories": ["Primarily Protein", "Primarily Carbohydrate"],
        "correct_answer_mapping": {
          "Primarily Protein": ["Chicken breast"],
          "Primarily Carbohydrate": []
        }
      }
    }],
    score: 0,
    accuracy: 0,
    totalTime: 0,
    averageTime: 0,
    completed: false,
    completedAt: '',
  }

  // Add the new session to the user's sessions
  user?.sessions?.push(newSession);

  setUser(user as User);
}
