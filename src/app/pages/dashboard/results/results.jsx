import React from 'react'
import cc from '@utils/styles'
import i18n from '@i18n/index'
import ResultItem from './result-item'
import LoadMore from '@components/loadmore'

const Results = ({ resultList, selectedItem, handleSelectResultItem, handleLoadMoreResults, loading }) => {
	return (
		<div className={cc('dashboard-page__results')}>
			<h2 className={cc('dashboard-page__sub-heading')}>{i18n.repositoriesSubHeading}</h2>
			<ul className={cc('dashboard-page__results-list')}>
				{resultList.hasOwnProperty('items') &&
					resultList.items.map(repo => (
						<ResultItem
							key={repo.id}
							result={repo}
							handleSelectResultItem={handleSelectResultItem}
							selectedItem={selectedItem}
						/>
					))}
			</ul>

			<LoadMore loading={loading} onLoadMore={handleLoadMoreResults} />
		</div>
	)
}

export default Results
