import React from 'react'
import Loader from '@components/loader'
import cc from '@utils/styles'
import i18n from '@i18n/index'

const LoadMore = ({ loading, onLoadMore }) => {
	return (
		<div className={cc('load-more')}>
			{loading && <Loader />}
			<button className={cc('load-more__button')} onClick={onLoadMore} disabled={loading}>
				{i18n.loadMore}
			</button>
		</div>
	)
}

export default LoadMore
