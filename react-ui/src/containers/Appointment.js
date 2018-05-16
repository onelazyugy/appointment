import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentSlot from "../components/AppointmentSlot";
import {retrieveAppointments, updateModalState} from "../actions/appointmentActions";
import BookAppointmentModal from "../components/BookAppointmentModal";

class Appointment extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    //fetch appointment from server
    this.props.onRetrieveAppointments();
  };

  onAppointmentSlotClicked = (event) => {
    console.log('onAppointmentSlotClicked slot id:', event.target.id);
    //call redux to open the modal and make a POST
    this.props.onUpdateModalState(true);

  }

  onSubmitAppointment = () => {

  };

  handleClose = () => {
    this.props.onUpdateModalState(false);
  };

  renderTimeSlot = () => {
    console.log(this.props.appointments);
    if(this.props.appointments.slots !== undefined && this.props.appointments.slots.length > 0) {
      const slots = this.props.appointments.slots;
      return (
        <AppointmentSlot slots={slots} onAppointmentSlotClicked={this.onAppointmentSlotClicked}/>
      );
    }
  };

  render = () => {
    const isOpen = this.props.modalState.isOpen === undefined ? false : true;
    return (
      <div>
        <BookAppointmentModal isOpen={isOpen} handleClose={this.handleClose}/>
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
  onUpdateModalState(modalState) {
    dispatch(updateModalState(modalState));
  }
});

function mapStateToProps(state) {
return {
  appointments: state.appointmentReducer,
  modalState: state.modalStateReducer
};
}
export default connect(mapStateToProps, mapDispatchToProps)(Appointment);