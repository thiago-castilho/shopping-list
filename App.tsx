import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Jost-Regular': require('./assets/fonts/Jost-Regular.ttf'),
    'Jost-SemiBold': require('./assets/fonts/Jost-SemiBold.ttf'),
    'Rochester-Regular': require('./assets/fonts/Rochester-Regular.ttf'),
  });

  if (!fontsLoaded)
    return (<AppLoading />)
  return (
    <Routes />
  )
}