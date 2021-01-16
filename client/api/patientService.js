import firebase from './firebase'
import Patient from '../model/patient'
import CaregiverService from './caregiverService'
import { PATIENT_COLLECTION, CAREGIVER_COLLECTION } from './constants'


class PatientService {
  /**
   * Try create a Patient for current user's UID in DB. Current user must be a Caregiver.
   * On success, construct and return a Patient object.
   * All parameters are required.
   * @param {Object} caregiver Caregiver object to update
   * @param {string} firstName first name of the patient
   * @param {string} lastName last name of the patient
   */
  static async createAndRegister(caregiver, firstName, lastName) {
    const caregiverUID = firebase.auth().currentUser.uid
    const caregiverRef = firebase.firestore().collection(CAREGIVER_COLLECTION).doc(caregiverUID)
    
    const docSnapShot = await caregiverRef.get()
    if (!docSnapShot.exists) {
      throw Error("Caregiver profile does not exists.")
    }
    const data = docSnapShot.data()
    if (data['patientUID']) {
      throw Error("Caregiver already registered a patient.")
    }

    // Create patient
    const patientRef = await firebase.firestore().collection(PATIENT_COLLECTION).add({
      firstName,
      lastName,
      caregiverUID
    })

    // Register patient to the current caregiver
    await CaregiverService.registerPatient(caregiver, patientRef.id)
    
    return new Patient(patientRef.id, firstName, lastName, caregiverUID)
  }

  /**
   * Try update Patient's fields to given values in DB.
   * On success, also update given a Patient object.
   * TODO: fix optional parameter.
   * @param {Object} patient Patient object
   * @param {string} firstName new first name of the patient
   * @param {string} lastName new last name of the patient
   */
  static update(patient, firstName="", lastName="") {
    const patientRef = firebase.firestore().collection(PATIENT_COLLECTION).doc(patient.UID)
    return patientRef.get()
      .then(docSnapShot => {
        if (!docSnapShot.exists) {
          throw Error("Patient profile does not exist.")
        } else {
          const updateFields = {
            ...firstName !== "" && {firstName},
            ...lastName !== "" && {lastName},
          }
          patientRef.update(updateFields)
        }
      })
      .then(() => {
        patient.update(firstName, lastName)
        return patient
      })
  }

  /**
   * Try get Patient registered to given caregiver UID from DB.
   * On success, construct and return a Patient object.
   * @param {Object} caregiver Caregiver object
   */
  static get(caregiver) {
    const patientRef = firebase.firestore().collection(PATIENT_COLLECTION).doc(caregiver.patientUID)
    return patientRef.get()
      .then(docSnapshot => {
        if (!docSnapshot.exists) {
          throw Error(`Patient with UID ${caregiver.patientUID} does not exists.`)
        }

        const data = docSnapshot.data()
        return new Patient(caregiver.patientUID, data['firstName'], data['lastName'], data['caregiverUID'])
      })
  }
}

export default PatientService