import Reservation from "./models/reservation.js";
import ReservationRepository from "./repository/reservationRepository.js";
import ReservationService from "./service/reservationService.js";
import ReservationController from "./controllers/reservationController.js";

function initReservationModule(app, diContainer) {
  const reservationController = diContainer.get("ReservationController")

  reservationController.configureRoutes(app);
}

export {
  initReservationModule,
  Reservation,
  ReservationRepository,
  ReservationService,
  ReservationController,
};
