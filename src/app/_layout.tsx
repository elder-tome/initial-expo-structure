import { useEffect } from "react";
import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 75,
          borderTopWidth: 8,
          borderRightWidth: 8,
          borderLeftWidth: 8,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderColor: '#F5F6F7',
          backgroundColor: '#FFFFFF'
        },
        tabBarLabelStyle: { marginBottom: 10 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: 'Solicitar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'clock' : 'clock'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'user' : 'user'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}