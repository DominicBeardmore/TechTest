import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import Question from '../../src/components/Question';
import { useNavigation } from '@react-navigation/native';

export default function Quiz() {
  const navigation = useNavigation();
  const questions = require('../../assets/questions.json').steps;
  const [currentQuestion, setCurrentQuestion] = useState(0);


  const onNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Alert.alert('You have completed the quiz');
      navigation.navigate("/");
    }
  }

  return (
    <View>
      <Text>Question {currentQuestion + 1} of {questions.length}</Text>
      {
        currentQuestion < questions.length - 1 ? (
          <Question
            question={questions[currentQuestion]}
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
