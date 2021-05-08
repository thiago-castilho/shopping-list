import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EmptyList } from '../components/EmptyList';
import { Header } from '../components/Header';

import colors from '../styles/colors';

export function Products() {
  return (
    <View style={styles.container}>
      <View >
        <Header />
      </View>
      <EmptyList />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});