import callApi from '@utils/api'
import { searchReposRequest, getIssuesRequest } from './requests'
import {
	searchReposPending,
	searchReposSuccess,
	searchReposError,
	getIssuesPending,
	getIssuesSuccess,
	getIssuesError
} from './actions'

export const searchRepos = (query, pageNum) => dispatch => {
	dispatch(searchReposPending())
	callApi(searchReposRequest)(query, pageNum)
		.then(({ data }) => {
			dispatch(searchReposSuccess(data, 1))
		})
		.catch(({ response }) => {
			dispatch(searchReposError(response.data.message))
		})
}

export const loadMoreResults = (query, pageNum, repos) => dispatch => {
	dispatch(searchReposPending())
	callApi(searchReposRequest)(query, pageNum)
		.then(({ data }) => {
			if (repos.hasOwnProperty('items')) {
				dispatch(searchReposSuccess({ ...data, items: [...repos.items, ...data.items] }, pageNum))
			}
		})
		.catch(({ response }) => {
			dispatch(searchReposError(response.data.message))
		})
}

export const getIssues = repoName => dispatch => {
	dispatch(getIssuesPending())
	callApi(getIssuesRequest)(repoName)
		.then(({ data }) => {
			dispatch(getIssuesSuccess(data))
		})
		.catch(({ response }) => {
			dispatch(getIssuesError(response.data.message))
		})
}
