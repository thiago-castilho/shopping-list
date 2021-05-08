import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/empty-list.json';
import fonts from '../styles/fonts';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Sua lista de compras {'\n'} está vazia.
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110
  },
  animation: {
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width * 0.55
  },
  text: {
    marginTop: 30,
    fontSize: 24,
    fontFamily: fonts.jost_regular,
    textAlign: 'center',
  }
})