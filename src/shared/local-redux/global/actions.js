import { actionFactory } from 'factories'

export const RESET_APP_STATE = 'RESET_APP_STATE'
export const resetAppState = () => actionFactory(RESET_APP_STATE)

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const setSearchQuery = query => actionFactory(SET_SEARCH_QUERY, { searchQuery: query })

export const SEARCH_REPOS_PENDING = 'SEARCH_REPOS_PENDING'
export const searchReposPending = () => actionFactory(SEARCH_REPOS_PENDING)

export const SEARCH_REPOS_SUCCESS = 'SEARCH_REPOS_SUCCESS'
export const searchReposSuccess = (response, pageNum) =>
	actionFactory(SEARCH_REPOS_SUCCESS, { repos: response, pageNum })

export const SEARCH_REPOS_ERROR = 'SEARCH_REPOS_ERROR'
export const searchReposError = err => actionFactory(SEARCH_REPOS_ERROR, err)

export const GET_ISSUES_PENDING = 'GET_ISSUES_PENDING'
export const getIssuesPending = () => actionFactory(GET_ISSUES_PENDING)

export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS'
export const getIssuesSuccess = response => actionFactory(GET_ISSUES_SUCCESS, { issues: response })

export const GET_ISSUES_ERROR = 'GET_ISSUES_ERROR'
export const getIssuesError = err => actionFactory(GET_ISSUES_ERROR, err)
