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
            description: '',
            formErrors: { title: '', description: '' },
            titleValid: false,
            descriptionValid: false,
            formValid: false
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e) {
          
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
          
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let descriptionValid = this.state.descriptionValid;

        switch (fieldName) {
            case 'title':
                titleValid = value.length > 0;
                fieldValidationErrors.title = titleValid ? '' : 'Title is required';
                break;
            case 'description':
                descriptionValid = value.length > 0;
                fieldValidationErrors.description = descriptionValid ? '' : 'Description is required';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            titleValid: titleValid,
            descriptionValid: descriptionValid
        }, this.validateForm);
    }

    validateForm() {
          
        this.setState({ formValid: this.state.titleValid && this.state.descriptionValid });
    }
    handleCancel() {
          
        let fieldValidationErrors = this.state.formErrors;
        fieldValidationErrors.description = ''
        fieldValidationErrors.title = ''
        this.setState({
            title: '',
            description: '',
            formErrors: fieldValidationErrors
        })
        this.props.handleModal()
    }

    handleAdd() {
          
        let data = {
            userId: localStorage.userId,
            title: this.state.title,
            description: this.state.description
        }
        this.props.handleAdd(data)
        let fieldValidationErrors = this.state.formErrors;
        fieldValidationErrors.description = ''
        fieldValidationErrors.title = ''
        this.setState({
            title: '',
            description: '',
            formErrors: fieldValidationErrors,
            formValid:false
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
                disabled={!this.state.formValid}
                onClick={(event) => this.handleAdd(event)}
            />,
        ];

        return (
            <Dialog
                title="Add Note"
                modal={true}
                open={this.props.open} className="mdoal_pop"
            >
                <form>
                    <TextField
                        hintText="title"
                        floatingLabelText="Title"
                        name="title"
                        fullWidth={true}
                        errorText={this.state.formErrors.title ? this.state.formErrors.title : ''}
                        onChange={this.handleUserInput}
                    />
                    <br />
                    <TextField
                        hintText="description"
                        floatingLabelText="Description"
                        name="description"
                        fullWidth={true}
                        multiLine={true}
                        errorText={this.state.formErrors.description ? this.state.formErrors.description : ''}
                        onChange={this.handleUserInput}
                    />
                    
                    <div className="modal_btn">
                        {actions}
                    </div>
                </form>
            </Dialog>
        );
    }
}

export default AddNote