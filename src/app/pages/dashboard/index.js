import { connect } from 'react-redux'
import Dashboard from './dashboard'
import lifecycle from '@utils/lifecycle'
import { resetAppState, setSearchQuery } from '@redux/global/actions'
import history from '@setup/history'
import { paths } from '@config'
import { searchRepos, loadMoreResults, getIssues } from '@redux/global/thunks'

const mapStateToProps = ({ global }) => ({
	loading: global.loading,
	success: global.success,
	error: global.error,
	repos: global.repos,
	searchQuery: global.searchQuery,
	pageNum: global.pageNum,
	issues: global.issues
})

const mergeProps = (stateProps, { dispatch }) => ({
	...stateProps,
	didMount() {
		if (stateProps.repos.length === 0) {
			history.push(paths.ROOT)
		}
	},
	willUnmount() {
		dispatch(resetAppState())
	},
	onSearchRepo(query) {
		dispatch(setSearchQuery(query))
		dispatch(searchRepos(query, 1))
	},
	onLoadIssues(repoName) {
		dispatch(getIssues(repoName))
	},
	onLoadMore() {
		dispatch(loadMoreResults(stateProps.searchQuery, ++stateProps.pageNum, stateProps.repos))
	}
})

export default connect(
	mapStateToProps,
	null,
	mergeProps
)(lifecycle({ didMount: 'didMount', willUnmount: 'willUnmount' })(Dashboard))
