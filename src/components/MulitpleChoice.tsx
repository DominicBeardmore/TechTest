import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

interface MulitpleChoiceProps {
  option: string;
  onSelectOption: (option: string) => void;
}

const MulitpleChoice = ({ option, onSelectOption }: MulitpleChoiceProps) => {
  return (
    <Pressable style={[styles.container, styles.notSelected]} onPress={() => onSelectOption(option)}>
      <Text>{option}</Text>
    </Pressable>
  );
};

export default MulitpleChoice;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  success: {
    backgroundColor: '#00ff00',
  },
  error: {
    backgroundColor: '#ff0000',
  },
  selected: {
    backgroundColor: '#0000ff',
  },
  notSelected: {
    backgroundColor: '#f0f0f0',
  },
});
