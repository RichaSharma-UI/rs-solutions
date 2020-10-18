import { employeeConstants } from '../Constants';

export function employees(state = {}, action) {
  switch (action.type) {
    case employeeConstants.GET_ALL_EMPLOYEES_REQUEST:
      return { loading: true };
    case employeeConstants.GET_ALL_EMPLOYEES_SUCCESS:
      return {
        list: action.employees
      };
    case employeeConstants.GET_ALL_EMPLOYEES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}