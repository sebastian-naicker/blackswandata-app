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
					<ul className={cc('dashboard-page__results-list')}>
						{repos.hasOwnProperty('items') &&
							repos.items.map(repo => (
								<li
									key={repo.id}
									className={cc('dashboard-page__result-item', {
										[cc('dashboard-page__result-item--selected')]: repo.id === 1
									})}
								>
									<div className={cc('dashboard-page__result-item__icon')}>
										<img src='/assets/images/repo.png' alt='' />
									</div>
									<div className={cc('dashboard-page__result-item__name')}>{repo.full_name}</div>
									<button className={cc('dashboard-page__result-item__button')}>
										<img
											className={cc('dashboard-page__result-item__button-icon')}
											src='/assets/images/circle-arrow.png'
											alt=''
										/>
										<span>{i18n.viewInfo}</span>
									</button>
								</li>
							))}
					</ul>
				</div>
				<div className={cc('dashboard-page__details')}>details here</div>
			</div>
		</div>
	)
}

Dashboard.defaultProps = {
	repos: {
		items: [
			{ id: 1, full_name: 'name 1' },
			{ id: 2, full_name: 'name 1' },
			{ id: 3, full_name: 'name 1' }
		]
	},
	onSearchRepo: () => {}
}

Dashboard.propTypes = {
	onSearchRepo: PropTypes.func
}

export default Dashboard
