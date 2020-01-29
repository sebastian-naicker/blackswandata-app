import React, { useState } from 'react'
import cc from '@utils/styles'
import i18n from '@i18n/index'
import moment from 'moment'
import Loader from '@components/loader'

const RepoIssues = ({ issues, result, loading }) => {
	const [issueFilter, setIssueFilter] = useState('open')

	const handleViewAllIssues = () => {
		window.open(`${result.html_url}/issues`, '__blank')
	}

	const handleOpenIssue = url => () => {
		window.open(url, '__blank')
	}

	return (
		<div>
			{loading && <Loader />}
			<div className={cc('dashboard-page__issue-filter')}>
				<p>Filter by: </p>
				<div className={cc('dashboard-page__issue-filter__field')}>
					<input
						id='open'
						type='radio'
						name='filter'
						checked={issueFilter === 'open'}
						onChange={() => setIssueFilter('open')}
					/>
					<label htmlFor='open'>{i18n.open}</label>
				</div>
				<div className={cc('dashboard-page__issue-filter__field')}>
					<input
						id='closed'
						type='radio'
						name='filter'
						checked={issueFilter === 'closed'}
						onChange={() => setIssueFilter('closed')}
					/>
					<label htmlFor='closed'>{i18n.closed}</label>
				</div>
			</div>
			<ul className={cc('dashboard-page__issue-list')}>
				{issues.hasOwnProperty('items') &&
					issues.items
						.filter(issue => issue.state === issueFilter)
						.map(issue => (
							<li key={issue.id} className={cc('dashboard-page__issue-list__item')}>
								<img src='/assets/images/alert.png' alt='' />
								<div className={cc('dashboard-page__issue-list__item-content')}>
									<div className={cc('dashboard-page__issue-list__item-title')} title={issue.title}>
										{issue.title}
									</div>
									<div className={cc('dashboard-page__issue-list__item-meta')}>{`#${issue.number} ${
										i18n.issueOpenedOn
									} ${moment(issue.created_at).format('LL')} by ${issue.user.login}`}</div>
								</div>
								<div className={cc('dashboard-page__issue-list__item-button-wrapper')}>
									<button
										onClick={handleOpenIssue(issue.html_url)}
										className={cc('dashboard-page__issue-list__item-button')}
									>
										{i18n.openIssue}
									</button>
								</div>
							</li>
						))}
			</ul>
			<button className={cc('dashboard-page__issue-list__item-button--blue')} onClick={handleViewAllIssues}>
				view all issues
			</button>
		</div>
	)
}

export default RepoIssues
