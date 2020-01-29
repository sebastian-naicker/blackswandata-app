import React from 'react'
import PropTypes from 'prop-types'
import cc from '@utils/styles'
import Portal from '@components/portal'
import Header from '@components/header'
import i18n from '@i18n/index'

const Dashboard = ({ repos, searchQuery, onSearchRepo, loading }) => {
	return (
		<div className={cc('dashboard-page')}>
			<Portal domNode={document.getElementById('header-portal')}>
				<Header searchQuery={searchQuery} onSearchRepo={onSearchRepo} loading={loading} />
			</Portal>

			<h1 className={cc('dashboard-page__heading')}>{i18n.searchResultsHeading}</h1>

			<div className={cc('dashboard-page__content')}>
				<div className={cc('dashboard-page__results')}>
					<h2 className={cc('dashboard-page__sub-heading')}>{i18n.repositoriesSubHeading}</h2>
					<ul>
						{repos.hasOwnProperty('items') &&
							repos.items.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
					</ul>
				</div>
				<div className={cc('dashboard-page__details')}>details here</div>
			</div>
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
