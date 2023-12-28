const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../data/development.db",
});


module.exports = sequelize;
