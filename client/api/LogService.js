import firebase from './firebase'
import Patient from '../model/patient'
import CaregiverService from './caregiverService'
import { PATIENT_COLLECTION } from './constants'

export const FoodIntake = Object.freeze({
  Breakfast: "Breakfast",
  Lunch: "Lunch",
  Dinner: "Dinner",
  Snack: "Snack"
})

export const Vital = Object.freeze({
  Stable: 'Stable',
  Unstable: 'Unstable',
  Unassessed: 'Unassessed'
})

export class LogService {
  static async create(patient, hydration, foodIntakes, vitals, medicines, mentalHealth, painLevel, notes = "") {
    const caregiverUID = firebase.auth().currentUser.uid
    const patientRef = firebase.firestore().collection(PATIENT_COLLECTION).doc(patient.UID)

    const patientSnapShot = await patientRef.get()
    if (!patientSnapShot.exists) {
      throw Error("Patient does not exist.")
    }

    await patientRef.update({
      logs: firebase.firestore.FieldValue.arrayUnion({
        createdAt: Date.now(),
        hydration,
        foodIntakes,
        vitals,
        medicines,
        mentalHealth,
        painLevel,
        notes
      })
    })
  }

  static async get(patient) {
    const patientRef = firebase.firestore().collection(PATIENT_COLLECTION).doc(patient.UID)

    const patientSnapShot = await patientRef.get()
    if (!patientSnapShot.exists) {
      throw Error("Patient does not exist.")
    }

    return patientSnapShot.data()['logs']
  }

  static async get7Days(patient) {
    logs = await this.get(patient)

    const logs7Days = []
    const date7DaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000)
    logs.forEach(log => {
      if (log.createdAt >= date7DaysAgo) {
        logs7Days.push(log)
      }
    })
    logs.sort((a, b) => a.createdAt - b.createdAt)
    
    return logs
  }
}