const ClientController = require("../clientController");

const clientService = {
  getAllClients: jest.fn(),
  getClientById: jest.fn(),
  createClient: jest.fn(),
  updateClient: jest.fn(),
  deleteClient: jest.fn(),
};

const app = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

const response = {
  json: jest.fn(),
  status: jest.fn(() => response),
};

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

const clientController = new ClientController(clientService);
clientController.configureRoutes(app);

describe("clientController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("index", () => {
    it("return all clients", async () => {
      clientService.getAllClients.mockResolvedValueOnce(["client1", "client2"]);

      await clientController.index({}, response);
      expect(response.json).toHaveBeenCalledWith(["client1", "client2"]);
      expect(response.status).not.toHaveBeenCalled();
    });
  });

  describe("view", () => {
    it("return a client by id", async () => {
      clientService.getClientById.mockResolvedValueOnce(client);
      await clientController.view({ params: { id: 1 } }, response);

      expect(response.json).toHaveBeenCalledWith(client);
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      clientService.getClientById.mockResolvedValueOnce(null);
      await clientController.view({ params: { id: 1 } }, response);

      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({ error: "Client not found" });
    });
  });

  describe("create", () => {
    const client = {
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
    };

    it("create a client", async () => {
      clientService.createClient.mockResolvedValueOnce(client);
      await clientController.create({ body: client }, response);

      expect(response.status).toHaveBeenCalledWith(201);
      expect(response.json).toHaveBeenCalledWith(client);
    });

    it("error 500 status", async () => {
      clientService.createClient.mockRejectedValueOnce(new Error("error"));

      await clientController.create({ body: client }, response);

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        error: "Internal server error",
      });
    });
  });

  describe("update", () => {
    const client = {
      id: 2,
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

    it("update a client", async () => {
      clientService.updateClient.mockResolvedValueOnce(true);
      await clientController.update(
        { params: { id: 2 }, body: client },
        response
      );
      expect(response.json).toHaveBeenCalledWith({
        message: "Client updated successfully",
      });
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
      clientService.updateClient.mockResolvedValueOnce(false);
      await clientController.update(
        { params: { id: 2 }, body: client },
        response
      );
      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({ error: "Client not found" });
    });
  });

  describe("delete", () => {
    it("delete a client", async () => {
      clientService.deleteClient.mockResolvedValueOnce(true);
      await clientController.delete({ params: { id: 2 } }, response);
      expect(response.json).toHaveBeenCalledWith({
        message: "Client deleted successfully",
      });
      expect(response.status).not.toHaveBeenCalled();
    });

    it("error 404 status", async () => {
        clientService.deleteClient.mockResolvedValueOnce(false);
        await clientController.delete({ params: { id: 2 } }, response);
        expect(response.status).toHaveBeenCalledWith(404);
        expect(response.json).toHaveBeenCalledWith({ error: "Client not found or could not be deleted" });
      });
  });
});
