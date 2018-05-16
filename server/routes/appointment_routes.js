const controller = require("../controller/appointment_controller");

module.exports = function (app) {
    app.get('/api/appointments', (req, res) => {
        res.send(controller.getAppointments());
    });

    //update with username and phone
    app.put('/api/appointments/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const updateAppointment = req.body;
        console.log('updateAppointment:', updateAppointment);
        res.send(controller.update(id, updateAppointment));
    });

    //health check
    app.get('/api/ping', function (req, res) {
        res.send({message: "pong!"});
    });
};