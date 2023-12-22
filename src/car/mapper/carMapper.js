const Car = require('../models/car');

function MapperJsonToCar(carDataJson) {
    
    const mappedCar = new Car(
        carDataJson.id,
        carDataJson.brand,
        carDataJson.model,
        carDataJson.year,
        carDataJson.mileage,
        carDataJson.color,
        carDataJson.air_conditioning,
        carDataJson.passengers,
        carDataJson.transmission
    );

    return mappedCar;
}

module.exports = MapperJsonToCar;
