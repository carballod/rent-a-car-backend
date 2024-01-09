import Client from "./models/client.js";
import ClientRepository from "./repository/clientRepository.js";
import ClientService from "./service/clientService.js";
import ClientController from "./controllers/clientController.js";

function initClientModule(app, diContainer) {
  const clientController = diContainer.get("ClientController");

  clientController.configureRoutes(app);
}

export {
  initClientModule,
  Client,
  ClientRepository,
  ClientService,
  ClientController,
};
