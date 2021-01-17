export default class Patient {
  constructor(UID, firstName, lastName, caregiverUID) {
    this.UID = UID
    this.firstName = firstName
    this.lastName = lastName
    this.caregiverUID = caregiverUID
  }

  toString() {
    return `${this.firstName} ${this.lastName} under Caregiver with UID ${this.caregiverUID}`
  }
}