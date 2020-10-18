import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header } from '../../Components';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <div className="col-md-6 col-md-offset-3">
                    <h2>Employee List</h2>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            </>
        );
    }
}

const connectedDashboardPage = connect()(DashboardPage);
export { connectedDashboardPage as DashboardPage };