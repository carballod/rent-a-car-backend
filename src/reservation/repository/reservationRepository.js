import Reservation from "../models/reservation.js";
import reservationMapper from "../mapper/reservationMapper.js";

class ReservationRepository {

    async getAllReservations() {
        const reservations = await Reservation.findAll();
        return reservations.map(reservationMapper);
    }

    async getReservationById(reservationId) {
        const reservations = await Reservation.findByPk(reservationId);
        return reservations ? reservationMapper(reservations) : null;
    }

    async createReservation(reservationData) {
        const newReservation = await Reservation.create(reservationData);
        return newReservation.toJSON();
    }

    async updateReservation(reservationId, updatedReservationData) {
        const [updatedRows] = await Reservation.update(updatedReservationData, { where: { id: reservationId } });
        return updatedRows > 0;
    }

    async deleteReservation(reservationId) {
        const deletedRows = await Reservation.destroy({ where: { id: reservationId } });
        return deletedRows > 0;
    }
}

export default ReservationRepository;
