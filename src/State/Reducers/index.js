import { combineReducers } from 'redux';

import { registration } from './RegistrationReducer';
import { login } from './LoginReducer';
import { employees } from './EmployeeReducer';

const rootReducer = combineReducers({
  registration,
  login,
  employees
});

export default rootReducer;