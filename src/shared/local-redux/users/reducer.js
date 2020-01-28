import { reducerFactory } from 'factories';
import * as actions from './actions';

const initialState = {
	users: [],
};

/* eslint-disable */
const users = reducerFactory(initialState, actions);
export default users;
