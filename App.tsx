
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import AppNavigator from '@navigation/AppNavigator'; 

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} />
      {fontsLoaded ? <AppNavigator /> : <Loading />}
    </ThemeProvider>
  );
}
