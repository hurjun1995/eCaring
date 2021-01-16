// Copy this file to App.js to test it

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AuthService from './api/authService'

export default function App() {
  const [message, setMessage] = useState("placeholder")

  const authService = new AuthService()
  const email = "test2@example.com"
  const password = "testpass"
  const signUp = () => {
    authService.createUser(email, password)
      .then(userCredential => {
        setMessage(userCredential.user.email)
      })
      .catch(error => {
        setMessage(error.message)
      })
  }
  const signIn = () => {
    authService.signIn(email, password)
      .then(userCredential => {
        setMessage(userCredential.user.email)
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
      <Button title="signUp" onPress={signUp}/>
      <Button title="signIn" onPress={signIn}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
