const reservationMapper = require("../reservationMapper");
const Reservation = require("../../models/reservation");

describe("reservationMapper", () => {
  it("should map car data to Client instance", () => {
    const reservationData = {
      id: 1,
      pricePerDay: 50,
      startDate: "2023-01-01",
      finishDate: "2023-01-05",
      paymentMethod: "Credit Card",
      paid: true,
      status: true,
      carId: 2,
      clientId: 1,
    };

    const mappedReservation = reservationMapper(reservationData);
    expect(mappedReservation).toBeInstanceOf(Reservation);

    expect(mappedReservation.brand).toEqual(reservationData.brand);
    expect(mappedReservation.model).toEqual(reservationData.model);
    expect(mappedReservation.year).toEqual(reservationData.year);
    expect(mappedReservation.mileage).toEqual(reservationData.mileage);
    expect(mappedReservation.color).toEqual(reservationData.color);
    expect(mappedReservation.air_conditioning).toEqual(reservationData.air_conditioning);
    expect(mappedReservation.passengers).toEqual(reservationData.passengers);
    expect(mappedReservation.transmission).toEqual(reservationData.transmission);
  });
});
