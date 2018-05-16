const controller = require("../controller/appointment_controller");

module.exports = function (app) {
    //get initial appointments
    app.get('/api/appointments', controller.appointments);

    //update appointment username and phone
    app.put('/api/appointments/:id', controller.update);

    //health check
    app.get('/api/ping', function (req, res) {
        res.send({message: "pong!"});
    });
};