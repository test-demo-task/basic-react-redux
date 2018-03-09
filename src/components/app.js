import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/custom.css';
import history from './../history'
//components
import LoginSignUp from './loginsignup';
import Dashboard from './home';
import NoteDetail from './home/noteDetail.component';
import NotesList from './home/notesList.component';
class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Switch>
                        <Route exact path="/" component={LoginSignUp} exact />
                        <Dashboard>
                            <Route exact path="/app" component={NotesList} />
                            <Route exact path="/app/:id/:title" component={NoteDetail} />
                        </Dashboard>
                        {/* <Route path="*" render={props => <Dashboard {...props} />} /> */}
                    </Switch>
                </div>
            </div>
        );
    }
};

export default App