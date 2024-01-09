import fromModelToEntity from "../mapper/carMapper.js";

class CarRepository {
  constructor(Car) {
    this.car = Car;
  }

  async getAllCars() {
    const cars = await this.car.findAll();
    return cars.map(fromModelToEntity);
  }

  async getCarById(carId) {
    const car = await this.car.findByPk(carId);
    return car ? fromModelToEntity(car) : null;
  }

  async createCar(carData) {
    const newCar = await this.car.create(carData);
    return newCar.toJSON();
  }

  async updateCar(carId, updatedCarData) {
    const [updatedRows] = await this.car.update(updatedCarData, { where: { id: carId } });
    return updatedRows > 0;
  }

  async deleteCar(carId) {
    const deletedRows = await this.car.destroy({ where: { id: carId } });
    return deletedRows > 0;
  }
}

export default CarRepository;
