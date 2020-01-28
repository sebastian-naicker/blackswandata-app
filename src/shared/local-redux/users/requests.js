export const getUsersRequest = agent => () => agent.get('/users');
export const loginUser = agent => payload => agent.post('/login', payload);
