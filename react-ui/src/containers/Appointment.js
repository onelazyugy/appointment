import React, { Component } from "react";
import { connect } from "react-redux";

class Appointment extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <h4>Make an appointment</h4>
      </div>
    );
  };
}

export default connect(null, null)(Appointment);