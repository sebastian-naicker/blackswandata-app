import cc from '@utils/styles'
import React from 'react'
import i18n from '@i18n/index'

const ResultDetails = ({ result }) => {
	return (
		<div className={cc('dashboard-page__details')}>
			{Object.keys(result).length === 0 && (
				<div className={cc('dashboard-page__details-message')}>
					<img
						className={cc('dashboard-page__details-message__image')}
						src='/assets/images/select.png'
						alt=''
					/>
					<p className={cc('dashboard-page__details-message__copy')}>{i18n.resultDetails}</p>
				</div>
			)}
		</div>
	)
}

export default ResultDetails
