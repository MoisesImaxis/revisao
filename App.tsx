import Home from "@screens/Home";

import { ThemeProvider } from 'styled-components/native';

import theme from '@theme/index';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';


export default function App() {
  const [fontsLoaded] =  useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
       { fontsLoaded ? <Home /> : <Loading /> }
    </ThemeProvider>
  );
}


