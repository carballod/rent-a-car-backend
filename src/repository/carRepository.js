// carRepository.js
const fs = require('fs');
const path = require('path');
const Car = require('../models/car');
const mapJsonToCar = require('../mapper/carMapper');

const DATA_CARS_JSON = path.join(__dirname, '../../data/cars.json');

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
            // si no existe el archivo, crea un array vacío
        }
    }

    // guardar los datos en el archivo JSON
    saveData() {
        const data = JSON.stringify(this.cars, null, 2);
        fs.writeFileSync(DATA_CARS_JSON, data, 'utf8');
        // convierte el array de objetos en un string y lo guarda en el archivo JSON
    }

    // obtiene todos los autos
    getAllCars() {
        return this.cars.map(mapJsonToCar);
    }

    // obtiene un auto por su id
    getCarById(carId) {
        carId = parseInt(carId);
        const carData = this.cars.find(car => car.id == carId);
        return carData ? mapJsonToCar(carData) : null;
        // si existe el auto, lo mapea y lo devuelve, sino devuelve null
    }

    // crea un auto
    createCar(carData) {
        
        const newCar = new Car(
            carData.id,
            carData.brand,
            carData.model,
            carData.year,
            carData.mileage,
            carData.color,
            carData.air_conditioning,
            carData.passengers,
            carData.transmission
        );

        this.cars.push(newCar);
        this.saveData();
        return newCar;
    }

    // actualiza un auto
    updateCar(carId, updatedCarData) {
        carId = parseInt(carId);
        const index = this.cars.findIndex(car => car.id === carId);
        // busca el indice del auto a actualizar, lo actualiza y guarda los datos
        if (index !== -1) {
            this.cars[index] = updatedCarData;
            this.saveData();
            return true;
        }
        // si no existe el auto, devuelve false
        return false;
    }

    // elimina un auto
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
