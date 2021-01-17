// Copy this file to App.js to test it

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AuthService from './api/authService'
import CaregiverService from './api/caregiverService'
import PatientService from './api/patientService'
import GuardianService from './api/guardianService'
import { LogService, FoodIntake, Vital } from './api/LogService'

export default function App() {
  const [message, setMessage] = useState("placeholder")
  const [caregiver, setCaregiver] = useState({})
  const [token, setToken] = useState("")
  const [client, setClient] = useState({})

  const email = "test14@example.com"
  const password = "testpass"
  const signUp = () => {
    AuthService.createUser(email, password)
      .then(userCredential => {
        setMessage(userCredential.user.email)
      })
      .catch(error => {
        setMessage(error.message)
      })
  }
  const signIn = () => {
    AuthService.signIn(email, password)
      .then(theClient => {
        setMessage(theClient.toString())
        setClient(theClient)
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
    PatientService.get(caregiver.patientUID)
      .then(patient => {
        setMessage(patient.toString())
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  const generateToken = async () => {
    try {
      const patient = await PatientService.get(caregiver.patientUID)
      const token = await PatientService.generateToken(patient)
      setMessage(token)
      setToken(token)
    } catch (error) {
      console.log(error)
      setMessage(error.message)
    }
  }

  const createGuardian = async () => {
    try {
      const guardian = await GuardianService.create("David", "Kim", token)
      setMessage(guardian.toString())
    } catch (error) {
      setMessage(error.message)
    }
  }

  const getGuardian = async () => {
    try {
      const guardian = await GuardianService.get()
      setMessage(guardian.toString())
    } catch (error) {
      setMessage(error.message)
    }
  }

  const addLog = async () => {
    try {
      const patient = await PatientService.get(caregiver.patientUID)
      const medicines = [
        {name: "Ibuprofen", dosage: 100},
        {name: "Omega-3", dosage:250}
      ]
      await LogService.create(patient, 10, FoodIntake.Breakfast, Vital.Stable, medicines, 3, 3,
                              "Jane went for a walk today.")
      setMessage('added log!')
    } catch (error) {
      console.log(error)
      setMessage(error.message)
    }
  }

  const getLog = async () => {
    try {
      const patient = await PatientService.get(caregiver.patientUID)
      const logs = await LogService.get(patient)
      setMessage('fetched log!')
      console.log(logs)
    } catch (error) {
      console.log(error)
      setMessage(error.message)
    }
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
      <Button title="generate Token" onPress={generateToken}/>
      <Button title="create Guardian" onPress={createGuardian}/>
      <Button title="get Guardian" onPress={getGuardian}/>
      <Button title="add Log" onPress={addLog}/>
      <Button title="get Log" onPress={getLog}/>
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
