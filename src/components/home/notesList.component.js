import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AddNote from '../home/add.component';
import EditNote from '../home/edit.component';
import DeleteNote from '../home/delete.component';
import AddButton from '../home/addbutton.component';
import { ToastContainer, toast } from 'react-toastify';
import * as note from '../../actions/noteActions';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: '',
            description: '',
            deleteOpen: false,
            editOpen: false,
            detailOpen: false,
            id: '',
            notes: []
        };
        this.handleClose = this.handleClose.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDeleteOpen = this.handleDeleteOpen.bind(this)
        this.handleDeleteClose = this.handleDeleteClose.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEditOpen = this.handleEditOpen.bind(this)
        this.handleDetails = this.handleDetails.bind(this)
    }

    componentWillMount() {
        
        let userId = localStorage.userId;
        this.props.actions.getNotes(userId)
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.notes) {
            this.setState({ notes: nextProps.notes })
            // this.props.parentContext.props.history.push('/app')
        }
        this.setState({
            open: false,
            deleteOpen: false
        })
    }

    handleClose() {
        
        this.setState({ open: !this.state.open })
    }

    handleAdd(data) {
        
        this.props.actions.addNote(data)
        this.setState({ open: !this.state.open })
        toast.success('Note added sucessfully.')
    }

    handleDeleteClose() {
        
        this.setState({ deleteOpen: !this.state.deleteOpen, id: '' })
        
    }

    handleDeleteOpen(index) {
        
        let currentData = this.state.notes
        let res = currentData[index]._id
        this.setState({
            id: res,
            deleteOpen: true
        })
    }

    handleDelete() {
        
        let id = this.state.id;
        this.props.actions.deleteNote(id)
        toast.success('Note deleted sucessfully')
    }

    handleEditOpen(index) {
        
        let currentData = this.state.notes
        let res = currentData[index]
        let description = currentData[index].description
        this.setState({
            id: res._id,
            editOpen: true,
            title: res.title,
            description: res.description
        })
    }

    handleEditClose() {
        
        this.setState({
            id: '',
            editOpen: false,
            title: '',
            description: ''
        })
    }

    handleUpdate(data) {
        
        data.id = this.state.id
        this.props.actions.updateNote(data)
        this.setState({
            id: '',
            editOpen: false,
            title: '',
            description: ''
        })
        toast.success('Note updated sucessfully')
    }

    handleDetailsOpen(index) {
        
        let currentData = this.state.notes
        let res = currentData[index]
        let title = res.title.replace(/ /g, '-');
        this.props.history.push('/app/' + res._id + '/' + title)
    }

    handleDetails(index) {
        let currentData = this.state.notes
        let res = currentData[index]._id
        let title = currentData[index].title.replace(/ /g, '-');
        this.props.history.push('/app/' + res);
    }

    render() {
        return (
            <div>
                <AddButton handleModal={this.handleClose} />
                {this.state.notes.length ? null : <MuiThemeProvider>
                    <Card>
                        <CardTitle title={'No notes added yet!'} />
                        <CardText>
                            {'Add one for you.'}
                        </CardText>
                    </Card>
                </MuiThemeProvider>}
                {this.state.notes.map(function (note, index) {
                    return <MuiThemeProvider>
                        <Card key={index}>
                            <CardTitle title={note.title ? note.title : '-'} className="note_title" />
                            <CardText>
                                {note.description ? note.description : '-'}
                            </CardText>
                            <CardActions className="btn_not_action">
                                <FlatButton label="Edit" primary={true} onClick={this.handleEditOpen.bind(this, index)} />
                                <FlatButton label="Delete" onClick={this.handleDeleteOpen.bind(this, index)} />
                                <FlatButton label="Details" onClick={this.handleDetailsOpen.bind(this, index)} />
                            </CardActions>
                        </Card>
                    </MuiThemeProvider>
                }.bind(this))}
                <MuiThemeProvider>
                    <AddNote
                        open={this.state.open}
                        handleModal={this.handleClose.bind(this)}
                        handleAdd={this.handleAdd.bind(this)}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <EditNote
                        open={this.state.editOpen}
                        title={this.state.title}
                        description={this.state.description}
                        handleModal={this.handleEditClose.bind(this)}
                        handleUpdate={this.handleUpdate.bind(this)}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <DeleteNote
                        open={this.state.deleteOpen}
                        handleDeleteClose={this.handleDeleteClose.bind(this)}
                        handleDelete={this.handleDelete.bind(this)}
                    />
                </MuiThemeProvider>
                <ToastContainer autoClose={1000}/>
            </div>
        );
    }
};
//this tells what state should expose on props
function mapStateToProps(state, ownProps) {
    
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
export default connect(mapStateToProps, mapDispatchToProps)(NotesList)