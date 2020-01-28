export const searchReposRequest = agent => query => agent.get(`/search/repositories?q=${query}`)
