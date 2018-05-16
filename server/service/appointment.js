const appointments = require("../model/appointment");

/**
 * load all of the appointments
 */
exports.getAppointments = function() {
    return appointments;
};

/**
 * get all appointments and check the id and update the appointment
 * @param {*} id 
 */
exports.updateAppointment = function(id, updateAppointment) {
    return {"id": id, "data": updateAppointment};
};