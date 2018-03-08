import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import * as signup from '../../actions/authActions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.signup) {
      this.props.history.push('/')
    }
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
            {/* <AppBar
             title="Register"
           /> */}
            <TextField
              hintText="Enter your username"
              type="username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Sign Up" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
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