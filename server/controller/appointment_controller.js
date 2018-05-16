const appointmentService = require("../service/appointment");

exports.getAppointments = function() {
    return appointmentService.getAppointments();
};

exports.update = function(id, updateAppointment) {
    return appointmentService.updateAppointment(id, updateAppointment);
};