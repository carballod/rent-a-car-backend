const Reservation = require("./models/reservation");
const ReservationRepository = require("./repository/reservationRepository");
const ReservationService = require("./service/reservationService");
const ReservationController = require("./controllers/reservationController");

function initReservationModule(app) {
  const reservationRepository = new ReservationRepository(Reservation);
  const reservationService = new ReservationService(reservationRepository);
  const reservationController = new ReservationController(reservationService);
  reservationController.configureRoutes(app);
}

module.exports = initReservationModule;
