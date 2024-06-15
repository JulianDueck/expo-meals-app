import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  return (
    <>
      <StatusBar style="light" />
      <GestureHandlerRootView
        style={{ flex: 1, backgroundColor: backgroundColor }}
      >
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="(drawer)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="mealsOverview" />
          <Stack.Screen name="details" />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
