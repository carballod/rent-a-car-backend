import { DIContainer } from "rsdi";
import sequelize from "./db.js";
import { Car, CarRepository, CarService, CarController } from "../car/module.js";
import { Client, ClientRepository, ClientService, ClientController } from "../client/module.js";
import { Reservation, ReservationRepository, ReservationService, ReservationController } from "../reservation/module.js";

function configureDI() {
  const container = new DIContainer();

  container
    .add("Sequelize", () => sequelize)
    .add("Car", ({ Sequelize }) => Car.setup((Sequelize)))
    .add("CarRepository", ({ Car }) => new CarRepository((Car)))
    .add("CarService", ({ CarRepository }) => new CarService((CarRepository)))
    .add("CarController", ({ CarService }) => new CarController((CarService)))

    .add("Client", ({ Sequelize }) => Client.setup((Sequelize)))
    .add("ClientRepository", ({ Client }) => new ClientRepository((Client)))
    .add("ClientService", ({ ClientRepository }) => new ClientService((ClientRepository)))
    .add("ClientController", ({ ClientService }) => new ClientController((ClientService)))

    .add("Reservation", ({ Sequelize }) => Reservation.setup((Sequelize)))
    .add("ReservationRepository", ({ Reservation }) => new ReservationRepository((Reservation)))
    .add("ReservationService", ({ ReservationRepository }) => new ReservationService((ReservationRepository)))
    .add("ReservationController", ({ ReservationService }) => new ReservationController((ReservationService)));

  return container;
}

export default configureDI;
