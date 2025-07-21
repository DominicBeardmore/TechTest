import React, { useMemo } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

interface QuestionSubmitProps {
  onPress: () => void;
  title?: string;
  status?: 'success' | 'error' | 'neutral';
}

export default function QuestionSubmit({ onPress, title = 'Submit', status = 'neutral' }: QuestionSubmitProps) {

  const buttonContainerBackground = {
    "success": "#E4FFB7",
    "error": "#FDEEEE",
    "neutral": "#FCFCFF",
  }

  const buttonContainerStyle = useMemo(() => {
    return {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: buttonContainerBackground[status],
    }
  }, [status]);

  const buttonTextColor = {
    "success": "#FCFCFF",
    "error": "#FCFCFF",
    "neutral": "#BCBCBE",
  }

  const buttonTextColorStyle = useMemo(() => {
    return {
      color: buttonTextColor[status],
    }
  }, [status]);

  const buttonBackground = {
    "success": "#E4FFB7",
    "error": "#FF4B4C",
    "neutral": "#F0F0F0",
  }

  const buttonStyle = useMemo(() => {
    return {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: buttonBackground[status],
    }
  }, [status]);


  return (
    <View style={[styles.container, buttonContainerStyle]}>
      <Pressable onPress={onPress} style={[styles.button, buttonStyle]} >
        <Text style={[styles.buttonText, buttonTextColorStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 30,
    alignSelf: 'center',
    width: '80%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 30,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerSuccess: {
    backgroundColor: '#00ff00',
  },
  containerError: {
    backgroundColor: '#ff0000',
  },
  containerNeutral: {
    backgroundColor: '#f0f0f0',
  },
});
