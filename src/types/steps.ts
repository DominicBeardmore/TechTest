export interface StepOption {
  option: string;
}

export type QuestionType = 'mcq' | 'sort';

export interface QuestionData {
  questionType: QuestionType;
  options: StepOption[];
  correctAnswer: string;
  categories: string[] | null;
  correct_answer_mapping: Record<string, string[]> | null;
}

export interface Step {
  index: number;
  title: string;
  heading: string;
  description: string;
  questionData: QuestionData;
}
