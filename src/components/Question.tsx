import { View, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useMarking } from '../hooks/useMarking';
import { Step } from '../types/steps';
import QuestionTitle from './QuestionTitle';
import QuestionSubmit from './QuestionSubmit';
import MultipleChoices from './MultipleChoice/';
import SortQuestion from './Sort';

interface QuestionProps {
  index: number;
  question: Step;
  sessionRef: React.RefObject<Record<number, { timeTaken: number }>>;
  scoreRef: React.RefObject<number>;
  onNext: () => void;
  onPrevious: () => void;
}

interface Question {
  title: string;
  heading: string;
  description: string;
  questionData: QuestionData;
}

interface QuestionData {
  questionType: 'mcq' | 'sort';
  options: Options[];
  categories: string[];
  correctAnswer: string;
  explanation: string;
}

interface Options {
  option: string;
}

const Question = (question: QuestionProps) => {
  const cat1 = useRef<string[]>([]);
  const cat2 = useRef<string[]>([]);
  const { sessionRef } = question;
  const { title, questionData } = question.question;
  const { options, questionType, correctAnswer, categories, correct_answer_mapping } = questionData;
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<'success' | 'error' | 'neutral' | 'selected'>('neutral');
  const questionRef = useRef({
    startTime: Date.now(),
    endTime: null,
    attempted: 0,
  });
  const selectedOption = useRef(0);
  // Reset attempt counter when question changes
  useEffect(() => {
    questionRef.current.attempted = 0;
    selectedOption.current = 0;
    questionRef.current.startTime = Date.now();
    questionRef.current.endTime = null;
    cat1.current = [];
    cat2.current = [];
    setStatus('neutral');
    setResponse(null);
  }, [question.index]);

  const onChangeText = (text: string) => {
    setStatus('neutral');
    setResponse(text);
  };

  const checkAnswer = async () => {
    questionRef.current.attempted += 1;
    const result = useMarking({
      question: response ?? '',
      userAnswer: correctAnswer,
      questionType: questionType,
      cat1: cat1.current,
      cat2: cat2.current,
      categories: categories ?? [],
      correctAnswerMapping: correct_answer_mapping ?? {}
    });

    if (result) {
      setStatus('success');
      sessionRef.current[question.index] = {
        timeTaken: Date.now() - questionRef.current.startTime,
      }
      question.scoreRef.current += 1;
    } else {
      setStatus('error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <QuestionTitle title={title} type={questionType} />
        <View style={styles.questionContent}>
          {questionType === 'mcq' ? (
            <MultipleChoices options={options} onChangeText={onChangeText} selectedOption={selectedOption} status={status} />
          ) : (
            <SortQuestion cat1={cat1} cat2={cat2} categories={categories ?? []} options={options} />
          )}
        </View>
      </View>
      <QuestionSubmit
        status={status}
        onPress={status === 'success' ?
          () => question.onNext() :
          () => checkAnswer()
        }
        onPrevious={() => question.onPrevious()}
      />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  questionContainer: {
    padding: 10,
    flex: 7,
  },
  questionContent: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
