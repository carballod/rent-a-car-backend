import Car from "../entities/Car.js";

function fromModelToEntity({ id, brand, model, year, mileage, color, air_conditioning, passengers, transmission }) {
  return new Car({
    id,
    brand,
    model,
    year,
    mileage,
    color,
    air_conditioning,
    passengers,
    transmission,
  });
}

export default fromModelToEntity;
