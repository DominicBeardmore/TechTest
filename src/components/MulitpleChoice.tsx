import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';

interface MulitpleChoiceProps {
  option: string;
  status: 'success' | 'error' | 'neutral' | 'selected';
  optionRef: React.RefObject<number>;
  selectedRef: React.RefObject<number>;
  onSelectOption: (option: string) => void;
}

const MulitpleChoice = ({ option, onSelectOption, status, optionRef, selectedRef }: MulitpleChoiceProps) => {
  const buttonContainerBackground = {
    "success": "#E4FFB7",
    "error": "#FDEEEE",
    "neutral": "#FCFCFF",
    "selected": "#DBF3FF",
  }
  const buttonBorderColor = {
    "success": "#7CC500",
    "error": "#FF4B4C",
    "neutral": "#F0F0F0",
    "selected": "#05B0FF",
  }

  const buttonContainerStyle = useMemo(() => {
    return {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderColor: buttonBorderColor[status],
      borderWidth: 1,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 1,
      shadowColor: buttonBorderColor[status],
      backgroundColor: buttonContainerBackground[status],
    }
  }, [status]);

  return (
    <Pressable style={[styles.container, buttonContainerStyle]} onPress={() => {
      selectedRef.current = optionRef.current;
      onSelectOption(option)
    }}>
      <Text>{option}</Text>
    </Pressable>
  );
};

export default MulitpleChoice;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation: 5,
    paddingTop: 30,
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
    backgroundColor: '#FCFCFF',
    borderColor: '#E6E6E6',
    borderWidth: 1,
  },
});
