import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RETRIEVE_APPOINTMENT:
            return action.payload;
        default:
            return state;
    }
};

export const modalStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MODAL_OPEN:
        return { ...action.payload };
        default:
            return state;
    }
};