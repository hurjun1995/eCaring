import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DashboardStack } from "./navigation/DashboardStack";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    const data = [
        {
            key: new Date(2021, 0, 15, 10, 33, 30, 0),
            value: {
                hydration: 1.5,
                foodIntake: ["Lunch", "Dinner"],
                vitals: "Stable",
                medicine: [
                    {name:"Ibuprofen", dosage:100},
                    {name:"Omega-3", dosage:250}
                ],
                mentalHealth: 3,
                painLevel: 3,
                notes: "Jane went for a walk today."
        }},
        {
            key: new Date(2021, 0, 14, 10, 33, 30, 0),
            value: {
                hydration: 2,
                foodIntake: ["Dinner"],
                vitals:"n/a",
                medicine: [
                    {name:"Ibuprofen", dosage:100},
                    {name:"Omega-3", dosage:250},
                    {name:"Hydro-codone", dosage:20},
                    {name:"Metformin", dosage: 100}
                ],
                mentalHealth: 1,
                painLevel: 4,
                notes: "Jane has been feeling down. Family should give her a call."
        }},
    ];

  return (
    <View style={styles.container}>
        <NavigationContainer>
          <DashboardStack data={data}/>
        </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
