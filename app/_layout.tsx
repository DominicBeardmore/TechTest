import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="counter"
          options={{
            title: 'Counter Demo',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="quiz"
          options={{
            title: 'Quiz',
            headerShown: true,
          }}
        />
      </Stack>
    </>
  );
}
