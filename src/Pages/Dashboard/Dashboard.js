import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header } from '../../Components';
import { employeeActions } from '../../State/Actions';

class DashboardPage extends React.Component {
    componentDidMount() {
        this.props.getAllEmployees();
    }

    render() {
        const { employee, employees } = this.props;
        return (
            <>
                <Header/>
                <div className="mt-3">
                    <h3>Employee List</h3>
                    {employees.loading && <em>Loading employees...</em>}
                    {employees.error && <span className="text-danger">ERROR: {employees.error}</span>}
                    {employees.list &&
                        <div className="table-responsive mt-3">
                            <table className="table w-100">
                                <tr>
                                    <th>Full Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email Id</th>
                                    <th>Phone Number</th>
                                </tr>
                                {employees.list.map((employee, index) =>
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phoneNo}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    }
                </div>
            </>
        );
    }
}

function mapState(state) {
    const { employees } = state;
    return { employees };
}

const actionCreators = {
    getAllEmployees: employeeActions.getAllEmployees
}

const connectedDashboardPage = connect(mapState, actionCreators)(DashboardPage);
export { connectedDashboardPage as DashboardPage };