import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerTitleStyle: {
        color: '#1F1F1F',
        fontSize: 20,
        fontWeight: '500',
      },
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="index" options={{ title: 'Solicitações' }} />
      <Stack.Screen name="details/[id]" options={{ title: 'Detalhes' }} />
    </Stack>
  );
}