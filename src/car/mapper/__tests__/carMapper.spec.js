const carMapper = require("../carMapper");
const Car = require("../../models/car");

describe("carMapper", () => {
  it("should map car data to Car instance", () => {

    const carData = {
      brand: "Toyota",
      model: "Camry",
      year: 2020,
      mileage: 25000,
      color: "White",
      air_conditioning: true,
      passengers: 5,
      transmission: "Automatic",
    };

    const mappedCar = carMapper(carData);
    expect(mappedCar).toBeInstanceOf(Car);

    expect(mappedCar.brand).toEqual(carData.brand);
    expect(mappedCar.model).toEqual(carData.model);
    expect(mappedCar.year).toEqual(carData.year);
    expect(mappedCar.mileage).toEqual(carData.mileage);
    expect(mappedCar.color).toEqual(carData.color);
    expect(mappedCar.air_conditioning).toEqual(carData.air_conditioning);
    expect(mappedCar.passengers).toEqual(carData.passengers);
    expect(mappedCar.transmission).toEqual(carData.transmission);
  });
});
