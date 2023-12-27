const Car = require('../models/car');

function carMapper(carData) {
    
    const mappedCar = new Car(
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

    return mappedCar;
}

module.exports = carMapper;
