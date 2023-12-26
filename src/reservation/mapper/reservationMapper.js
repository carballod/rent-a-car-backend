const Reservation = require('../models/reservation');

function mapperJsonToReservation(reservationDataJson) {

    const mappedReservation = new Reservation(
        reservationDataJson.id,
        reservationDataJson.pricePerDay,
        reservationDataJson.startDate,
        reservationDataJson.finishDate,
        reservationDataJson.totalPrice,
        reservationDataJson.paymentMethod,
        reservationDataJson.status
    )

    return mappedReservation;
}

module.exports = mapperJsonToReservation;