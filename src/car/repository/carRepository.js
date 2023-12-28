const Car = require("../models/car");
const carMapper = require("../mapper/carMapper");

class CarRepository {

  async getAllCars() {
    const cars = await Car.findAll();
    return cars.map(carMapper);
  }

  async getCarById(carId) {
    const car = await Car.findByPk(carId);
    return car ? carMapper(car) : null;
  }

  async createCar(carData) {
    const newCar = await Car.create(carData);
    return newCar.toJSON();
  }

  async updateCar(carId, updatedCarData) {
    const [updatedRows] = await Car.update(updatedCarData, { where: { id: carId } });
    return updatedRows > 0;
  }

  async deleteCar(carId) {
    const deletedRows = await Car.destroy({ where: { id: carId } });
    return deletedRows > 0;
  }
}

module.exports = CarRepository;
