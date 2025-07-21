import { Stack } from 'expo-router/stack';
import { Redirect } from 'expo-router';
import React from 'react';

export default function Layout() {

  const isBearerTokenValid = () => {
    return false;
  }

  // set this to some condition
  if (!isBearerTokenValid()) {
    return <Redirect href={'/login'} />;
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
