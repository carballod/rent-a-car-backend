const Car = require("./models/car");
const CarRepository = require("./repository/carRepository");
const CarService = require("./service/carService");
const CarController = require("./controllers/carController");

function initCarModule(app) {
  const carRepository = new CarRepository(Car);
  const carService = new CarService(carRepository);
  const carController = new CarController(carService);
  carController.configureRoutes(app);
}

module.exports = initCarModule;
