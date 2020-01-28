import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import PrivateRoute from 'utils/privateRoute';
import { createBrowserHistory } from 'history';
import { routes } from 'config';
import { isLoggedIn } from 'utils/auth';
import { Header, Footer } from 'common/components';

const history = createBrowserHistory();

export default () => (
	<Router history={history}>
		<React.Fragment>
			<Header />
			<Switch>
				{routes.map(({ isPrivate, ...route }, i) => {
					return isPrivate ? <PrivateRoute key={i} isAuthenticated={isLoggedIn()} {...route} /> : <Route key={i} {...route} />;
				})}
			</Switch>
			<Footer />
		</React.Fragment>
	</Router>
);
