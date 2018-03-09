import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
class DetailsNote extends Component {
    render() {
        const actions = [
            <FlatButton
                label="Close"
                onClick={this.props.handleDetailClose}
            />
        ];
        return (
            <div>
                <MuiThemeProvider>
                    <Dialog
                        title="Note Detail"
                        modal={false}
                        open={this.props.open} className="mdoal_pop"
                    >
                        <br /><br />
                        <Card>
                            <CardTitle title={this.props.title ? this.props.title : '-'} className="note_title" />
                            <CardText>
                                {this.props.description ? this.props.description : '-'}
                            </CardText>
                        </Card>
                        <div className="modal_btn">
                            {actions}
                        </div>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
};

export default DetailsNote