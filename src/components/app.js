import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import LoginSignUp from './loginsignup';
import Dashboard from './home';

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={LoginSignUp} />
                        <Route exact path="/app" component={Dashboard} />
                        {/* <Route path="*" render={props => <Dashboard {...props} />} /> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default App