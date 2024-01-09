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

    async index(req, res) {
        try {
            const allClients = await this.clientService.getAllClients();
            res.json(allClients);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async view(req, res) {
        const clientId = parseInt(req.params.id);
        try {
            const client = await this.clientService.getClientById(clientId);
            if (client) {
                res.json(client);
            } else {
                res.status(404).json({ error: 'Client not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async create(req, res) {
        const clientData = req.body;
        try {
            const createdClient = await this.clientService.createClient(clientData);
            res.status(201).json(createdClient);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async update(req, res) {
        const clientId = parseInt(req.params.id);
        const updatedClientData = req.body;
        try {
            const success = await this.clientService.updateClient(clientId, updatedClientData);
            if (success) {
                res.json({ message: 'Client updated successfully' });
            } else {
                res.status(404).json({ error: 'Client not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async delete(req, res) {
        const clientId = parseInt(req.params.id);
        try {
            const success = await this.clientService.deleteClient(clientId);
            if (success) {
                res.json({ message: 'Client deleted successfully' });
            } else {
                res.status(404).json({ error: 'Client not found or could not be deleted' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

}

export default ClientController;