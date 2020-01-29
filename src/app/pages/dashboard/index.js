import { connect } from 'react-redux'
import Dashboard from './dashboard'
import lifecycle from '@utils/lifecycle'
import { resetAppState, setSearchQuery } from '@redux/global/actions'
import history from '@setup/history'
import { paths } from '@config'
import { searchRepos } from '@redux/global/thunks'

const mapStateToProps = ({ global }) => ({
	loading: global.loading,
	success: global.success,
	error: global.error,
	repos: global.repos,
	searchQuery: global.searchQuery
})

const mergeProps = (stateProps, { dispatch }) => ({
	...stateProps,
	didMount() {
		if (stateProps.repos.length === 0) {
			// history.push(paths.ROOT)
		}
	},
	willUnmount() {
		dispatch(resetAppState())
	},
	onSearchRepo(query) {
		dispatch(setSearchQuery(query))
		dispatch(searchRepos(query))
	}
})

export default connect(
	mapStateToProps,
	null,
	mergeProps
)(lifecycle({ didMount: 'didMount', willUnmount: 'willUnmount' })(Dashboard))
