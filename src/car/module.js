const Car = require("./models/car");
const CarRepository = require("./repository/carRepository");
const CarService = require("./service/carService");
const CarController = require("./controllers/carController");
const Reservation = require("../reservation/models/reservation");

function initCarModule(app) {
  const carRepository = new CarRepository(Car);
  const carService = new CarService(carRepository);
  const carController = new CarController(carService);

  Car.hasOne(Reservation, { foreignKey: "carId" });
  carController.configureRoutes(app);
}

module.exports = initCarModule;
