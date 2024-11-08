import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen to manage the loading screen
import { useEffect, useCallback } from 'react';

export default function RootLayout() {
  // Load the fonts
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  // Keep the splash screen visible while fonts are loading
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // Hide the splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Wait for fonts to load before rendering the layout
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack onLayout={onLayoutRootView} screenOptions={{
      headerShown:false,
    }}>
      {/* <Stack.Screen 
        name="index" 
        options={{
          headerShown: false,
        }} 
      /> */}

      <Stack.Screen name='(tabs)'>

      </Stack.Screen>
    </Stack>
  );
}
