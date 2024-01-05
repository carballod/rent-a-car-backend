const Car = require("./models/car");
const CarRepository = require("./repository/carRepository");
const CarService = require("./service/carService");
const CarController = require("./controllers/carController");
const Reservation = require("../reservation/models/reservation");

function initCarModule(app, diContainer) {
  const carController = diContainer.get('CarController');

  Car.hasOne(Reservation, { foreignKey: "carId" });
  carController.configureRoutes(app);
}

module.exports = {
  initCarModule,
  Car,
  CarRepository,
  CarService,
  CarController,
};
