import { Stack } from 'expo-router/stack';
import { Redirect } from 'expo-router';
import React from 'react';
import { useUserStore } from '../../src/store/user';

export default function Layout() {
  const { isAuthenticated, token } = useUserStore();

  // Helper to check if the bearer token is valid
  const isBearerTokenValid = () => {
    if (!token) return false;
    try {
      const decodedToken = JSON.parse(token);
      return decodedToken.expiry && decodedToken.expiry > Date.now();
    } catch {
      return false;
    }
  };

  if (!isAuthenticated || !isBearerTokenValid()) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="quiz"
        options={{
          title: 'Quiz',
        }}
      />
    </Stack>
  );
}
