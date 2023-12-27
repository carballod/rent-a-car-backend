
class CarService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }

    async getAllCars() {
        return await this.carRepository.getAllCars();
    }

    async getCarById(carId) {
        return await this.carRepository.getCarById(carId);
    }

    async createCar(carData) {
        return await this.carRepository.createCar(carData);
    }

    async updateCar(carId, updatedCarData) {
        const success = await this.carRepository.updateCar(carId, updatedCarData);
        return success;
    }

    async deleteCar(carId) {
        const success = await this.carRepository.deleteCar(carId);
        return success;
    }
}

module.exports = CarService;
