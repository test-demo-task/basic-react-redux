import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as signin from '../../actions/authActions';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.signin) {
      this.props.parentContext.props.history.push('/app')
    }
  }

  handleClick(event) {
    debugger
    let payload = {
      "username": this.state.username,
      "password": this.state.password
    }
    this.props.actions.signIn(payload);
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
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
    signin: state.auth.signin
  };
}
// this tells what action should expose on props bindActionCreators is used to
// bind all actions at once
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signin, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);