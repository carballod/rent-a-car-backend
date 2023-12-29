const Client = require('../models/client');
const clientMapper = require('../mapper/clientMapper');

class ClientRepository {

    async getAllClients() {
        const clients = await Client.findAll();
        return clients.map(clientMapper)
    }

    async getClientById(clientId) {
        const client = await Client.findByPk(clientId);
        return client ? clientMapper(client) : null;
    }

    async getClientByIdTypeAndNumberType(idType, idNumber) {
        const client = await Client.findOne({ where: { idType, idNumber } })
        return client ? client(clientMapper) : null;
    }

    async createClient(clientData) {
        const { idType, idNumber} = clientData;
        const existsClient = await this.getClientByIdTypeAndNumberType(idType, idNumber);
        if (existsClient) throw new Error('Client already exists');

        const newClient = await Client.create(clientData);
        return newClient.toJSON();
    }

    async updateClient(clientId, updatedClientData) {
        const [updatedRows] = await Client.update(updatedClientData, { where: { id: clientId } });
        return updatedRows > 0;
    }

    async deleteClient(clientId) {
        const deleteRows = await Client.destroy({ where: { id: clientId } });
        return deleteRows > 0;
    }

}

module.exports = ClientRepository;