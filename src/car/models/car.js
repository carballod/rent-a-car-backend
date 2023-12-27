const { DataTypes } = require('sequelize');


function carModel(sequelize) {
  const Car = sequelize.define('Car', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    air_conditioning: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    passengers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'cars'
  });

  return Car;
}

module.exports = carModel;