import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{
    headerStyle: {backgroundColor: "#006eff"},
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {fontWeight: "bold"}
  }}>
    <Stack.Screen name="index" options={{title: "Менин биринчи приложениям"}} />
  </Stack>
  )
}
