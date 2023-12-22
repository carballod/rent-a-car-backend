class Client {
    constructor(id, firstName, lastName, idType, idNumber, nationality, address, phoneNumber, email, birthDate) {
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.idType = idType
        this.idNumber = idNumber
        this.nationality = nationality
        this.address = address
        this.phoneNumber = phoneNumber
        this.email = email
        this.birthDate = birthDate
    }
}

module.exports = Client;