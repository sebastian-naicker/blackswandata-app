import { actionFactory } from 'factories';

export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const getUsersPending = () => actionFactory(GET_USERS_PENDING);

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const getUsersSuccess = payload => actionFactory(GET_USERS_SUCCESS, { users: payload, hasLoggedIn: true });

export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const getUsersError = err => actionFactory(GET_USERS_ERROR, err);
