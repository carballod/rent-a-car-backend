const Car = require("../models/car");

function carMapper(carData) {

  return new Car({
    id: carData.id,
    brand: carData.brand,
    model: carData.model,
    year: carData.year,
    mileage: carData.mileage,
    color: carData.color,
    air_conditioning: carData.air_conditioning,
    passengers: carData.passengers,
    transmission: carData.transmission,
  });

}

module.exports = carMapper;
