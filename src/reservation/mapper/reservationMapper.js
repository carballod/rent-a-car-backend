import Reservation from "../models/reservation.js";

function reservationMapper(reservationData) {

    return new Reservation({
        id: reservationData.id,
        pricePerDay: reservationData.pricePerDay,
        startDate: reservationData.startDate,
        finishDate: reservationData.finishDate,
        paymentMethod: reservationData.paymentMethod,
        paid: reservationData.paid,
        status: reservationData.status,
        carId: reservationData.carId,
        clientId: reservationData.clientId
    })

}

export default reservationMapper;
