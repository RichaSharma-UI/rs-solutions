import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from './Components';

import { RegisterPage } from './Pages/Register';
import { LoginPage } from './Pages/Login';
import { DashboardPage } from './Pages/Dashboard';

import { history } from './Utilities';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={DashboardPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

const connectedApp = connect()(App);
export { connectedApp as App };
