import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useEmailValidation } from '../src/hooks/useEmailValidation';
import { loginUser, registerUser } from '../src/services/auth';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('Dom1@test.com');
  const [password, setPassword] = useState('test1234');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const { validateEmail } = useEmailValidation();

  const handleLogin = async () => {
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
    const result = await loginUser(email, password);
    setIsLoading(false);
    if (result.success) {
      router.push('/');
    } else {
      setError(result.error || 'Login failed.');
    }
  };

  const handleRegister = async () => {
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
    const result = await registerUser({
      name: email.split('@')[0],
      email,
      password,
      avatar: undefined,
      totalSessions: 0,
      currentStreak: 0,
      accuracyPercentage: 0,
      sessions: [],
    });
    setIsLoading(false);
    if (result.success) {
      Alert.alert('Registration successful!');
      await loginUser(email, password);
    } else {
      setError(result.error || 'Registration failed.');
    }
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
