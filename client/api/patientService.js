import firebase from './firebase'
import Patient from '../model/patient'
import CaregiverService from './caregiverService'
import { PATIENT_COLLECTION, CAREGIVER_COLLECTION, PATIENT_TOKEN_COLLECTION,
         ERROR_INVALID_PATIENT_TOKEN } from './constants'


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
   * Try get Patient registered to given patient's UID from DB.
   * On success, construct and return a Patient object.
   * @param {Object} caregiver Caregiver object
   */
  static get(patientUID) {
    const patientRef = firebase.firestore().collection(PATIENT_COLLECTION).doc(patientUID)
    return patientRef.get()
      .then(docSnapshot => {
        if (!docSnapshot.exists) {
          throw Error(`Patient with UID ${patientUID} does not exists.`)
        }

        const data = docSnapshot.data()
        return new Patient(patientUID, data['firstName'], data['lastName'], data['caregiverUID'])
      })
  }

  /**
   * Try get a 4 digits token for patient from DB.
   * If not present, generate one.
   * @param {Object} patient 
   */
  static async generateToken(patient) {
    patientTokenRef = firebase.firestore().collection(PATIENT_TOKEN_COLLECTION)

    // check if a token for given patient exists
    const token = await patientTokenRef.where('patientUID', '==', patient.UID).limit(1).get()
    if (!token.empty) {
      let selectedTokenDigits = 0
      token.forEach(selectedToken => {
        console.log(selectedToken.id)
        console.log(selectedToken.data())
        const patientTokenDocRef = patientTokenRef.doc(selectedToken.id)
        patientTokenDocRef.set({"patientUID": patient.UID, "lastUsedAt": Date.now()})
        selectedTokenDigits = parseInt(selectedToken.id)
      })
      return selectedTokenDigits
    }

    // if not, create one
    while (true) {
      const tokenCandidate = this.generateRandom4DigitsTokenCandidate().toString()
      const patientTokenDocRef = patientTokenRef.doc(tokenCandidate)
      const docSnapshot = await patientTokenDocRef.get()
      if (docSnapshot.exists) {
          // generate a new token candidate
          continue;
      } else {
        patientTokenDocRef.set({"patientUID": patient.UID, "lastUsedAt": Date.now()})
        return parseInt(tokenCandidate)
      }
    }
  }

  static generateRandom4DigitsTokenCandidate() {
    let candidate = 0
    while (candidate < 1000) {
      candidate = Math.floor(Math.random() * 10000)
    }

    return candidate
  }

  /**
   * Given 4-digits token, check if it's valid
   * If valid, return the associated patient's UID
   * throw ERROR_INVALID_PATIENT_TOKEN otherwise.
   * @param {int} token 
   */
  static async checkToken(token) {
    const patientTokenRef = firebase.firestore().collection(PATIENT_TOKEN_COLLECTION).doc(token.toString())
    const docSnapshot = await patientTokenRef.get()
    if (!docSnapshot.exists) {
      const error = Error("Given token is not valid.")
      error.code = ERROR_INVALID_PATIENT_TOKEN
      throw error
    } else {
      const token = docSnapshot.data()
      return token['patientUID']
    }
  }
}

export default PatientService