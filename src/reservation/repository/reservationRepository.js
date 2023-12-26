const fs = require('fs');
const path = require('path');
const mapperJsonToReservation = require('../mapper/reservationMapper');

const DATA_RESERVATIONS_JSON = path.join(__dirname, '../../../data/reservation.json');

class ReservationRepository {
    constructor() {
        this.loadDataReservation();
    }

    loadDataReservation() {
        try {
            const data = fs.readFileSync(DATA_RESERVATIONS_JSON, 'utf8');
            this.reservations = JSON.parse(data)
        } catch (error) {
            this.reservations = [];
        }
    }

    saveDataReservation() {
        const data = JSON.stringify(this.clients, null, 2);
        fs.writeFileSync(DATA_RESERVATIONS_JSON, data, 'utf8');
    }

    getAllReservations() {
        return this.reservations.map(mapperJsonToReservation);
    }

    getReservationById(reservationId) {
        reservationId = parseInt(reservationId);
        return this.reservations.find(reservation => reservation.id === reservationId);
    }

    createReservation(reservationData) {
        const newReservation = mapperJsonToReservation(reservationData);
        this.reservations.push(newReservation);
        this.saveDataReservation();
        return newReservation;
    }

    updateReservation(reservationId, updatedReservationData) {
        reservationId = parseInt(reservationId);
        const index = this.reservations.findIndex(reservation => reservation.id === reservationId);        
        if(index !== -1) {
            this.clients[index] = { ...this.clients[index], ...updatedReservationData };
            this.saveDataReservation();
            return true;
        }
        return false;
    }

    deleteReservation(reservationId) {
        reservationId = parseInt(reservationId);
        const index = this.reservations.findIndex(reservation => reservation.id === reservationId);
        if(index !== -1) {
            this.reservations.splice(index, 1);
            this.saveDataReservation();
            return true;
        }
        return false;
    }

}

module.exports = ReservationRepository;