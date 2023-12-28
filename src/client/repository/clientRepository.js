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

    async createClient(clientData) {
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