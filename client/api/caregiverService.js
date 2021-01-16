import firebase from './firebase'
import Caregiver from '../model/caregiver'
import { CAREGIVER_COLLECTION } from './constants'

class CaregiverService {
  /**
   * Try create a Caregiver with current user's UID in DB.
   * On success, construct and return Caregiver object.
   * All parameters are required.
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} workPlace 
   * @param {string} education 
   */
  static create(firstName, lastName, workPlace, education) {
    const userUID = firebase.auth().currentUser.uid
    const caregiverRef = firebase.firestore().collection(CAREGIVER_COLLECTION).doc(userUID)
    return caregiverRef.get()
      .then(docSnapShot => {
        if (docSnapShot.exists) {
          throw Error("Caregiver profile already exists.")
        } else {
          const email = firebase.auth().currentUser.email
          caregiverRef.set({firstName, lastName, workPlace, education, email})
          return new Caregiver(userUID, firstName, lastName, workPlace, education, email)
        }
      })
  }

  /**
   * Try update Caregiver's fields to given values in DB.
   * On success, also update given Caregiver object.
   * TODO: fix optional parameter.
   * @param {Caregiver} caregiver 
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} workPlace 
   * @param {string} education 
   */
  static async update(caregiver, firstName="", lastName="", workPlace="", education="") {
    const caregiverRef = await this.getExistingCaregiverRef()

    const updateFields = {
      ...firstName !== "" && {firstName},
      ...lastName !== "" && {lastName},
      ...workPlace !== "" && {workPlace},
      ...education !== "" && {education},
    }
    caregiverRef.update(updateFields)

    caregiver.update(firstName, lastName, workPlace, education)
    return caregiver
  }

  /**
   * Try get Caregiver with current user's UID from DB.
   * On success, construct and return Caregiver object.
   */
  static async get() {
    const docSnapshot = await this.getExistingCaregiverDocSnapshot()
    const data = docSnapshot.data()
    return new Caregiver(firebase.auth().currentUser.uid, data['firstName'], data['lastName'],
                         data['workPlace'], data['education'], data['email'], data["patientUID"])
  }

  /**
   * Register the patient to caregiver
   * @param {Object} caregiver Caregiver object to update
   * @param {string} patientUID New patient UID
   */
  static async registerPatient(caregiver, patientUID) {
    const caregiverRef = await this.getExistingCaregiverRef()
    await caregiverRef.update({patientUID})
    caregiver.registerPatient(patientUID)
    return caregiver
  }

  /**
   * Return ref to caregiver document with current user's UID if it exists.
   * Throw error otherwise.
   */
  static async getExistingCaregiverRef() {
    const caregiverUID = firebase.auth().currentUser.uid
    const caregiverRef = firebase.firestore().collection(CAREGIVER_COLLECTION).doc(caregiverUID)
    const docSnapshot = await caregiverRef.get()

    if (!docSnapshot.exists) {
      throw Error(`Caregiver with UID ${caregiverUID} does not exists.`)
    }
    return caregiverRef
  }

  static async getExistingCaregiverDocSnapshot() {
    const caregiverRef = await this.getExistingCaregiverRef()
    return await caregiverRef.get()
  }
}

export default CaregiverService