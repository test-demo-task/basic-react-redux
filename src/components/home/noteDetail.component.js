import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as note from '../../actions/noteActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class NoteDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
        this.handleBack = this.handleBack.bind(this)
    }
    componentWillMount() {
        
        let id = this.props.match.params.id
        this.props.actions.getNote(id)
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.note) {
            this.setState({
                title: nextProps.note.title,
                description: nextProps.note.description
            })
        }
    }

    handleBack() {
        
        this.props.history.push('/app')
    }
    render() {
        const actions = [
            <FlatButton
                label="Back"
                onClick={this.handleBack}
            />
        ];
        return (
            <div>
                <MuiThemeProvider>
                    <Card>
                        <CardTitle title={this.state.title ? this.state.title : '-'} className="note_title" />
                        <CardText>
                            {this.state.description ? this.state.description : '-'}
                        </CardText>
                    </Card>
                    <div className="modal_btn">
                        {actions}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
};
//this tells what state should expose on props
function mapStateToProps(state, ownProps) {
    
    return {
        note: state.noteData.note
    };
}
// this tells what action should expose on props bindActionCreators is used to
// bind all actions at once
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(note, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail)