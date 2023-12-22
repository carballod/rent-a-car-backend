class CarController {

    constructor(carService) {
        this.carService = carService;
    }

    configureRoutes(app) {
        const ROUTE = '/cars';

        app.get(`${ROUTE}`, this.index.bind(this));
        app.get(`${ROUTE}/view/:id`, this.view.bind(this));
        app.post(`${ROUTE}/create`, this.create.bind(this));
        app.put(`${ROUTE}/update/:id`, this.update.bind(this));
        app.delete(`${ROUTE}/delete/:id`, this.delete.bind(this));
    }


    index(req, res) {
        const allCars = this.carService.getAllCars();
        res.json(allCars);
    }

    view(req, res) {
        const carId = parseInt(req.params.id);
        const car = this.carService.getCarById(carId);
        if (car) {
            res.json(car);
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    }

    create(req, res) {
        const carData = req.body;
        const success = this.carService.createCar(carData);
        if (success) {
            res.json({ message: 'Car created successfully' });
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    }

    update(req, res) {
        const carId = parseInt(req.params.id);
        const updatedCarData = req.body;
        const success = this.carService.updateCar(carId, updatedCarData);
        if (success) {
            res.json({ message: 'Car updated successfully' });
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    }

    delete(req, res) {
        const carId = parseInt(req.params.id);
        const success = this.carService.deleteCar(carId);
        if (success) {
            res.json({ message: 'Car deleted successfully' });
        } else {
            res.status(404).json({ error: 'Car not found or could not be deleted' });
        }
    }

}

module.exports = CarController;