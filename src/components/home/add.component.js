import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }

    handleCancel() {
        debugger
        this.setState({
            title: '',
            description: ''
        })
        this.props.handleModal()
    }

    handleAdd() {
        debugger
        let data = {
            userId: localStorage.userId,
            title: this.state.title,
            description: this.state.description
        }
        this.props.handleAdd(data)
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                onClick={this.handleCancel}
            />,
            <FlatButton
                label="Add Note"
                primary={true}
                onClick={this.handleAdd}
            />,
        ];

        return (
            <Dialog
                title="Add"
                modal={true}
                open={this.props.open}
            >
                <form>
                    <TextField
                        hintText="title"
                        floatingLabelText="Title"
                        fullWidth={true}
                        onChange={(event, newValue) => this.setState({ title: newValue })}
                    />
                    <br />
                    <TextField
                        hintText="description"
                        floatingLabelText="Description"
                        fullWidth={true}
                        multiLine={true}
                        onChange={(event, newValue) => this.setState({ description: newValue })}
                    />
                    <div>
                        {actions}
                    </div>
                </form>
            </Dialog>
        );
    }
}

export default AddNote