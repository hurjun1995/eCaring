import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {LogStack} from './routes/LogStack'
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <LogStack/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
