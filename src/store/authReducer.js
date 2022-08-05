// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

//  const user = JSON.parse(localStorage.getItem('user'));
//localStorage.setItem("token", "test");
//   localStorage.removeItem("user");

const defaultToken = localStorage.getItem('token');

let localStorageRole = {};

if (localStorage.getItem('role')) {
    localStorageRole = JSON.parse(localStorage.getItem('role'));
}

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    role: localStorageRole,
    token: defaultToken
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOGIN_SUCCESS:
            return {
                ...state,
                username: action.username
            };
        case actionTypes.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case actionTypes.SET_ROLE_NAME:
            return {
                ...state,
                role: action.role
            };
        case actionTypes.SET_USER:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName
            };

        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        default:
            return state;
    }
};

export default authReducer;
