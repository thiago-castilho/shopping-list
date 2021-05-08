import { Jost_200ExtraLight } from '@expo-google-fonts/jost';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>
        Lista de Compras
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: getStatusBarHeight(),
  },
  title: {
    fontFamily: fonts.rochester_regular,
    fontSize: 40,
    color: colors.blue_dark,
  }
});