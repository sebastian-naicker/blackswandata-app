import { connect } from 'react-redux';
import lifecycle from 'utils/lifecycle';
// import { getUsers } from 'local-redux/users/thunks';
import Users from './users';

const mapStateToProps = ({ users: { users, loading, success, error } }) => ({
	users,
	loading,
	success,
	error
});

const mergeProps = (state, { dispatch }, props) => ({
	...state,
	...props,
	didMount () {
		// dispatch(getUsers());
	},
	createNewUser (newUser) {
		// dispatch(createUser(newUser));
		console.log('new User', newUser);
	},
});

export default connect(mapStateToProps, null, mergeProps)(lifecycle({ didMount: 'didMount' })(Users));

