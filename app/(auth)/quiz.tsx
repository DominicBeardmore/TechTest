import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import Question from '../../src/components/Question';
import { useNavigation } from '@react-navigation/native';
import { useStepsStore } from '../../src/store/steps';

export default function Quiz() {
  const navigation = useNavigation();
  const { steps } = useStepsStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onNext = () => {
    if (currentQuestion < steps.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert('You have completed the quiz');
      navigation.navigate("/");
    }
  }

  return (
    <View>
      <Text>Question {currentQuestion + 1} of {steps.length}</Text>
      {
        currentQuestion < steps.length - 1 ? (
          <Question
            question={steps[currentQuestion]}
            index={currentQuestion}
            onNext={() => setCurrentQuestion(currentQuestion + 1)}
            onPrevious={() => setCurrentQuestion(currentQuestion - 1)}
          />
        ) : (
          <Text>You have completed the quiz</Text>
        )
      }
    </View>
  );
}
