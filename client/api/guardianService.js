import firebase from './firebase'
import Guardian from '../model/guardian'
import { GUARDIAN_COLLECTION, ERROR_GUARDIAN_PROFILE_DOES_NOT_EXIST } from './constants'
import PatientService from './patientService'

class GuardianService {
  /**
   * Try create a Guardian with current user's UID in DB.
   * Guardian must provide valid patient token.
   * On success, construct and return Guardian object.
   * All parameters are required.
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {int} patientToken
   */
  static async create(firstName, lastName, patientToken) {
    const userUID = firebase.auth().currentUser.uid
    const guardianRef = firebase.firestore().collection(GUARDIAN_COLLECTION).doc(userUID)
    
    const docSnapshot = await guardianRef.get()
    if (docSnapshot.exists) {
      throw Error("Guardian profile already exists.")
    }

    // TODO: should we add this guardian to patient's list of guardians?
    const patientUID = await PatientService.checkToken(patientToken)

    const email = firebase.auth().currentUser.email
    guardianRef.set({firstName, lastName, email, patientUID})
    
    // TODO: remove the used guardian token?
    return new Guardian(userUID, firstName, lastName, email, patientUID)
  }

  // TODO: update guardian?

  /**
   * Try get Guardian with current user's UID from DB.
   * On success, construct and return Guardian object.
   */
  static async get() {
    const docSnapshot = await this.getExistingGuardianDocSnapshot()
    return this.createNewGuardian(docSnapshot.data())
  }

  /**
   * Return ref to Guardian document with current user's UID if it exists.
   * Throw error otherwise.
   */
  static async getExistingGuardianRef() {
    const guardianUID = firebase.auth().currentUser.uid
    const guardianRef = firebase.firestore().collection(GUARDIAN_COLLECTION).doc(guardianUID)
    const docSnapshot = await guardianRef.get()

    if (!docSnapshot.exists) {
      const error = Error("Guardian does not exists.")
      error.code = ERROR_GUARDIAN_PROFILE_DOES_NOT_EXIST
      throw error
    }
    return guardianRef
  }

  /**
   * Return ref to Guardian document snapshot with current user's UID if exists.
   * Throw error otherwise.
   */
  static async getExistingGuardianDocSnapshot() {
    const guardianRef = await this.getExistingGuardianRef()
    return await guardianRef.get()
  }

  /**
   * Construct a Guardian object using given data
   * @param {Object} data data returned from firestore query
   */
  static createNewGuardian(data) {
    return new Guardian(firebase.auth().currentUser.uid, data['firstName'], data['lastName'],
                          data['email'], data["patientUID"])
  }
}

export default GuardianService