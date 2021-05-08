import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/splash.json';

export function Splash() {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: -15
  },
  animation: {
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width * 0.7
  }
})