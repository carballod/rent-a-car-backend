class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }

    configureRoutes(app) {
        const ROUTE = '/clients';

        app.get(`${ROUTE}`, this.index.bind(this));
        app.get(`${ROUTE}/view/:id`, this.view.bind(this));
        app.post(`${ROUTE}/create`, this.create.bind(this));
        app.put(`${ROUTE}/update/:id`, this.update.bind(this));
        app.delete(`${ROUTE}/delete/:id`, this.delete.bind(this));
    }

    index(req, res) {
        const allClients = this.clientService.getAllClients();
        res.json(allClients);
    }

    view(req, res) {
        const clientIdNumber = parseInt(req.params.id);
        const client = this.clientService.getClientById(clientIdNumber);
        if (client) {
            res.json(client);
        } else {
            res.status(404).json({ error: 'Client not found' });
        }
    }

    create(req, res) {
        const clientData = req.body;
        const createdClient = this.clientService.createClient(clientData);
        res.status(201).json(createdClient);
    }

    update(req, res) {
        const clientId = parseInt(req.params.id);
        const updatedClientData = req.body;
        const success = this.clientService.updateClient(clientId, updatedClientData);
        if (success) {
            res.json({ message: 'Client updated successfully' });
        } else {
            res.status(404).json({ error: 'Client not found' });
        }
    }

    delete(req, res) {
        const clientId = parseInt(req.params.id);
        const success = this.clientService.deleteClient(clientId);
        if (success) {
            res.json({ message: 'Client deleted successfully' });
        } else {
            res.status(404).json({ error: 'Client not found or could not be deleted' });
        }
    }

}

module.exports = ClientController;