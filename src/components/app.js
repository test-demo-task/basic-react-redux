import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//components
import LoginSignUp from './loginsignup';

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={LoginSignUp}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default App