const appointmentService = require("../service/appointment");

exports.appointments = function(req, res) {
    res.send(appointmentService.getAppointments());
};

exports.appointment = function(req, res) {
    console.log('book appointment:', req.body);
    res.send(appointmentService.bookAppointment(req.body));
};

exports.update = function(req, res) {
    const id = parseInt(req.params.id);
    const updateAppointment = req.body;
    res.send(appointmentService.updateAppointment(id, updateAppointment));
};