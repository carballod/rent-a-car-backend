const Client = require('../models/client');

function MapperJsonToClient(clientDataJson) {

    const mappedClient = new Client(
        clientDataJson.id,
        clientDataJson.firstName,
        clientDataJson.lastName,
        clientDataJson.idType,
        clientDataJson.idNumber,
        clientDataJson.nationality,
        clientDataJson.address,
        clientDataJson.phoneNumber,
        clientDataJson.email,
        clientDataJson.birthDate
    )

    return mappedClient;
}

module.exports = MapperJsonToClient;