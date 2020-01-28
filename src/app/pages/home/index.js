import { connect } from 'react-redux'
import { searchRepos } from '@redux/global/thunks'
import history from '@setup/history'
import lifecycle from '@utils/lifecycle'
import { paths } from '@config/index'
import Home from './home'

const mapStateToProps = ({ global }) => ({
	loading: global.loading,
	success: global.success,
	repos: global.repos.items
})

const mergeProps = (stateProps, { dispatch }) => ({
	...stateProps,
	didUpdate(prevProps) {
		if (prevProps.success !== stateProps.success && stateProps.success) {
			history.push(paths.DASHBOARD)
		}
	},
	onSearchRepo(query) {
		dispatch(searchRepos(query))
	}
})

export default connect(mapStateToProps, null, mergeProps)(lifecycle({ didUpdate: 'didUpdate' })(Home))
