import Car from "./models/car.js";
import CarRepository from "./repository/carRepository.js";
import CarService from "./service/carService.js";
import CarController from "./controllers/carController.js";

function initCarModule(app, diContainer) {
  const carController = diContainer.get("CarController");

  carController.configureRoutes(app);
}

export {
  initCarModule,
  Car,
  CarRepository,
  CarService,
  CarController,
};
