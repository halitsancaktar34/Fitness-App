import { View, LogBox } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ExerciseProvider } from "../context/ExerciseContext";

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
  return (
    <ExerciseProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="exercises"
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="exerciseDetails"
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="bookmarks" />
      </Stack>
    </ExerciseProvider>
  );
}
