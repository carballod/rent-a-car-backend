import Reservation from "../models/reservation.js";

function fromModelToEntity({ id, pricePerDay, startDate, finishDate, paymentMethod, paid, status, carId, clientId }) {
  
    return new Reservation({
    id,
    pricePerDay,
    startDate,
    finishDate,
    paymentMethod,
    paid,
    status,
    carId,
    clientId,
  });
  
}

export default fromModelToEntity;
