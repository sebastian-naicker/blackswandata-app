import React, { useEffect } from 'react'
import cc from '@utils/styles'
import i18n from '@i18n/index'
import Tab from '@components/tab'
import RepoDetails from '@pages/dashboard/details/repo-details'
import RepoIssues from '@pages/dashboard/details/repo-issues'

const ResultDetails = ({ result, handleLoadIssues, issues, loading }) => {
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
						<Tab
							tabs={[
								{
									tabHeading: i18n.tabDetails,
									tabContent: <RepoDetails result={result} />
								},
								{
									tabHeading: i18n.tabIssues,
									tabContent: <RepoIssues issues={issues} result={result} loading={loading} />
								}
							]}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default ResultDetails
