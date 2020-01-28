import callApi from '@utils/api'
import { searchReposRequest } from './requests'
import { searchReposPending, searchReposSuccess, searchReposError } from './actions'

export const searchRepos = query => dispatch => {
	dispatch(searchReposPending())
	callApi(searchReposRequest)(query)
		.then(({ data }) => {
			dispatch(searchReposSuccess(data))
		})
		.catch(err => dispatch(searchReposError(err)))
}
