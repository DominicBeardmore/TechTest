import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useCounter } from '../src/hooks';

export default function CounterScreen() {
  const {
    count,
    increment,
    decrement,
    reset,
    setValue,
    isAtMin,
    isAtMax,
  } = useCounter({
    initialValue: 0,
    min: -10,
    max: 10,
    step: 1,
  });

  const handleSetValue = () => {
    Alert.prompt(
      'Set Counter Value',
      'Enter a number between -10 and 10:',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Set',
          onPress: (value) => {
            const numValue = parseInt(value || '0', 10);
            if (!isNaN(numValue)) {
              setValue(numValue);
            }
          },
        },
      ],
      'plain-text',
      count.toString()
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterLabel}>Current Count:</Text>
        <Text style={styles.counterValue}>{count}</Text>
        
        <View style={styles.boundaryInfo}>
          <Text style={[styles.boundaryText, isAtMin && styles.boundaryActive]}>
            Min: -10 {isAtMin && '✓'}
          </Text>
          <Text style={[styles.boundaryText, isAtMax && styles.boundaryActive]}>
            Max: 10 {isAtMax && '✓'}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          testID="decrement-button"
          accessibilityLabel="decrement"
          style={[styles.button, styles.decrementButton, isAtMin && styles.disabledButton]}
          onPress={decrement}
          disabled={isAtMin}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID="increment-button"
          accessibilityLabel="increment"
          style={[styles.button, styles.incrementButton, isAtMax && styles.disabledButton]}
          onPress={increment}
          disabled={isAtMax}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.setButton]} onPress={handleSetValue}>
          <Text style={styles.buttonText}>Set Value</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          This counter demonstrates the useCounter hook with:
        </Text>
        <Text style={styles.infoText}>• Min/Max boundaries (-10 to 10)</Text>
        <Text style={styles.infoText}>• Step increment/decrement</Text>
        <Text style={styles.infoText}>• Reset functionality</Text>
        <Text style={styles.infoText}>• Direct value setting</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  counterContainer: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  counterLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 15,
  },
  boundaryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  boundaryText: {
    fontSize: 14,
    color: '#999',
  },
  boundaryActive: {
    color: '#34C759',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    marginHorizontal: 10,
  },
  decrementButton: {
    backgroundColor: '#FF3B30',
  },
  incrementButton: {
    backgroundColor: '#34C759',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  resetButton: {
    backgroundColor: '#FF9500',
    flex: 1,
    marginHorizontal: 5,
  },
  setButton: {
    backgroundColor: '#5856D6',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
}); 