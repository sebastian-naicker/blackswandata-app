import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cc from '@utils/styles'
import Portal from '@components/portal'
import Header from '@components/header'
import i18n from '@i18n/index'
import Results from './results'
import ResultDetails from './details'

const Dashboard = ({ repos, searchQuery, onSearchRepo, onLoadMore, loading }) => {
	const [selectedItem, setSelectedItem] = useState('')

	const handleSelectResultItem = itemId => () => {
		setSelectedItem(itemId)
	}

	return (
		<div className={cc('dashboard-page')}>
			<Portal domNode={document.getElementById('header-portal')}>
				<Header searchQuery={searchQuery} onSearchRepo={onSearchRepo} loading={loading} />
			</Portal>
			<h1 className={cc('dashboard-page__heading')}>{i18n.searchResultsHeading}</h1>
			<div className={cc('dashboard-page__content')}>
				<Results
					selectedItem={selectedItem}
					handleSelectResultItem={handleSelectResultItem}
					handleLoadMoreResults={onLoadMore}
					loading={loading}
					resultList={repos}
				/>
				<ResultDetails result={{}} />
			</div>
		</div>
	)
}

Dashboard.defaultProps = {
	repos: {},
	onSearchRepo: () => {}
}

Dashboard.propTypes = {
	onSearchRepo: PropTypes.func
}

export default Dashboard
