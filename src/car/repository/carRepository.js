const fs = require('fs');
const path = require('path');
const mapJsonToCar = require('../mapper/carMapper');

const DATA_CARS_JSON = path.join(__dirname, '../../../data/cars.json');

class CarRepository {
    // cargar todos los datos al instanciar la clase 
    constructor() {
        this.loadData();
    }

    // cargar los datos del archivo JSON
    loadData() {
        try {
            const data = fs.readFileSync(DATA_CARS_JSON, 'utf8');
            this.cars = JSON.parse(data);
            // parsea el contenido del archivo JSON y lo guarda en un array de objetos
        } catch (error) {
            this.cars = [];
        }
    }

    // guardar los datos en el archivo JSON
    saveData() {
        const data = JSON.stringify(this.cars, null, 2);
        fs.writeFileSync(DATA_CARS_JSON, data, 'utf8');
        // convierte el array de objetos en un string y lo guarda en el archivo JSON
    }

    getAllCars() {
        return this.cars.map(mapJsonToCar);
    }

    getCarById(carId) {
        carId = parseInt(carId);
        const carData = this.cars.find(car => car.id == carId);
        return carData ? mapJsonToCar(carData) : null;
        // si existe el auto, lo mapea y lo devuelve, sino devuelve null
    }

    createCar(carData) {
        this.cars.push(carData);
        this.saveData();
        return carData;
    }

    updateCar(carId, updatedCarData) {
        carId = parseInt(carId);
        const index = this.cars.findIndex(car => car.id === carId);
        if (index !== -1) {
            // Copiar valores actualizados al objeto existente
            this.cars[index] = { ...this.cars[index], ...updatedCarData };
            this.saveData();
            return true;
        }
        return false;
    }

    deleteCar(carId) {
        const index = this.cars.findIndex(car => car.id === carId);
        if (index !== -1) {
            this.cars.splice(index, 1);
            this.saveData();
            return true;
        }
        return false;
    }
}

module.exports = CarRepository;
