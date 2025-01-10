import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../styles.css";
import Toast from 'react-native-toast-message';
import { GlobalProvider } from "../context/GlobalProvider"

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  //    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> 

  return (
    <ThemeProvider value={DefaultTheme}>
      <GlobalProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}   />
            <Stack.Screen name="(details)" options={{ headerShown: false }}/>
            <Stack.Screen name="(quiz)" options={{ headerShown: false }}/>
            <Stack.Screen name="index" options={{ headerShown: false }}/>

            </Stack>
            <Toast/>
          <StatusBar style="light" />
        </GlobalProvider>
    </ThemeProvider>
  );
}
