import firebase from './firebase'
import CaregiverService from './caregiverService'
import GuardianService from './guardianService'

const ERROR_AUTH_EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use'
const ERROR_AUTH_INVALID_EMAIL = 'auth/invalid-email'
const ERROR_AUTH_OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed'
const ERROR_AUTH_WEAK_PASSWORD = 'auth/weak-password'
const ERROR_AUTH_USER_NOT_FOUND = 'auth/user-not-found'
const ERROR_AUTH_WRONG_PASSWORD = 'auth/wrong-password'

class AuthService {
  /**
   * Try create a user.
   * On success, return Promise<UserCredential>
   * On failure, return error message
   * See https://firebase.google.com/docs/reference/js/firebase.auth#usercredential for UserCredential
   * and https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createuserwithemailandpassword for error
   * @param email user's email
   * @param password user's password
   */
  static createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        const errorCode = error.code
        if (errorCode === ERROR_AUTH_OPERATION_NOT_ALLOWED) {
          throw Error('Internal error. Please try again.')
        } else {
          throw error
        }
      })
  }

  /**
   * Try sign in with given email and password.
   * On success, return either Promise<Caregiver> or Promise<Guardian>. You can check its type using "instanceof".
   * On failure, return error.
   * If the user exists but profile is not created, error with either ERROR_CAREGIVER_PROFILE_DOES_NOT_EXIST
   * or ERROR_GUARDIAN_PROFILE_DOES_NOT_EXIST as code will be raised.
   * @param email user's email
   * @param password user's password
   */
  static async signIn(email, password) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)

      const caregiver = await CaregiverService.get()
      if (caregiver) return caregiver

      const guardian = await GuardianService.get()
      if (guardian) return guardian
    } catch (error) {
      const errorCode = error.code
      if (errorCode === ERROR_AUTH_USER_NOT_FOUND
          || errorCode === ERROR_AUTH_WRONG_PASSWORD) {
        throw Error('Invalid email and/or password.')
      } else {
        throw error
      }
    }
  }

  static signOut() {
    firebase.auth().signOut()
  }
}

export default AuthService