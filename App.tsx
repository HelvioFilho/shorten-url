import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { defaultTheme } from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}
