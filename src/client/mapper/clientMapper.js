// const Client = require("../models/client");
import Client from "../models/client.js";

function clientMapper(clientData) {

  return new Client({
    id: clientData.id,
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

export default clientMapper;
