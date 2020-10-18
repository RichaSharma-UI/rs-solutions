import { employeeConstants } from '../Constants';
import { employeeService } from '../../Services';
import { history } from '../../Utilities';

export const employeeActions = {
    getAllEmployees
};

function getAllEmployees() {
    return dispatch => {
        dispatch(request());

        employeeService.getAllEmployees()
            .then(
                employees => dispatch(success(employees)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: employeeConstants.GET_ALL_EMPLOYEES_REQUEST } }
    function success(employees) { return { type: employeeConstants.GET_ALL_EMPLOYEES_SUCCESS, employees } }
    function failure(error) { return { type: employeeConstants.GET_ALL_EMPLOYEES_FAILURE, error } }
}
