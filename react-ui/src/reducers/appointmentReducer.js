import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_APPOINTMENT:
            return action.payload;
        default:
            return state;
    }
};