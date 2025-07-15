import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

interface MulitpleChoiceProps {
  option: string;
  onSelectOption: (option: string) => void;
}

const MulitpleChoice = ({ option, onSelectOption }: MulitpleChoiceProps) => {
  return (
    <Pressable style={styles.container} onPress={() => onSelectOption(option)}>
      <Text>{option}</Text>
    </Pressable>
  );
};

export default MulitpleChoice;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
