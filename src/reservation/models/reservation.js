
// car, client
class Reservation {
    constructor(id, pricePerDay, startDate, finishDate, totalPrice, paymentMethod, status) {
        this.id = id;
        this.pricePerDay = pricePerDay;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.totalPrice = totalPrice;
        this.paymentMethod = paymentMethod;
        this.status = status;
    }
}

module.exports = Reservation;