import clientMapper from "../mapper/clientMapper.js";

class ClientRepository {
    constructor(Client) {
        this.client = Client;
    }

    async getAllClients() {
        const clients = await this.client.findAll();
        return clients.map(clientMapper)
    }

    async getClientById(clientId) {
        const client = await this.client.findByPk(clientId);
        return client ? clientMapper(client) : null;
    }

    async getClientByIdTypeAndNumberType(idType, idNumber) {
        const client = await this.client.findOne({ where: { idType, idNumber } })
        return client ? client(clientMapper) : null;
    }

    async createClient(clientData) {
        const { idType, idNumber} = clientData;
        const existsClient = await this.getClientByIdTypeAndNumberType(idType, idNumber);
        if (existsClient) throw new Error('Client already exists');

        const newClient = await this.client.create(clientData);
        return newClient.toJSON();
    }

    async updateClient(clientId, updatedClientData) {
        const [updatedRows] = await this.client.update(updatedClientData, { where: { id: clientId } });
        return updatedRows > 0;
    }

    async deleteClient(clientId) {
        const deleteRows = await this.client.destroy({ where: { id: clientId } });
        return deleteRows > 0;
    }

}

export default ClientRepository;