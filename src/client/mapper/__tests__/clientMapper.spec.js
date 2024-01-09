const clientMapper = require("../clientMapper");
const Client = require("../../models/client");

describe("clientMapper", () => {
  it("should map car data to Client instance", () => {
    const clientData = {
      firstName: "John",
      lastName: "Doe",
      idType: "ID",
      idNumber: 123456789,
      nationality: "US",
      address: "123 Main St, Cityville",
      phoneNumber: 5551234,
      email: "john.doe@example.com",
      birthDate: "1990-01-15",
    };

    const mappedClient = clientMapper(clientData);
    expect(mappedClient).toBeInstanceOf(Client);

    expect(mappedClient.brand).toEqual(clientData.brand);
    expect(mappedClient.model).toEqual(clientData.model);
    expect(mappedClient.year).toEqual(clientData.year);
    expect(mappedClient.mileage).toEqual(clientData.mileage);
    expect(mappedClient.color).toEqual(clientData.color);
    expect(mappedClient.air_conditioning).toEqual(clientData.air_conditioning);
    expect(mappedClient.passengers).toEqual(clientData.passengers);
    expect(mappedClient.transmission).toEqual(clientData.transmission);
  });
});
