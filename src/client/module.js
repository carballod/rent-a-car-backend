const Client = require("./models/client");
const ClientRepository = require("./repository/clientRepository");
const ClientService = require("./service/clientService");
const ClientController = require("./controllers/clientController");
const Reservation = require("../reservation/models/reservation");

function initClientModule(app) {
  const clientRepository = new ClientRepository(Client);
  const clientService = new ClientService(clientRepository);
  const clientController = new ClientController(clientService);

  Client.hasOne(Reservation, { foreignKey: "clientId" });
  clientController.configureRoutes(app);
}

module.exports = initClientModule;
