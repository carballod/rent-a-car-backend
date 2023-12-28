const Client = require("./models/client");
const ClientRepository = require("./repository/clientRepository");
const ClientService = require("./service/clientService");
const ClientController = require("./controllers/clientController");

function initClientModule(app) {
  const clientRepository = new ClientRepository(Client);
  const clientService = new ClientService(clientRepository);
  const clientController = new ClientController(clientService);
  clientController.configureRoutes(app);
}

module.exports = initClientModule;
