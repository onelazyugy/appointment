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

export const updateModalState = (isOpen) => dispatch => {
    const modalState = {
        isOpen: isOpen
    }
    dispatch({
        type: types.MODAL_OPEN,
        payload: modalState
      });
};

