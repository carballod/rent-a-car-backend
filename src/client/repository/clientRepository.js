const fs = require('fs');
const path = require('path');
const mapJsonToClient = require('../mapper/clientMapper');

const DATA_CLIENTS_JSON = path.join(__dirname, '../../../data/clients.json');

class ClientRepository {
    constructor() {
        this.loadDataClient();
    }

    loadDataClient() {
        try {
            const data = fs.readFileSync(DATA_CLIENTS_JSON, 'utf8');
            this.clients = JSON.parse(data)
        } catch (error) {
            this.clients = [];
        }
    }

    saveDataClient() {
        const data = JSON.stringify(this.clients, null, 2);
        fs.writeFileSync(DATA_CLIENTS_JSON, data, 'utf8');
    }

    getAllClients() {
        return this.clients.map(mapJsonToClient);
    }

    getClientById(clientId) {
        clientId = parseInt(clientId);
        return this.clients.find(client => client.id === clientId);
    }

    createClient(clientData) {
        const newClient = mapJsonToClient(clientData);
        this.clients.push(newClient);
        this.saveDataClient();
        return newClient;
    }

    updateClient(clientId, updatedClientData) {
        clientId = parseInt(clientId);
        const index = this.clients.findIndex(client => client.id === clientId);
        if (index !== -1) {
            this.clients[index] = { ...this.clients[index], ...updatedClientData };
            this.saveDataClient();
            return true;
        }
        return false;
    }

    deleteClient(clientId) {
        const index = this.clients.findIndex(client => client.id === clientId);
        if (index !== -1) {
            this.clients.splice(index, 1);
            this.saveDataClient();
            return true;
        }
        return false;
    }

}

module.exports = ClientRepository;