import { useState } from 'react';

interface QuestionAndAnswer {
  question: string; // actually the response
  userAnswer: string;
  questionType: string;
  correctAnswerMapping: CorrectAnswerMapping;
  categories: string[];
  cat1: string[];
  cat2: string[];
}

interface CorrectAnswerMapping {
  [key: string]: string[];
}

export const useMarking = ({
  question,
  userAnswer,
  questionType,
  correctAnswerMapping,
  categories,
  cat1,
  cat2,
}: QuestionAndAnswer): boolean => {
  if (questionType === 'sort') {
    const userMapping = {
      [categories[0]]: cat1 ?? [],
      [categories[1]]: cat2 ?? []
    }

    for (const key in correctAnswerMapping) {
      const correctAnswers = correctAnswerMapping[key];
      const userAnswers = userMapping[key];

      // Check if arrays exist and have same length
      if (!correctAnswers || !userAnswers || correctAnswers.length !== userAnswers.length) {
        return false;
      }

      // Check if all elements match
      const isMatch = correctAnswers.every(answer => userAnswers.includes(answer));
      if (!isMatch) {
        return false;
      }
    }

    return true;
  }

  if (questionType === 'mcq') {
    return question === userAnswer;
  }

  return false;
};
