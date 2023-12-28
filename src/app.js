const express = require("express");
const sequelize = require("./config/db");
const Car = require("./car/models/car");
const CarRepository = require("./car/repository/carRepository");
const CarService = require("./car/service/carService");
const CarController = require("./car/controllers/carController");

const app = express();
app.use(express.json());

const carRepository = new CarRepository(Car);
const carService = new CarService(carRepository);
const carController = new CarController(carService);
carController.configureRoutes(app);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("The table for the Car model was just (re)created!");

    Car.create({
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      mileage: 5000,
      color: "Blue",
      air_conditioning: true,
      passengers: 5,
      transmission: "Automatic",
    })
      .then((newCar) => {
        console.log("Car:", newCar.toJSON());
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listen in http://localhost:${PORT}`);
});
