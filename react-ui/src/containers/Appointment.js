import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentSlot from "../components/AppointmentSlot";
import { retrieveAppointments, updateModalData } from "../actions/appointmentActions";
import BookAppointmentModal from "./BookAppointmentModal";
import _ from "lodash";

class Appointment extends Component {
  componentDidMount = () => {
    this.props.onRetrieveAppointments();
  };

  onAppointmentSlotClicked = (event) => {
    const selectedAppt = _.find(this.props.appointments.slots, {'id': parseInt(event.target.id)});
    const modalData = {
      isOpen: true,
      appointmentId: event.target.id,
      userInfo: {
        name: selectedAppt.name,
        phone: selectedAppt.phone
      }
    }
    this.props.onUpdateModalData(modalData);
  }

  renderTimeSlot = () => {
    let appointmentSlot = "no appointment slot available";
    if (this.props.appointments.slots !== undefined && this.props.appointments.slots.length > 0) {
      const slots = this.props.appointments.slots;
      appointmentSlot = <AppointmentSlot slots={slots} onAppointmentSlotClicked={this.onAppointmentSlotClicked} />
    }
    return appointmentSlot;
  };

  render = () => {
    return (
      <div>
        <BookAppointmentModal />
        <div className="mui--text-center headerInfo">Make an appointment</div>
        <h3>Choose an appointment time</h3>
        <div>{this.renderTimeSlot()}</div>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  onRetrieveAppointments() {
    dispatch(retrieveAppointments());
  },
  onUpdateModalData(modalData) {
    dispatch(updateModalData(modalData));
}
});

function mapStateToProps(state) {
  return {
    appointments: state.appointmentReducer
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Appointment);