import React from 'react';
import { Link } from 'react-router-dom';

const PageLoginError = () => (
	<div className='panel'>
		<h1>Sorry! You are not allowed to access the content on this page. Please make sure you are logged in</h1>
		<p>You can try logging in, by clicking <Link to="/">here</Link> </p>
	</div>
);


export default PageLoginError;
