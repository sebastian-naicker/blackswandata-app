import React from 'react'
import PropTypes from 'prop-types'
import cc from '@utils/styles'
import Portal from '@components/portal'
import Header from '@components/header'

const Dashboard = ({ repos, searchQuery, onSearchRepo, loading }) => {
	return (
		<div className={cc('dashboard-page')}>
			<Portal domNode={document.getElementById('header-portal')}>
				<Header searchQuery={searchQuery} onSearchRepo={onSearchRepo} loading={loading} />
			</Portal>
			<ul>
				{repos.hasOwnProperty('items') && repos.items.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
			</ul>
		</div>
	)
}

Dashboard.defaultProps = {
	onSearchRepo: () => {}
}

Dashboard.propTypes = {
	onSearchRepo: PropTypes.func
}

export default Dashboard
