import { actionFactory } from 'factories'

export const SEARCH_REPOS_PENDING = 'SEARCH_REPOS_PENDING'
export const searchReposPending = () => actionFactory(SEARCH_REPOS_PENDING)

export const SEARCH_REPOS_SUCCESS = 'SEARCH_REPOS_SUCCESS'
export const searchReposSuccess = response => actionFactory(SEARCH_REPOS_SUCCESS, { repos: response })

export const SEARCH_REPOS_ERROR = 'SEARCH_REPOS_ERROR'
export const searchReposError = err => actionFactory(SEARCH_REPOS_ERROR, err)
