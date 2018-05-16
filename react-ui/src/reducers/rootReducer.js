import { combineReducers } from 'redux';
import { appointmentReducer, modalStateReducer } from "./appointmentReducer";

export default combineReducers({
    appointmentReducer, 
    modalStateReducer
});