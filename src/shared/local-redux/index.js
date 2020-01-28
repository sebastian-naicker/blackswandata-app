import { combineReducers } from 'redux';
import global from './global/reducer';
import users from './users/reducer';

export default combineReducers({
	global,
	users,
});
