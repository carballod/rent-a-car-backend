
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

    // doble request
    async updateCar(carId, updatedCarData) {
        return await this.carRepository.updateCar(carId, updatedCarData);
    }

    async deleteCar(carId) {
        return await this.carRepository.deleteCar(carId);
    }
}

export default CarService;
