export const searchReposRequest = agent => (query, pageNum = 1, pageSize = 10) =>
	agent.get(`/search/repositories?q=${query}&page=${pageNum}&per_page=${pageSize}`)
