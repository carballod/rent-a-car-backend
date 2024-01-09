const CarController = require("../carController");

const carService = {
  getAllCars: jest.fn(),
  getCarById: jest.fn(),
  createCar: jest.fn(),
  updateCar: jest.fn(),
  deleteCar: jest.fn(),
};

const app = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

const response = {
  json: jest.fn(),
  status: jest.fn(() => response),
};

const carController = new CarController(carService);
carController.configureRoutes(app);

describe("carController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("index", () => {
    it("return all cars", async () => {
      carService.getAllCars.mockResolvedValueOnce(["car1", "car2"]);

      await carController.index({}, response);
      expect(response.json).toHaveBeenCalledWith(["car1", "car2"]);
      expect(response.status).not.toHaveBeenCalled();
    });
  });

  describe("view", () => {
    it("return a car by id", async () => {
      const carId = 1;
      const car = {
        id: carId,
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        mileage: 20000,
        color: "White",
        air_conditioning: true,
        passengers: 5,
        transmission: "Automatic",
      };

      carService.getCarById.mockResolvedValueOnce(car);
      await carController.view({ params: { id: carId } }, response);

      expect(response.json).toHaveBeenCalledWith(car);
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      carService.getCarById.mockResolvedValueOnce(null);
      await carController.view({ params: { id: 1 } }, response);

      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({ error: "Car not found" });
    });
  });

  describe("create", () => {
    const car = {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2018,
      mileage: 25000,
      color: "Silver",
      air_conditioning: true,
      passengers: 4,
      transmission: "Automatic",
    };

    it("create a car", async () => {
      carService.createCar.mockResolvedValueOnce(car);
      await carController.create({ body: car }, response);

      expect(response.status).toHaveBeenCalledWith(201);
      expect(response.json).toHaveBeenCalledWith(car);
    });

    it("error 500 status", async () => {
      carService.createCar.mockRejectedValueOnce(new Error("error"));

      await carController.create({ body: car }, response);

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
    });
  });

  describe("update", () => {
    const car = {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2018,
      mileage: 25000,
      color: "Silver",
      air_conditioning: true,
      passengers: 4,
      transmission: "Automatic",
    };

    it("update a car", async () => {
      carService.updateCar.mockResolvedValueOnce(true);
      await carController.update({ params: { id: 2 }, body: car }, response);
      expect(response.json).toHaveBeenCalledWith({
        message: "Car updated successfully",
      });
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      carService.updateCar.mockResolvedValueOnce(false);
      await carController.update({ params: { id: 2 }, body: car }, response);
      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({ error: "Car not found" });
    });
  });

  describe("delete", () => {
    it("delete a car", async () => {
      carService.deleteCar.mockResolvedValueOnce(true);
      await carController.delete({ params: { id: 2 } }, response);
      expect(response.json).toHaveBeenCalledWith({
        message: "Car deleted successfully",
      });
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      carService.updateCar.mockResolvedValueOnce(false);
      await carController.delete({ params: { id: 2 } }, response);
      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({ error: "Car not found or could not be deleted" });
    });
  });
});
