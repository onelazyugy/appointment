import React from "react";
import Paper from 'material-ui/Paper';

const AppointmentSlot = ({slots}) => {
    const style = {
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        cursor: "pointer"
    };
    let apptTimeSlots = [];
    slots.map((slot, index)=>{
        apptTimeSlots.push(<Paper key={index} id={index} style={style} zDepth={1}>{slot}</Paper>);
    });
    return (
        <div>{apptTimeSlots}</div>
    );
};

export default AppointmentSlot;