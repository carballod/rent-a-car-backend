import pkg from "sequelize";
const { DataTypes, Model } = pkg;
import Car from "../../car/models/car.js";
import Client from "../../client/models/client.js";

export default class Reservation extends Model {
  static setup(sequelizeInstance) {
    Reservation.init(
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
        sequelize: sequelizeInstance,
        modelName: "Reservation"
      }
    );

    Car.hasMany(Reservation, { foreignKey: "carId", constraints: false });
    Reservation.belongsTo(Car, { foreignKey: "carId", constraints: false });
    Client.hasMany(Reservation, { foreignKey: "clientId", constraints: false });
    Reservation.belongsTo(Client, { foreignKey: "clientId", constraints: false });
    
    return Reservation;
  }
}
