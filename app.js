const express = require('express');

const CarRepository = require('./src/repository/carRepository');
const CarService = require('./src/service/carService')
const CarController =  require('./src/controllers/carController')

const app = express();
app.use(express.json());

const carRepository = new CarRepository();
const carService = new CarService(carRepository);
const carController = new CarController(carService);

carController.configureRoutes(app);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listen in http://localhost:${PORT}`);
});
