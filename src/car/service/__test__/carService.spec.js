const CarService = require("../carService");

// Mock de carRepository
const carRepositoryMock = {
  getAllCars: jest.fn(),
  getCarById: jest.fn(),
  createCar: jest.fn(),
  updateCar: jest.fn(),
  deleteCar: jest.fn(),
};

const carService = new CarService(carRepositoryMock);

describe("CarService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const car = {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    mileage: 20000,
    color: "White",
    air_conditioning: true,
    passengers: 5,
    transmission: "Automatic",
  };

  const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2020,
      mileage: 20000,
      color: "White",
      air_conditioning: true,
      passengers: 5,
      transmission: "Automatic",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2018,
      mileage: 25000,
      color: "Silver",
      air_conditioning: true,
      passengers: 4,
      transmission: "Automatic",
    },
  ];

  describe("getAllCars", () => {
    it("return all cars from the repository", async () => {
      carRepositoryMock.getAllCars.mockResolvedValueOnce(cars);
      const result = await carService.getAllCars();
      expect(result).toEqual(cars);
      expect(carRepositoryMock.getAllCars).toHaveBeenCalled();
    });
  });

  describe("getCarById", () => {
    it("return a car by id from the repository", async () => {
      carRepositoryMock.getCarById.mockResolvedValueOnce(car);
      const result = await carService.getCarById(1);
      expect(result).toEqual(car);
      expect(carRepositoryMock.getCarById).toHaveBeenCalledWith(1);
    });

    it("return null for no existing car id", async () => {
      carRepositoryMock.getCarById.mockResolvedValueOnce(null);
      const result = await carService.getCarById(1);
      expect(result).toBeNull();
      expect(carRepositoryMock.getCarById).toHaveBeenCalledWith(1);
    });
  });

  describe("createCar", () => {
    const car = {
      id: 3,
      brand: "Ford",
      model: "Escape",
      year: 2022,
      mileage: 15000,
      color: "Red",
      air_conditioning: true,
      passengers: 5,
      transmission: "Automatic",
    };

    it("create a new car in the repository", async () => {
      carRepositoryMock.createCar.mockResolvedValueOnce(car);
      const result = await carService.createCar(car);
      expect(result).toEqual(car);
      expect(carRepositoryMock.createCar).toHaveBeenCalledWith(car);
    });
  });

  describe("updateCar", () => {
    it("update a car in the repository", async () => {
      const updatedCar = {
        brand: "Toyota",
        model: "Camry",
        year: 2021,
        mileage: 30000,
        color: "White",
        air_conditioning: true,
        passengers: 5,
        transmission: "Automatic",
      };
      carRepositoryMock.updateCar.mockResolvedValueOnce(true);
      const result = await carService.updateCar(1, updatedCar);
      expect(result).toBe(true);
      expect(carRepositoryMock.updateCar).toHaveBeenCalledWith(1, updatedCar);
    });
  });

  describe("deleteCar", () => {
    it("delete a car from the repository", async () => {
      carRepositoryMock.deleteCar.mockResolvedValueOnce(true);
      const result = await carService.deleteCar(1);
      expect(result).toBe(true);
      expect(carRepositoryMock.deleteCar).toHaveBeenCalledWith(1);
    });
  });
});
