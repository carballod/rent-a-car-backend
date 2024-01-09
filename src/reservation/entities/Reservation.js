export default class Reservation {
  
    constructor({ id, pricePerDay, startDate, finishDate, paymentMethod, paid, status, carId, clientId }) {
    this.id = id;
    this.pricePerDay = pricePerDay;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.paymentMethod = paymentMethod;
    this.paid = paid;
    this.status = status;
    this.carId = carId;
    this.clientId = clientId;
  }
  
}
