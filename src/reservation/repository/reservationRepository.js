import fromModelToEntity from "../mapper/reservationMapper.js";

class ReservationRepository {
    constructor(Reservation) {
        this.reservation = Reservation;
    }

    async getAllReservations() {
        const reservations = await this.reservation.findAll();
        return reservations.map(fromModelToEntity);
    }

    async getReservationById(reservationId) {
        const reservations = await this.reservation.findByPk(reservationId);
        return reservations ? fromModelToEntity(reservations) : null;
    }

    async createReservation(reservationData) {
        const newReservation = await this.reservation.create(reservationData);
        return newReservation.toJSON();
    }

    async updateReservation(reservationId, updatedReservationData) {
        const [updatedRows] = await this.reservation.update(updatedReservationData, { where: { id: reservationId } });
        return updatedRows > 0;
    }

    async deleteReservation(reservationId) {
        const deletedRows = await this.reservation.destroy({ where: { id: reservationId } });
        return deletedRows > 0;
    }
}

export default ReservationRepository;
