class ReservationService {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    getAllReservations() {
        return this.reservationRepository.getAllReservations();
    }

    getReservationById() {
        return this.reservationRepository.getReservationById(reservationId);
    }

    createReservation(reservationData) {
        return this.reservationRepository.createReservation(reservationData);
    }

    updateReservation(reservationId, updateReservationData) {
        return this.reservationRepository.updateReservation(reservationId, updateReservationData);
    }

    deleteReservation(reservationId) {
        return this.reservationRepository.deleteReservation(reservationId);
    }
}