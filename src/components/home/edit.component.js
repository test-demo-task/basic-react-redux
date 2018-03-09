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
            description: '',
            formErrors: { title: '', description: '' },
            titleValid: false,
            descriptionValid: false,
            formValid: true
        }
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        
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
            formErrors:fieldValidationErrors
        })
        this.props.handleModal()
    }

    handleUpdate() {
          
        let data = {
            userId: localStorage.userId,
            title: this.state.title,
            description: this.state.description
        }
        this.props.handleUpdate(data)
        let fieldValidationErrors = this.state.formErrors;
        fieldValidationErrors.description = ''
        fieldValidationErrors.title = ''
        this.setState({
            title: '',
            description: '',
            formErrors: fieldValidationErrors,
            formValid:true
        })
    }

    componentWillReceiveProps(nextProps) {
          
        this.setState({
            title: nextProps.title,
            description: nextProps.description,
            titleValid: true,
            descriptionValid: true
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
                disabled={!this.state.formValid}
                onClick={(event) => this.handleUpdate(event)}
            />,
        ];

        return (
            <Dialog
                title="Edit Note"
                modal={true}
                open={this.props.open} className="mdoal_pop"
            >
                <form>
                    <TextField
                        hintText="title"
                        floatingLabelText="Title"
                        fullWidth={true}
                        name="title"
                        value={this.state.title}
                        errorText={this.state.formErrors.title ? this.state.formErrors.title : ''}
                        onChange={this.handleUserInput}
                    />
                    <br />
                    <TextField
                        hintText="description"
                        floatingLabelText="Description"
                        name="description"
                        value={this.state.description}
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

export default EditNote