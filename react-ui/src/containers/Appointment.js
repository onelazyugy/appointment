import React, { Component } from "react";
import { connect } from "react-redux";

class Appointment extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <div className="mui--text-center headerInfo">Make an appointment</div>

      </div>
    );
  };
}

export default connect(null, null)(Appointment);