export const searchReposRequest = agent => (query, pageNum = 1, pageSize = 10) =>
	agent.get(`/search/repositories?q=${query}&page=${pageNum}&per_page=${pageSize}`)

export const getIssuesRequest = agent => repoName =>
	agent.get(`/search/issues?q=repo:${repoName}&page=1&per_page=10`)
