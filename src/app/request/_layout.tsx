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
      <Stack.Screen name="index" options={{ title: 'Catálogo de produtos' }} />
      <Stack.Screen name="review/[data]" options={{ title: 'Revisão do pedido' }} />
    </Stack>
  );
}