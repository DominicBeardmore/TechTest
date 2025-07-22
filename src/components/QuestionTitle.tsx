import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface QuestionTitleProps {
  title: string;
  type: 'mcq' | 'sort';
}

export default function QuestionTitle({ title, type }: QuestionTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.questionType}>{type === 'mcq' ? 'Multiple Choice' : 'Sorting'}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    flex: 3,
    color: '#222',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#F7F7FB',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
  },
  questionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#05B0FF',
    marginBottom: 12,
    flex: 1.5,
  },
});
