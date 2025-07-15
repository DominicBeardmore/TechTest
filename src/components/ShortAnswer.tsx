import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

interface ShortAnswerProps {
  onChangeText: (text: string) => void;
}

const ShortAnswer = ({ onChangeText }: ShortAnswerProps) => {
  return (
    <View>
      <TextInput onChangeText={onChangeText} style={styles.input} />
    </View>
  );
};

export default ShortAnswer;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    height: 100,
  },
});
