import callApi from 'utils/api';
import { getUsersRequest, loginUser as loginUserRequest } from './requests';
import { getUsersPending, getUsersSuccess, getUsersError } from './actions';

export const getUsers = () => dispatch => {
	dispatch(getUsersPending());
	callApi(getUsersRequest)()
		.then(({ data, status }) => { // there are other variables here, but ${data} and ${status} should give enough control
			dispatch(getUsersSuccess(data));
		})
		.catch(err => dispatch(getUsersError(err)));
};

export const loginUser = payload => dispatch => {
	dispatch(getUsersPending());
	callApi(loginUserRequest)(payload)
		.then(({ data, status }) => { // there are other variables here, but ${data} and ${status} should give enough control
			dispatch(getUsersSuccess(data));
		})
		.catch(err => dispatch(getUsersError(err)));
};
