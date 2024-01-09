class ReservationService {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    async getAllReservations() {
        return await this.reservationRepository.getAllReservations();
    }

    async getReservationById(reservationId) {
        return await this.reservationRepository.getReservationById(reservationId);
    }

    async createReservation(reservationData) {
        return await this.reservationRepository.createReservation(reservationData);
    }

    async updateReservation(reservationId, updateReservationData) {
        return await this.reservationRepository.updateReservation(reservationId, updateReservationData);
    }

    async deleteReservation(reservationId) {
        return await this.reservationRepository.deleteReservation(reservationId);
    }
}

export default ReservationService;