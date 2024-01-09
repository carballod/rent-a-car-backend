class ReservationController {

    constructor(reservationService) {
        this.reservationService = reservationService;
    }

    configureRoutes(app) {
        const ROUTE = '/reservations';

        app.get(`${ROUTE}`, this.index.bind(this));
        app.get(`${ROUTE}/view/:id`, this.view.bind(this));
        app.post(`${ROUTE}/create`, this.create.bind(this));
        app.put(`${ROUTE}/update/:id`, this.update.bind(this));
        app.delete(`${ROUTE}/delete/:id`, this.delete.bind(this));
    }

    async index(req, res) {
        try {
            const allReservations = await this.reservationService.getAllReservations();
            res.json(allReservations);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async view(req, res) {
        const reservationId = parseInt(req.params.id);
        try {
            const reservation = await this.reservationService.getReservationById(reservationId);
            if(reservation) {
                res.json(reservation);
            } else {
                res.status(404).json({ error: 'Reservation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async create(req, res) {
        const reservationData = req.body;
        try {
            const createdReservation = await this.reservationService.createReservation(reservationData);
            res.status(201).json(createdReservation);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async update(req, res) {
        const reservationId = parseInt(req.params.id);
        const updateReservationData = req.body;
        try {
            const success = await this.reservationService.updateReservation(reservationId, updateReservationData);
            if (success) {
                res.json({ message: 'Reservation updated successfully' });
            } else {
                res.status(404).json({ error: 'Reservation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async delete(req, res) {
        const reservationId = parseInt(req.params.id);
        try {
            const success = await this.reservationService.deleteReservation(reservationId);
            if (success) {
                res.json({ message: 'Reservation deleted successfully' });
            } else {
                res.status(404).json({ error: 'Reservation not found or could not be deleted' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

}

export default ReservationController;