import { API_BASE_URL } from './Constants';
import { authHeader } from '../Utilities';

export const employeeService = {
    getAllEmployees
};

function getAllEmployees() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_BASE_URL}/employees`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}