import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: "#0B1F3A" },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: { fontWeight: "bold" }
    }}>
      <Stack.Screen name="index"
        options={{ title: "Башкы бет" }} />
    </Stack>
  )
}
