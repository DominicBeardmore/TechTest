import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface QuestionTitleProps {
  title: string;
  type: 'mcq' | 'sort';
}

export default function QuestionTitle({ title, type }: QuestionTitleProps) {
  return  (
    <View style={styles.container}>
      <Text style={styles.questionType}>{type.toUpperCase()}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    flex: 1,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 3,
    justifyContent: 'center',
  },
  questionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
    flex: 1,
    textAlign: 'center',
  },
});
