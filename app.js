const CarRepository = require('./src/repository/carRepository');


const carRepository = new CarRepository();

// console.log('Todos los autos:', carRepository.getAllCars());

console.log('Auto con id 1:', carRepository.getCarById(1));

const newCarData = {
    id: 11,
    brand: 'Ferrari',
    model: 'F8 Tributo',
    year: 2021,
    mileage: 0,
    color: 'Red',
    air_conditioning: true,
    passengers: 2,
    transmission: 'Automatic',
};

const createdCar = carRepository.createCar(newCarData);
console.log('Auto creado:', createdCar);


const updatedCarData = {
    id: 11,
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    mileage: 0,
    color: 'Red',
    air_conditioning: true,
    passengers: 2,
    transmission: 'Automatic',
};

const isUpdated = carRepository.updateCar(11, updatedCarData);
console.log('Actualizado?:', isUpdated);

// console.log('Todos los autos después de la actualización:', carRepository.getAllCars());

const isDeleted = carRepository.deleteCar(11);
console.log('Eliminado?:', isDeleted);

// console.log('Todos los autos después de la eliminación:', carRepository.getAllCars());