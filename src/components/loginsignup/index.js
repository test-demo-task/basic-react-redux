import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './login.component';
import SignUp from './signup.component';
class LoginSignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Sign Up',
      isLogin:true
    }
  }
  componentWillMount(){
      debugger
    let loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    let loginmessage = "Not Registered yet.Go to Sign Up";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }

  handleClick(event){
      debugger
    // console.log("event",event);
    let loginmessage;
    if(this.state.isLogin){
      let loginscreen=[];
      loginscreen.push(<SignUp parentContext={this}/>);
      loginmessage = "Already registered.Go to Sign In";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      let loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to Sign Up";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      <div style={{textAlign:'center'}}  className="login-page">
        <div className="login">
        {this.state.loginscreen}
        <div >
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default LoginSignUp;