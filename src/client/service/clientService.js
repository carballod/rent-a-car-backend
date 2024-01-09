class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }

    getAllClients() {
        return this.clientRepository.getAllClients();
    }

    getClientById(clientId) {
        return this.clientRepository.getClientById(clientId);
    }

    createClient(clientData) {
        return this.clientRepository.createClient(clientData);
    }

    updateClient(clientId, updatedClientData) {
        return this.clientRepository.updateClient(clientId, updatedClientData);
    }

    deleteClient(clientId) {
        return this.clientRepository.deleteClient(clientId);
    }
}

export default ClientService;
