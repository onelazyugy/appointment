import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class BookAppointmentModal extends React.Component {
    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.props.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.props.handleClose}
        />,
      ];
  
      return (
        <div>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.props.isOpen}
            onRequestClose={this.props.handleClose}
          >
            The actions in this window were passed in as an array of React objects.
          </Dialog>
        </div>
      );
    }
  }