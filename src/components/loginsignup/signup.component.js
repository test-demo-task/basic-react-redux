import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ToastContainer, toast } from 'react-toastify';
import * as signup from '../../actions/authActions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      formErrors: { email: '', password: '', username: '' },
      emailValid: false,
      passwordValid: false,
      usernameValid: false,
      formValid: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.signup) {
      if (nextProps.signup.signup) {
        toast.success('User registered successfully, please login')
        setTimeout(function () {
          this.props.parentContext.handleClick()
        }.bind(this), 2000);
      }
      else {
        toast.error('Some error occured, please try again')
      }
    }
  }

  handleUserInput(e) {
    debugger
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    debugger
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      case 'password':
        passwordValid = value.length > 0;
        fieldValidationErrors.password = passwordValid ? '' : 'This is required';
        break
      case 'username':
        usernameValid = value.length > 0;
        fieldValidationErrors.username = usernameValid ? '' : 'This is required';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      usernameValid: usernameValid
    }, this.validateForm);
  }

  validateForm() {
    debugger
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.usernameValid });
  }

  handleClick(event) {
    debugger
    let payload = {
      "email": this.state.email,
      "password": this.state.password,
      "username": this.state.username
    }
    this.props.actions.signUp(payload);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <h2>Sign Up</h2>
            <hr />
            <TextField
              hintText="Enter your username"
              type="username"
              name="username"
              floatingLabelText="Username"
              errorText={this.state.formErrors.username ? this.state.formErrors.username : ''}
              onChange={this.handleUserInput}
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              name="email"
              floatingLabelText="Email"
              errorText={this.state.formErrors.email ? this.state.formErrors.email : ''}
              onChange={this.handleUserInput}
            />
            <br />
            <TextField
              type="password"
              name="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              errorText={this.state.formErrors.password ? this.state.formErrors.password : ''}
              onChange={this.handleUserInput}
            />
            <br />
            <RaisedButton label="Sign Up" disabled={!this.state.formValid} primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
          <hr />
        </MuiThemeProvider>
        <ToastContainer />
      </div>
    );
  }
}
const style = {
  margin: 15,
};

//this tells what state should expose on props
function mapStateToProps(state, ownProps) {
  debugger
  return {
    signup: state.auth.signup
  };
}
// this tells what action should expose on props bindActionCreators is used to
// bind all actions at once
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signup, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);