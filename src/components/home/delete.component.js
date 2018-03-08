import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
class DeleteNote extends Component {
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                onClick={this.props.handleDeleteClose}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                onClick={this.props.handleDelete}
            />,
        ];
        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        title="Delete Note"
                        actions={actions}
                        modal={false}
                        open={this.props.open}
                    >
                        Are you sure you want to delete this note ?
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
};

export default DeleteNote