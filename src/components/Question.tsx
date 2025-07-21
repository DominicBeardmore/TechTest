import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MulitpleChoice from './MulitpleChoice';
import ShortAnswer from './ShortAnswer';
import { useMarking } from '../hooks/useMarking';
import { Step } from '../types/steps';
import QuestionTitle from './QuestionTitle';
import QuestionSubmit from './QuestionSubmit';

interface QuestionProps {
  index: number;
  question: Step;
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
  const { title, heading, description, questionData } = question.question;
  const { options, questionType, correctAnswer} = questionData;
  const [response, setResponse] = useState<string | null>(null);

  const attempted = useRef(0);

  // Reset attempt counter when question changes
  useEffect(() => {
    attempted.current = 0;
    setResponse(null);
  }, [question.index]); // Also reset when question title changes

  const onChangeText = (text: string) => {
    setResponse(text);
  };

  const checkAnswer = async () => {
    const result = await useMarking({
      question: response ?? '',
      userAnswer: correctAnswer,
    });
    attempted.current += 1;

    if (result) {
      Alert.alert('Correct', '', [{text: 'Next', onPress: () => question.onNext()}]);
    } else {
      if (attempted.current === 1) {
        // First wrong attempt - give second chance
        Alert.alert(
          'Incorrect',
          heading,
          [{text: 'Try Again', onPress: () => setResponse(null)}]
        );
      } else {
        // Second wrong attempt - show correct answer
        Alert.alert(
          'Incorrect',
          `The correct answer is: ${correctAnswer}`,
          [{text: 'Next', onPress: () => question.onNext()}]
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <QuestionTitle title={title} type={questionType} />
        <View style={styles.questionContent}>
        {questionType === 'mcq' ? (
          options.map((option, index) => (
          <MulitpleChoice
              key={index}
              option={option.option}
              onSelectOption={onChangeText}
            />
          ))
        ) : (
          <ShortAnswer onChangeText={onChangeText} />
        )}
        </View>
      </View>
     <QuestionSubmit onPress={() => checkAnswer()} />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 12,
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
    borderWidth: 1,
    borderColor: 'gray',
    flex: 5,
  },
  questionContent: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
