import enhancedRoute from 'utils/enhanced-route';

export const routes = [
	{
		path: '/',
		title: 'Home',
		exact: true,
		component: enhancedRoute('home'),
	},
	{
		path: '/about',
		title: 'About',
		exact: true,
		isPrivate: true,
		redirect: '/no-access',
		component: enhancedRoute('about'),
	},
	{
		path: '/todo',
		title: 'Test App - (Delete once pattern is established)',
		exact: true,
		component: enhancedRoute('todo'),
	},
	{
		path: '/users',
		title: 'Users',
		exact: true,
		component: enhancedRoute('users'),
	},
	{
		path: '/no-access',
		exact: true,
		component: enhancedRoute('unauthenticated'),
	},
	{
		component: enhancedRoute('404'),
	},
];

export default undefined;
