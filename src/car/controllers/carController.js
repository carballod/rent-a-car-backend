class CarController {

    constructor(carService) {
        this.carService = carService;
    }

    configureRoutes(app) {
        const ROUTE = '/cars';

        app.get(`${ROUTE}`, this.index.bind(this));
        app.get(`${ROUTE}/:id`, this.getById.bind(this));
        app.post(`${ROUTE}/create`, this.create.bind(this));
        app.put(`${ROUTE}/update/:id`, this.update.bind(this));
        app.delete(`${ROUTE}/delete/:id`, this.delete.bind(this));
    }


    async index(req, res) {
        try {
            const allCars = await this.carService.getAllCars();
            res.json(allCars);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getById(req, res) {
        const carId = parseInt(req.params.id);
        try {
            const car = await this.carService.getCarById(carId);
            if (car) {
                res.json(car);
            } else {
                res.status(404).json({ error: 'Car not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async create(req, res) {
        const carData = req.body;
        try {
            const createdCar = await this.carService.createCar(carData);
            res.status(201).json(createdCar);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async update(req, res) {
        const carId = parseInt(req.params.id);
        const updatedCarData = req.body;
        try {
            const success = await this.carService.updateCar(carId, updatedCarData);
            if (success) {
                res.json({ message: 'Car updated successfully' });
            } else {
                res.status(404).json({ error: 'Car not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async delete(req, res) {
        const carId = parseInt(req.params.id);
        try {
            const success = await this.carService.deleteCar(carId);
            if (success) {
                res.json({ message: 'Car deleted successfully' });
            } else {
                res.status(404).json({ error: 'Car not found or could not be deleted' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

}

export default CarController;