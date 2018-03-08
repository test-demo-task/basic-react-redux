import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as note from '../../actions/noteActions';

class NoteDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // this.handleClose = this.handleClose.bind(this)
    }
    componentWillMount() {
        debugger
        let id = this.props.match.params.id
        // this.props.actions.getNote()
    }
    render() {
        return (
            <div>
                <h1>Notes details</h1>
            </div>
        );
    }
};
//this tells what state should expose on props
function mapStateToProps(state, ownProps) {
    debugger
    return {
        notes: state.noteData.notes
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