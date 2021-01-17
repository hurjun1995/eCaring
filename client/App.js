import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
//import { DashboardStack } from "./navigation/DashboardStack";
import { NavigationContainer } from '@react-navigation/native';
import {LogStack} from './routes/LogStack'
import {Patient} from './screens/Patient';

export default function App() {
  return (
    <View style={styles.container}>
        {/*<NavigationContainer>*/}
        {/*  <DashboardStack/>*/}
        {/*</NavigationContainer>*/}
        <NavigationContainer>
            <LogStack/>
        </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
