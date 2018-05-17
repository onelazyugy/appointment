let appointments = require("../model/appointment");
const _ = require("lodash");

/**
 * load all of the appointments
 */
exports.getAppointments = function() {
    console.log('get appointment:', appointments);
    return appointments;
};

/**
 * get all appointments and check the id and update the appointment
 * @param {*} id 
 */
exports.updateAppointment = function(id, updateAppointment) {
    return {"id": id, "data": updateAppointment};
};

/**
 * allow user to book an appointment
 * @param {*} appointment 
 */
exports.bookAppointment = function(appointment) {
    const index = _.findIndex(appointments.appointment.slots, {id: parseInt(appointment.id)});
    let isSuccess = false;
    let selectedAppt = {};
    if(index !== -1) {
        selectedAppt = _.find(appointments.appointment.slots, {'id': parseInt(appointment.id)});
        appointments.appointment.slots.map((slot)=>{
            isSuccess = true;
            if(slot.id === parseInt(appointment.id)) {
                slot.isSlotTaken = true;
                slot.name = appointment.name;
                slot.phone = appointment.phone;
            }
        });
    }
    return {isSuccess: isSuccess};
}