import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// import logo from './logo.svg';
// import './App.css';
// import axios from "axios";
// import { CONFIG } from "./config/globals";

import Appointment from "./containers/Appointment";

import "./style/base.css";

class App extends Component {
  // ping = (pingCallback) => {
  //   let msg = "";
  //   axios.get(CONFIG.url + "/api/ping").then(function (response) {
  //     msg = response.data.message;
  //     pingCallback(msg);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     pingCallback(error);
  //   });
  // }

  // pingCallback = (msg) => {
  //   console.log('ping response from pingCallback:', msg);
  //   return msg;
  // };

  render() {
    // const msg = this.ping(this.pingCallback);
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <div className="container">
              <Route exact={true} path="/" component={Appointment} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
