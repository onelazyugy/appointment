const appointmentService = require("../service/appointment");

exports.appointments = function(req, res) {
    res.send(appointmentService.getAppointments());
};

exports.update = function(req, res) {
    const id = parseInt(req.params.id);
    const updateAppointment = req.body;
    res.send(appointmentService.updateAppointment(id, updateAppointment));
};