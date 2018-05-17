import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentSlot from "../components/AppointmentSlot";
import { retrieveAppointments, updateModalData } from "../actions/appointmentActions";
import BookAppointmentModal from "./BookAppointmentModal";

class Appointment extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.onRetrieveAppointments();
  };

  onAppointmentSlotClicked = (event) => {
    const modalData = {
      isOpen: true,
      appointmentId: event.target.id,
      userInfo: {
        name: "",
        phone: ""
      }
    }
    this.props.onUpdateModalData(modalData);
  }

  renderTimeSlot = () => {
    if (this.props.appointments.slots !== undefined && this.props.appointments.slots.length > 0) {
      const slots = this.props.appointments.slots;
      return (
        <AppointmentSlot slots={slots} onAppointmentSlotClicked={this.onAppointmentSlotClicked} />
      );
    }
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