import { connect } from 'react-redux'
import { searchRepos } from '@redux/global/thunks'
import lifecycle from '@utils/lifecycle'
import Home from './home'

const mapStateToProps = ({ global }) => ({
	loading: global.loading,
	success: global.success,
	repos: global.repos.items
})

const mergeProps = (stateProps, { dispatch }) => ({
	...stateProps,
	didUpdate(prevProps) {
		console.log(prevProps.success, stateProps.success)
	},
	onSearchRepo(query) {
		dispatch(searchRepos(query))
	}
})

export default connect(
	mapStateToProps,
	null,
	mergeProps
)(lifecycle({ didUpdate: 'didUpdate' })(Home))
