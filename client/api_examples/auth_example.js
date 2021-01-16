// Copy this file to App.js to test it

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AuthService from './api/authService'
import CaregiverService from './api/caregiverService'
import PatientService from './api/patientService'

export default function App() {
  const [message, setMessage] = useState("placeholder")
  const [caregiver, setCaregiver] = useState({})

  const authService = new AuthService()
  const email = "test8@example.com"
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

  const createCaregiver = () => {
    CaregiverService.create("John", "Doe", "BC Hospital", "UBC")
      .then(caregiver => {
        setMessage(caregiver.toString() + caregiver.email)
        setCaregiver(caregiver)
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  const updateCaregiver = () => {
    CaregiverService.get()
      .then(caregiver => {
        return CaregiverService.update(caregiver, "last", "first", "netapp", "UT")
      })
      .then(caregiver => {
        setMessage(caregiver.toString() + caregiver.email)
        setCaregiver(caregiver)
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  const getCaregiver = async () => {
    try {
      const caregiver = await CaregiverService.get()
      setMessage(caregiver.toString() + caregiver.email)
      setCaregiver(caregiver)
    } catch(error) {
      setMessage(error.message)
    }
  }

  const createPatient = () => {
    PatientService.createAndRegister(caregiver, "Alice", "Lee")
      .then(patient => {
        setMessage(patient.toString())
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  const getPatient = () => {
    PatientService.get(caregiver)
      .then(patient => {
        setMessage(patient.toString())
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
      <Button title="create caregiver" onPress={createCaregiver}/>
      <Button title="update caregiver" onPress={updateCaregiver}/>
      <Button title="get caregiver" onPress={getCaregiver}/>
      <Button title="create patient" onPress={createPatient}/>
      <Button title="get patient" onPress={getPatient}/>
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
