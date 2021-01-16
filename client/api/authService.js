import firebase from './firebase'

const ERROR_AUTH_EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use'
const ERROR_AUTH_INVALID_EMAIL = 'auth/invalid-email'
const ERROR_AUTH_OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed'
const ERROR_AUTH_WEAK_PASSWORD = 'auth/weak-password'

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
  createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        const errorCode = error.errorCode
        if (errorCode === ERROR_AUTH_OPERATION_NOT_ALLOWED) {
          return 'Internal error. Please try again.'
        } else {
          return error.message //TODO: check the error message
        }
      })
  }

  /**
   * Try sign in with given email and password.
   * On success, return Promise<UserCredential>
   * On failure, return error message
   * @param email user's email
   * @param password user's password
   */
  signIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        return error.message
      })
  }

  signOut() {
    firebase.auth().signOut()
  }
}

export default AuthService