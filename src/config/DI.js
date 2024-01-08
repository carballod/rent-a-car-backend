import { DIContainer } from "rsdi";
import sequelize from "./db.js";
import {
  Car,
  CarRepository,
  CarService,
  CarController,
} from "../car/module.js";

function configureDI() {
  const container = new DIContainer();

  container
    .add("Sequelize", sequelize)
    .add("Car", (container) => Car.setup(container.get("Sequelize")))
    .add("CarRepository", (container) => new CarRepository(container.get("Car")))
    .add("CarService", (container) => new CarService(container.get("CarRepository")))
    .add("CarController", (container) => new CarController(container.get("CarService")));

  return container;
}

export default configureDI;
