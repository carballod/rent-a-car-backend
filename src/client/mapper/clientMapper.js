const Client = require("../models/client");

function clientMapper(clientData) {

  return new Client({
    idType: clientData.idType,
    idNumber: clientData.idNumber,
    firstName: clientData.firstName,
    lastName: clientData.lastName,
    nationality: clientData.nationality,
    address: clientData.address,
    phoneNumber: clientData.phoneNumber,
    email: clientData.email,
    birthDate: clientData.birthDate,
  });
  
}

module.exports = clientMapper;
