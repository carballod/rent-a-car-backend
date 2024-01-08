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
    .add("Car", Car)
    .add("CarRepository", CarRepository)
    .add("CarService", CarService)
    .add("CarController", CarController);

  return container;
}

export default configureDI;
