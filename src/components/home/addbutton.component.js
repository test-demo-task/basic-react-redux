import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
class AddButton extends Component {
    render() {
        const style = {
            margin: 12,
        };
        return (
            <div className="add_new_note">
                <MuiThemeProvider>
                    <RaisedButton
                        label="Add new note"
                        primary={true}
                        onClick={this.props.handleModal}
                        style={style}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
};

export default AddButton