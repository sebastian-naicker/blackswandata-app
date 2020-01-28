import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Loader from 'common/components/loader';

const Users = ({ users, loading, success, createNewUser }) => {
	const [newUser, setNewUser] = useState({});

	const handleCreateNewUser = () => {
		const user = { name: 'Bob', surname: 'Larry' };
		setNewUser(newUser);
		createNewUser(user);
	};

	return (
		<div>
			<h1>Users</h1>

			{loading && <Loader />}

			{success && (
				<ul>
					{users.map(({ id, name }) => (
						<li key={id}>{name}</li>
					))}
				</ul>
			)}

			<button onClick={handleCreateNewUser}>create user</button>
		</div>
	);
}

Users.defaultProps = {
	users: []
};

Users.propTypes = {
	users: PropTypes.array
};

export default Users;
