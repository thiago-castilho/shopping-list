import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Welcome } from './src/pages/Welcome';

import SafeAreaWrapper from './src/components/SafeAreaWrapper';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Jost-Regular': require('./assets/fonts/Jost-Regular.ttf'),
    'Jost-SemiBold': require('./assets/fonts/Jost-SemiBold.ttf'),
    'Rochester-Regular': require('./assets/fonts/Rochester-Regular.ttf'),
  });

  if (!fontsLoaded)
    return (<AppLoading />)
  return (
    <SafeAreaWrapper>
      <Welcome />
    </SafeAreaWrapper>
  )
}