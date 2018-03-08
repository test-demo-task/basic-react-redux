import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleCancel() {
        debugger
        this.setState({
            title: '',
            description: ''
        })
        this.props.handleModal()
    }

    handleUpdate() {
        debugger
        let data = {
            userId: localStorage.userId,
            title: this.state.title,
            description: this.state.description
        }
        this.props.handleUpdate(data)
        this.setState({
            title: '',
            description: ''
        })
    }

    componentWillReceiveProps(nextProps) {
        debugger
        this.setState({
            title: nextProps.title,
            description: nextProps.description
        })

    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                onClick={this.handleCancel}
            />,
            <FlatButton
                label="Update"
                primary={true}
                onClick={this.handleUpdate}
            />,
        ];

        return (
            <Dialog
                title="Edit Note"
                modal={true}
                open={this.props.open}
            >
                <form>
                    <TextField
                        hintText="title"
                        floatingLabelText="Title"
                        fullWidth={true}
                        value={this.state.title}
                        onChange={(event, newValue) => this.setState({ title: newValue })}
                    />
                    <br />
                    <TextField
                        hintText="description"
                        floatingLabelText="Description"
                        value={this.state.description}
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

export default EditNote