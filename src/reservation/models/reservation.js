// const { DataTypes } = require("sequelize");
// const sequelize = require("../../config/db");
// const Car = require("../../car/models/car");
// const Client = require("../../client/models/client");

import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";
import Car from "../../car/models/car.js";
import Client from "../../client/models/client.js";


const Reservation = sequelize.define(
  "Reservation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pricePerDay: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finishDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Car,
        key: "id",
      },
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Client,
        key: "id",
      },
    },
  },
  {
    tableName: "reservations",
  }
);


Reservation.belongsTo(Car, { foreignKey: "carId" });
Reservation.belongsTo(Client, { foreignKey: "clientId" });


export default Reservation;
