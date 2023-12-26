class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }

    configureRoutes(app) {
        const ROUTE = '/clients';

        app.get(`${ROUTE}`, this.index.bind(this));
        app.get(`${ROUTE}/view/:id`, this.view.bind(this));
        app.post(`${ROUTE}/create`, this.create.bind(this));
        app.put(`${ROUTE}/update/:id`, this.update.bind(this));
        app.delete(`${ROUTE}/delete/:id`, this.delete.bind(this));
    }

    index(req, res) {
        const allReservations = this.reservationService.getAllReservations();
        res.json(allReservations);
    }

    view(req, res) {
        const reservationId = parseInt(req.params.id);
        const reservation = this.reservationService.getReservationById(reservationId);
        if(reservation) {
            res.json(reservation);
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    }

    create(req, res) {
        const reservationData = req.body;
        const createdReservation = this.reservationService.createReservation(reservationData);
        res.status(201).json(createdReservation);
    }

    update(req, res) {
        const reservationId = parseInt(req.params.id);
        const updateReservationData = req.body;
        const success = this.reservationService.updateReservation(reservationId, updateReservationData);
        if (success) {
            res.json({ message: 'Reservation updated successfully' });
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    }

    delete(req, res) {
        const reservationId = parseInt(req.params.id);
        const success = this.reservationService.deleteReservation(reservationId);
        if (success) {
            res.json({ message: 'Reservation deleted successfully' });
        } else {
            res.status(404).json({ error: 'Reservation not found or could not be deleted' });
        }
    }

}

module.exports = ReservationController;