const ReservationService = require("../reservationService");

const reservationRepository = {
  getAllReservations: jest.fn(),
  getReservationById: jest.fn(),
  createReservation: jest.fn(),
  updateReservation: jest.fn(),
  deleteReservation: jest.fn(),
};

const reservationService = new ReservationService(reservationRepository);

describe("ReservatonService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  const reservations = [
    {
      id: 1,
      pricePerDay: 50,
      startDate: "2023-01-01",
      finishDate: "2023-01-05",
      paymentMethod: "Credit Card",
      paid: true,
      status: true,
      carId: 2,
      clientId: 1,
    },
    {
      id: 2,
      pricePerDay: 550,
      startDate: "2024-01-01",
      finishDate: "2024-01-03",
      paymentMethod: "Cash",
      paid: false,
      status: true,
      carId: 2,
      clientId: 3,
    },
  ];

  describe("getAllReservations", () => {
    it("return all reservations from the repository", async () => {
      reservationRepository.getAllReservations.mockResolvedValueOnce(
        reservations
      );
      const result = await reservationService.getAllReservations();
      expect(result).toEqual(reservations);
      expect(reservationRepository.getAllReservations).toHaveBeenCalled();
    });
  });

  describe("getReservationById", () => {
    it("return a reservation by id from the repository", async () => {
      reservationRepository.getReservationById.mockResolvedValueOnce(
        reservation
      );
      const result = await reservationService.getReservationById(1);
      expect(result).toEqual(reservation);
      expect(reservationRepository.getReservationById).toHaveBeenCalledWith(1);
    });

    it("return null for no existing reservation id", async () => {
      reservationRepository.getReservationById.mockResolvedValueOnce(null);
      const result = await reservationService.getReservationById(1);
      expect(result).toBeNull();
      expect(reservationRepository.getReservationById).toHaveBeenCalledWith(1);
    });
  });

  describe("createReservation", () => {
    const reservation = {
      id: 3,
      pricePerDay: 150,
      startDate: "2024-01-01",
      finishDate: "2024-01-05",
      paymentMethod: "Cash",
      paid: true,
      status: true,
      carId: 2,
      clientId: 3,
    };

    it("create a new reservation in the repository", async () => {
      reservationRepository.createReservation.mockResolvedValueOnce(
        reservation
      );
      const result = await reservationService.createReservation(reservation);
      expect(result).toEqual(reservation);
      expect(reservationRepository.createReservation).toHaveBeenCalledWith(
        reservation
      );
    });
  });

  describe("deleteReservation", () => {
    it("delete a reservation from the repository", async () => {
      reservationRepository.deleteReservation.mockResolvedValueOnce(true);
      const result = await reservationService.deleteReservation(1);
      expect(result).toBe(true);
      expect(reservationRepository.deleteReservation).toHaveBeenCalledWith(1);
    });
  });
});
