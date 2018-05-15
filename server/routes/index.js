const getAppointmentSlots = require('./appointment_routes');
const ping = require('./appointment_routes');

module.exports = function (app) {
    getAppointmentSlots(app);
    ping(app);
};