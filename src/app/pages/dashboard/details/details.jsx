import React, { useEffect } from 'react'
import cc from '@utils/styles'
import i18n from '@i18n/index'
import moment from 'moment'

const ResultDetails = ({ result, handleLoadIssues }) => {
	const hasResult = Object.keys(result).length > 0

	useEffect(() => {
		if (result.hasOwnProperty('full_name')) {
			handleLoadIssues(result.full_name)
		}
	}, [result])

	return (
		<div className={cc('dashboard-page__details')}>
			{!hasResult && (
				<div className={cc('dashboard-page__details-message')}>
					<img
						className={cc('dashboard-page__details-message__image')}
						src='/assets/images/select.png'
						alt=''
					/>
					<p className={cc('dashboard-page__details-message__copy')}>{i18n.resultDetails}</p>
				</div>
			)}
			{hasResult && (
				<div className={cc('dashboard-page__details-result')}>
					<h2 className={cc('dashboard-page__sub-heading')}>{result.full_name}</h2>
					<div className={cc('dashboard-page__details-result__content')}>
						<ul className={cc('dashboard-page__details-list')}>
							<li className={cc('dashboard-page__details-list__item')}>
								<img src='/assets/images/user.png' alt='' />
								<div>Created by: {result.owner.login}</div>
							</li>
							<li className={cc('dashboard-page__details-list__item')}>
								<img src='/assets/images/calendar-edit.png' alt='' />
								<div>Date created: {moment(result.created_at).format('LL')}</div>
							</li>
							<li className={cc('dashboard-page__details-list__item')}>
								<img src='/assets/images/calendar-sync.png' alt='' />
								<div>Date updated: {moment(result.updated_at).format('LL')}</div>
							</li>
						</ul>
						<p className={cc('dashboard-page__details-list-description')}>{result.description}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default ResultDetails
