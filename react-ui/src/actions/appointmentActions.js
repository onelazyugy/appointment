import * as types from "./actionTypes";
import axios from "axios";
import { CONFIG } from "../config/globals";

export const retrieveAppointments = () => dispatch => {
  const url = CONFIG.url;
  axios
    .get(
        url + "/api/appointments"      
    )
    .then(result => {
      let response = result.data;
      if (response.appointment.slots.length > 0) {
        dispatch({
          type: types.RETRIEVE_APPOINTMENT,
          payload: response.appointment
        });
      } else {
        
      }
    })
    .catch(error => {
        console.error(error);
    });
};

export const bookAppointment = (appointment) => dispatch => {
    const url = CONFIG.url;
    const body = {}
    axios.post(url + '/api/appointment', appointment).then(result => {
        let response = result.data;
        console.log('response:', response);
        // if (response.appointment.slots.length > 0) {
        //   dispatch({
        //     type: types.RETRIEVE_APPOINTMENT,
        //     payload: response.appointment
        //   });
        // } else {
          
        // }
      })
      .catch(error => {
          console.error(error);
      });
  };


export const updateModalData = (modalData) => dispatch => {
    dispatch({
        type: types.MODAL_OPEN,
        payload: modalData
      });
};

