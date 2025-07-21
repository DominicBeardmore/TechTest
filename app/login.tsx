import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useEmailValidation } from '../src/hooks/useEmailValidation';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const { validateEmail } = useEmailValidation();

  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'test@example.com' && password === 'password') {
        Alert.alert('Login successful!');
      } else {
        setError('Invalid email or password.');
      }
    }, 1000);
  };

  const handleRegister = () => {
    setError('');
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'test@example.com') {
        setError('This email is already registered.');
      } else {
        Alert.alert('Registration successful!');
      }
    }, 1000);
  };

  const handleSubmit = () => {
    if (isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegister ? 'Register' : 'Login'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        editable={!isLoading}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        editable={!isLoading}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.buttonRow}>
        <Button
          title={'Login'}
          onPress={() => setIsRegister(r => !r)}
          disabled={isLoading}
        />
        <View style={{ width: 12 }} />
        <Button
          title={'Register'}
          onPress={() => setIsRegister(r => !r)}
          disabled={isLoading}
        />
      </View>
      <View style={styles.submitButtonContainer}>
        <Button
          title={isLoading ? 'Submitting...' : 'Submit'}
          onPress={handleSubmit}
          disabled={isLoading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  error: {
    color: '#FF3B30',
    marginBottom: 16,
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonContainer: {
    marginTop: 32,
    width: '100%',
    maxWidth: 320,
  },
});
