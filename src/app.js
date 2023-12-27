const express = require("express");
const sequelize = require("./config/db");
const carModel = require("./car/models/car");

const CarRepository = require("./car/repository/carRepository");
const CarService = require("./car/service/carService");
const CarController = require("./car/controllers/carController");

const Car = carModel(sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized successfully");
    crudOperations();
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

const app = express();
app.use(express.json());

const carRepository = new CarRepository(Car);
const carService = new CarService(carRepository);
const carController = new CarController(carService);
carController.configureRoutes(app);


async function crudOperations() {
  try {

    const newCar = {
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      mileage: 5000,
      color: "Silver",
      air_conditioning: true,
      passengers: 5,
      transmission: "Automatic",
    };

    const createdCar = await Car.create(newCar);
    console.log("New car:", createdCar);

    const allCars = await Car.findAll();
    console.log("All cars:", allCars.map(car => car.toJSON()));


  } catch (error) {
    console.error("Error performing CRUD operations:", error);
  }
}

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listen in http://localhost:${PORT}`);
});
