import firebase from './firebase'
import Caregiver from '../model/caregiver'

class CaregiverService {
  /**
   * Try create a Caregiver with current user's UID in DB.
   * On success, construct and return Caregiver object.
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} workPlace 
   * @param {string} education 
   */
  static create(firstName, lastName, workPlace, education) {
    const userUID = firebase.auth().currentUser.uid
    const caregiverRef = firebase.firestore().collection('caregivers').doc(userUID)
    return caregiverRef.get()
      .then(docSnapShot => {
        if (docSnapShot.exists) {
          throw Error("Caregiver profile already exists.")
        } else {
          caregiverRef.set({firstName, lastName, workPlace, education})
          return new Caregiver(userUID, firstName, lastName, workPlace, education)
        }
      })
  }

  /**
   * Try update Caregiver's fields to given values in DB.
   * On success, also update given Caregiver object.
   * @param {Caregiver} caregiver 
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} workPlace 
   * @param {string} education 
   */
  static update(caregiver, firstName="", lastName="", workPlace="", education="") {
    const caregiverRef = firebase.firestore().collection('caregivers').doc(caregiver.userUID)
    return caregiverRef.get()
      .then(docSnapShot => {
        if (!docSnapShot.exists) {
          throw Error("Care giver profile does not exist.")
        } else {
          const updateFields = {
            ...firstName !== "" && {firstName},
            ...lastName !== "" && {lastName},
            ...workPlace !== "" && {workPlace},
            ...education !== "" && {education}
          }
          caregiverRef.update(updateFields)
        }
      })
      .then(() => {
        caregiver.update(firstName, lastName, workPlace, education)
        return caregiver
      })
  }

  /**
   * Try get Caregiver with current user's UID from DB.
   * On success, construct and return Caregiver object.
   */
  static get() {
    const userUID = firebase.auth().currentUser.uid
    const caregiverRef = firebase.firestore().collection('caregivers').doc(userUID)
    return caregiverRef.get()
      .then(docSnapShot => {
        if (!docSnapShot.exists) {
          throw Error(`Caregiver with given ${userUID} does not exists.`)
        } else {
          const data = docSnapShot.data()
          console.log(data)
          return new Caregiver(userUID, data['firstName'], data['lastName'],
                               data['workPlace'], data['education'])
        }
      })
  }
}

export default CaregiverService