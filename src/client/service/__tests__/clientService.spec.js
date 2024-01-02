const ClientService = require("../clientService");

const clientRepository = {
  getAllClients: jest.fn(),
  getClientById: jest.fn(),
  createClient: jest.fn(),
  updateClient: jest.fn(),
  deleteClient: jest.fn(),
};

const clientService = new ClientService(clientRepository);

describe("ClientService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const client = {
    id: 1,
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

  const clients = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      idType: "ID",
      idNumber: 123456789,
      nationality: "US",
      address: "123 Main St, Cityville",
      phoneNumber: 5551234,
      email: "john.doe@example.com",
      birthDate: "1990-01-15",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      idType: "Passport",
      idNumber: "P987654321",
      nationality: "CA",
      address: "456 Oak St, Townsville",
      phoneNumber: 5555678,
      email: "jane.smith@example.com",
      birthDate: "1985-08-22",
    },
  ];

  describe("getAllClients", () => {
    it("return all clients from the repository", async () => {
      clientRepository.getAllClients.mockResolvedValueOnce(clients);
      const result = await clientService.getAllClients();
      expect(result).toEqual(clients);
      expect(clientRepository.getAllClients).toHaveBeenCalled();
    });
  });

  describe("getClientById", () => {
    it("return a client by id from the repository", async () => {
      clientRepository.getClientById.mockResolvedValueOnce(client);
      const result = await clientService.getClientById(1);
      expect(result).toEqual(client);
      expect(clientRepository.getClientById).toHaveBeenCalledWith(1);
    });

    it("return null for no existing client id", async () => {
      clientRepository.getClientById.mockResolvedValueOnce(null);
      const result = await clientService.getClientById(1);
      expect(result).toBeNull();
      expect(clientRepository.getClientById).toHaveBeenCalledWith(1);
    });
  });

  describe("createClient", () => {
    const client = {
      id: 3,
      firstName: "Robert",
      lastName: "Johnson",
      idType: "Driver's License",
      idNumber: "DL555123",
      nationality: "UK",
      address: "789 Pine St, Villagetown",
      phoneNumber: 5559876,
      email: "robert.johnson@example.com",
      birthDate: "1978-05-10",
    };

    it("create a new client in the repository", async () => {
      clientRepository.createClient.mockResolvedValueOnce(client);
      const result = await clientService.createClient(client);
      expect(result).toEqual(client);
      expect(clientRepository.createClient).toHaveBeenCalledWith(client);
    });
  });

  describe("deleteClient", () => {
    it("delete a client from the repository", async () => {
        clientRepository.deleteClient.mockResolvedValueOnce(true);
      const result = await clientService.deleteClient(1);
      expect(result).toBe(true);
      expect(clientRepository.deleteClient).toHaveBeenCalledWith(1);
    });
  });
});
