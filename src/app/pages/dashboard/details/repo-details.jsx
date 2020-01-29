import cc from '@utils/styles'
import moment from 'moment'
import React from 'react'

const RepoDetails = ({ result }) => (
	<React.Fragment>
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
	</React.Fragment>
)

export default RepoDetails
