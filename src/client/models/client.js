// const { DataTypes } = require("sequelize");
import { DataTypes } from "sequelize";
import sequelize from  "../../config/db.js";


const Client = sequelize.define('Client', {
  id: {
    type: DataTypes,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
    tableName: 'clients'
});

export default Client;
