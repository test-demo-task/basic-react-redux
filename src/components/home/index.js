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
    button: {
        display: 'none',
    }
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
        
        localStorage.clear();
        history.push('/')
        // this.props.history.push('/')
    }

    componentWillMount() {
        if (!localStorage.token) {
            // this.props.history.push('/')
            history.push('/')
        }
    }

    render() {
        return (

            <div>
                <MuiThemeProvider>
                    <AppBar className="note_button"
                        title={<span style={styles.title}>Notes</span>}
                        iconElementRight={<FlatButton label="Log Out" onClick={this.handleLogout} />}
                    />
                </MuiThemeProvider>
                {this.props.children}
                <div>
                    {/* <Switch>
                         <Route path="/app/:id" render={props => <NoteDetail  {...props} />} />
                        <Route exact path="/app" render={props => <NotesList {...props} />} /> 
                    </Switch> */}
                </div>
            </div>
        )
    }
}
export default Dashboard;