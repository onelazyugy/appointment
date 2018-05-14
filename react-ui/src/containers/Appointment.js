import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentSlot from "../components/AppointmentSlot";

class Appointment extends Component {
  constructor(props) {
    super(props);
  }

  renderTimeSlot = () => {
    const apptSlots = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
    return (
      <AppointmentSlot slots={apptSlots}/>
    );
  };

  render = () => {
    return (
      <div>
        <div className="mui--text-center headerInfo">Make an appointment</div>
        <h3>
          Choose an appointment time
        </h3>
        <div>{this.renderTimeSlot()}</div>
      </div>
    );
  };
}

export default connect(null, null)(Appointment);