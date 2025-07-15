import { useState } from 'react';

interface QuestionAndAnswer {
  question: string; // actually the response
  userAnswer: string;
}

export const useMarking = async ({
  question,
  userAnswer,
}: QuestionAndAnswer): Promise<boolean> => {
  return question === userAnswer;
};
