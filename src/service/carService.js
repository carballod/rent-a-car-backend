
class CarService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }

    getAllCars() {
        return this.carRepository.getAllCars();
    }

    getCarById(carId) {
        return this.carRepository.getCarById(carId);
    }

    createCar(carData) {
        const newCar = this.carRepository.createCar(carData);
        return newCar;
    }

    updateCar(carId, updatedCarData) {
        const success = this.carRepository.updateCar(carId, updatedCarData);
        return success;
    }

    deleteCar(carId) {
        const success = this.carRepository.deleteCar(carId);
        return success;
    }
}

module.exports = CarService;
