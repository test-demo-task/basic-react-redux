import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../../history'

import NoteDetail from '../home/noteDetail.component';
import NotesList from '../home/notesList.component';

const styles = {
    title: {
        cursor: 'pointer',
    },
};
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        debugger
        localStorage.clear();
        this.props.history.push('/')
    }

    render() {
        return (
            <Router>
                <div>
                    <MuiThemeProvider>
                        <AppBar
                            title={<span style={styles.title}>Notes</span>}
                            iconElementRight={<FlatButton label="Log Out" onClick={this.handleLogout} />}
                        />
                    </MuiThemeProvider>
                    <div>
                        <Switch>
                            <Route  path="/app/:id:title" component={NoteDetail} />
                            <Route exact path="/app" component={NotesList} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Dashboard;