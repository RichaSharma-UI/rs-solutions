import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { RegisterPage } from './Pages/Register';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router>
                            <Switch>
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/register" />
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
