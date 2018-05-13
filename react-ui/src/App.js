import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { CONFIG } from "./config/globals";

class App extends Component {
  ping = (pingCallback) => {
    let msg = "";
    axios.get(CONFIG.url + "/api/ping").then(function (response) {
      msg = response.data.message;
      pingCallback(msg);
    })
    .catch(function (error) {
      console.log(error);
      pingCallback(error);
    });
  }

  pingCallback = (msg) => {
    console.log('ping response from pingCallback:', msg);
    return msg;
  };

  render() {
    const msg = this.ping(this.pingCallback);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>ping: {msg}</p>
      </div>
    );
  }
}

export default App;
