export default class Guardian {
  constructor(UID, firstName, lastName, email, patientUID) {
    this.UID = UID
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.patientUID = patientUID
  }

  toString() {
    return `${this.firstName} ${this.lastName} is a Guardian of Patient with UID ${this.patientUID}`
  }
}