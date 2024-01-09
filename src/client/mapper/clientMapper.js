import Client from "../entities/Client.js";

function fromModelToEntity({ id, idType, idNumber, firstName, lastName, nationality, address, phoneNumber, email, birthDate, }) {
  return new Client({
    id,
    idType, 
    idNumber,
    firstName,
    lastName,
    nationality,
    address,
    phoneNumber,
    email,
    birthDate,
  });
}

export default fromModelToEntity;
