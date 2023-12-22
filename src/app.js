const express = require('express');

const CarRepository = require('./car/repository/carRepository');
const CarService = require('./car/service/carService')
const CarController =  require('./car/controllers/carController')

const ClientRepository = require('./client/repository/clientRepository');
const ClientService = require('./client/service/clientService');
const ClientController = require('./client/controllers/clientController');

const app = express();
app.use(express.json());

// car
const carRepository = new CarRepository();
const carService = new CarService(carRepository);
const carController = new CarController(carService);
carController.configureRoutes(app);

// client
const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);
clientController.configureRoutes(app);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listen in http://localhost:${PORT}`);
});
