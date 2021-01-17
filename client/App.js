import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DashboardStack } from "./navigation/DashboardStack";
import { NavigationContainer } from '@react-navigation/native';
import {LogStack} from './routes/LogStack'

export default function App() {
    const data = [
        {
            key: new Date(2021, 0, 17, 10, 33, 30, 0),
            value: {
                hydration: 1.5,
                foodIntake: ["Breakfast","Lunch", "Snack"],
                vitals: "Stable",
                medicine: [
                    {name:"Insulin", dosage:400}
                ],
                mentalHealth: 5,
                painLevel: 1,
                notes: "Jane says she has been sleeping well."
            }},
        {
            key: new Date(2021, 0, 16, 10, 33, 30, 0),
            value: {
                hydration: 2,
                foodIntake: ["Breakfast","Lunch", "Dinner"],
                vitals: "Stable",
                medicine: [
                    {name:"Insulin", dosage:400},
                    {name:"Omega-3", dosage:250}
                ],
                mentalHealth: 4,
                painLevel: 1,
                notes: "Jane went for a walk today."
        }},
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
        {
            key: new Date(2021, 0, 13, 10, 33, 30, 0),
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
                mentalHealth: 2,
                painLevel: 4,
                notes: "Jane has been feeling down. Family should give her a call."
            }},
        {
            key: new Date(2021, 0, 12, 10, 33, 30, 0),
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
                mentalHealth: 2,
                painLevel: 4,
                notes: "Jane has been feeling down. Family should give her a call."
            }},
    ];

  return (
    <View style={styles.container}>
        <NavigationContainer>
          <DashboardStack data={data}/>
        </NavigationContainer>
        {/*<NavigationContainer>*/}
        {/*    <LogStack/>*/}
        {/*</NavigationContainer>*/}
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
