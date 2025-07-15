import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MulitpleChoice from './MulitpleChoice';
import ShortAnswer from './ShortAnswer';
import { useMarking } from '../hooks/useMarking';

interface QuestionProps {
  index: number;
  question: Question;
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
  questionType: 'mcq' | 'short_answer';
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
  const { options, questionType, correctAnswer, explanation} = questionData;
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
      <Text style={styles.title}>{title}</Text>

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

      <Button onPress={() => checkAnswer()} title="Send" />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
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
});
