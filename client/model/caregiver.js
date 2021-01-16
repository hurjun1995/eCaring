export default class Caregiver {
  /**
   * @param {string} userUID: UID of the user
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} workPlace 
   * @param {string} education 
   */
  constructor(userUID, firstName, lastName, workPlace, education, email, patientUID="") { //TODO: fix optional parameters
    this.userUID = userUID
    this.firstName = firstName
    this.lastName = lastName
    this.workPlace = workPlace
    this.education = education
    this.email = email
    if (patientUID) this.patientUID = patientUID
  }

  update(firstName="", lastName="", workPlace="", education="") { //TODO: fix optional parameters
    if (firstName !== "") this.firstName = firstName
    if (lastName !== "") this.lastName = lastName
    if (workPlace !== "") this.workPlace = workPlace
    if (education !== "") this.education = education
  }

  registerPatient(patientUID) {
    this.patientUID = patientUID
  }

  toString() {
    return `${this.firstName} ${this.lastName} at ${this.workPlace} is from ${this.education}`
  }
}