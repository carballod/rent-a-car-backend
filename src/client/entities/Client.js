export default class Client {

  constructor({ id, idType, idNumber, firstName, lastName, nationality, address, phoneNumber, email, birthDate, }) {
    this.id = id;
    this.idType = idType;
    this.idNumber = idNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.birthDate = birthDate;
  }
  
}
