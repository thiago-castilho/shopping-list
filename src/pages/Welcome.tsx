import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import { Splash } from '../components/Splash';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Welcome() {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo!</Text>
        <Splash />
        <Text style={styles.subtitle}>
          Gerencie sua lista de compras {'\n'} de forma simples e intuitiva.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text>
            <Feather
              name="chevron-right"
              style={styles.buttonIcon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10
  },
  title: {
    fontFamily: fonts.jost_semi_bold,
    fontSize: 30,
    textAlign: 'center',
    color: colors.blue_dark,
    marginTop: 70,
  },
  subtitle: {
    fontFamily: fonts.jost_regular,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 20,
    color: colors.blue_dark,
    marginTop: -50,
  },
  button: {
    backgroundColor: colors.blue_dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32
  }
});