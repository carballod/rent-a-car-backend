const ReservationController = require("../reservationController");

const reservationService = {
  getAllReservations: jest.fn(),
  getReservationById: jest.fn(),
  createReservation: jest.fn(),
  updateReservation: jest.fn(),
  deleteReservation: jest.fn(),
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

const reservation = {
  id: 1,
  pricePerDay: 50,
  startDate: "2023-01-01",
  finishDate: "2023-01-05",
  paymentMethod: "Credit Card",
  paid: true,
  status: true,
  carId: 2,
  clientId: 1,
};

const reservationController = new ReservationController(reservationService);
reservationController.configureRoutes(app);

describe("reservationController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("index", () => {
    it("return all reservations", async () => {
      reservationService.getAllReservations.mockResolvedValueOnce([
        "reservation1",
        "reservation2",
      ]);

      await reservationController.index({}, response);
      expect(response.json).toHaveBeenCalledWith([
        "reservation1",
        "reservation2",
      ]);
      expect(response.status).not.toHaveBeenCalled();
    });
  });

  describe("view", () => {
    it("return reservation by id", async () => {
      reservationService.getReservationById.mockResolvedValueOnce(reservation);
      await reservationController.view({ params: { id: 1 } }, response);

      expect(response.json).toHaveBeenCalledWith(reservation);
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      reservationService.getReservationById.mockResolvedValueOnce(null);
      await reservationController.view({ params: { id: 1 } }, response);

      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({
        error: "Reservation not found",
      });
    });
  });

  describe("create", () => {
    const reservation = {
      id: 2,
      pricePerDay: 150,
      startDate: "2024-01-01",
      finishDate: "2024-01-05",
      paymentMethod: "Cash",
      paid: true,
      status: true,
      carId: 2,
      clientId: 3,
    };

    it("create a reservation", async () => {
      reservationService.createReservation.mockResolvedValueOnce(reservation);
      await reservationController.create({ body: reservation }, response);

      expect(response.status).toHaveBeenCalledWith(201);
      expect(response.json).toHaveBeenCalledWith(reservation);
    });

    it("error 500 status", async () => {
      reservationService.createReservation.mockRejectedValueOnce(
        new Error("error")
      );
      await reservationController.create({ body: reservation }, response);

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
    });
  });

  describe("update", () => {
    const reservation = {
      id: 2,
      pricePerDay: 550,
      startDate: "2024-01-01",
      finishDate: "2024-01-03",
      paymentMethod: "Cash",
      paid: false,
      status: true,
      carId: 2,
      clientId: 3,
    };

    it("update a client", async () => {
      reservationService.updateReservation.mockResolvedValueOnce(true);
      await reservationController.update(
        { params: { id: 2 }, body: reservation },
        response
      );
      expect(response.json).toHaveBeenCalledWith({
        message: "Reservation updated successfully",
      });
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      reservationService.updateReservation.mockResolvedValueOnce(false);
      await reservationController.update(
        { params: { id: 2 }, body: reservation },
        response
      );
      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({
        error: "Reservation not found",
      });
    });
  });

  describe("delete", () => {
    it("delete a reservation", async () => {
      reservationService.deleteReservation.mockResolvedValueOnce(true);
      await reservationController.delete({ params: { id: 2 } }, response);
      expect(response.json).toHaveBeenCalledWith({
        message: "Reservation deleted successfully",
      });
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      reservationService.deleteReservation.mockResolvedValueOnce(false);
      await reservationController.delete({ params: { id: 2 } }, response);
      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({
        error: "Reservation not found or could not be deleted",
      });
    });
  });
});
