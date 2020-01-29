import cc from '@utils/styles'
import i18n from '@i18n/index'
import React from 'react'

const ResultItem = ({ result, selectedItem, handleSelectResultItem }) => {
	return (
		<li
			key={result.id}
			className={cc('dashboard-page__result-item', {
				[cc('dashboard-page__result-item--selected')]: selectedItem === result.id
			})}
		>
			<div className={cc('dashboard-page__result-item__icon')}>
				<img src='/assets/images/repo.png' alt='' />
			</div>
			<div className={cc('dashboard-page__result-item__name')}>
				<a href={result.html_url}>{result.full_name}</a>
				<span>{result.description}</span>
				<div className={cc('dashboard-page__result-item__statuses')}>
					<span
						className={`${cc('dashboard-page__result-item__status')} ${cc(
							'dashboard-page__result-item__status--stars'
						)}`}
						title={i18n.stargazersCount}
					>
						<img src='/assets/images/star.png' alt='' />
						{result.stargazers_count}
					</span>
					<span
						className={`${cc('dashboard-page__result-item__status')} ${cc(
							'dashboard-page__result-item__status--forks'
						)}`}
						title={i18n.forksCount}
					>
						<img src='/assets/images/fork.png' alt='' />
						{result.forks_count}
					</span>
					<span
						className={`${cc('dashboard-page__result-item__status')} ${cc(
							'dashboard-page__result-item__status--issues'
						)}`}
						title={i18n.issuesCount}
					>
						<img src='/assets/images/bug.png' alt='' />
						{result.open_issues_count}
					</span>
				</div>
			</div>
			<button
				className={cc('dashboard-page__result-item__button')}
				onClick={handleSelectResultItem(result.id)}
			>
				<img
					className={cc('dashboard-page__result-item__button-icon')}
					src='/assets/images/circle-arrow.png'
					alt=''
				/>
				<span>{i18n.viewInfo}</span>
			</button>
		</li>
	)
}

export default ResultItem
