import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Question from '../src/components/Question';

export default function Quiz() {
  const questions = require('../assets/questions.json').steps;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <View>
      <Question
        question={questions[currentQuestion]}
        index={currentQuestion}
        onNext={() => setCurrentQuestion(currentQuestion + 1)}
        onPrevious={() => setCurrentQuestion(currentQuestion - 1)}
      />
    </View>
  );
}
