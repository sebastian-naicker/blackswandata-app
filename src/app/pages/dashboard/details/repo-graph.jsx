import React from 'react'
import cc from '@utils/styles'
import CanvasJSReact from './canvas/canvasjs.react'
import Loader from '@components/loader'
const CanvasJSChart = CanvasJSReact.CanvasJSChart

const RepoGraph = ({ issues, result, loading }) => {
	const totalIssues = issues.total_count
	const openIssues = result.open_issues
	const closedIssues = totalIssues - openIssues

	const openIssuePer = ((openIssues / totalIssues) * 100).toFixed(2)
	const closedIssuePer = ((closedIssues / totalIssues) * 100).toFixed(2)

	const options = {
		animationEnabled: true,
		data: [
			{
				type: 'pie',
				startAngle: 50,
				showInLegend: 'true',
				toolTipContent: '<b>{label}</b>: {y}%',
				legendText: '{label}',
				dataPoints: [
					{ y: closedIssuePer, label: 'Closed issues' },
					{ y: openIssuePer, label: 'Open issues' }
				]
			}
		]
	}

	return (
		<div className={cc('dashboard-page__details-graph')}>
			{loading && <Loader />}
			{issues.hasOwnProperty('items') && issues.items.length === 0 && (
				<p className={cc('dashboard-page__details-list-description')}>no issues</p>
			)}
			{issues.hasOwnProperty('items') && issues.items.length > 0 && <CanvasJSChart options={options} />}
		</div>
	)
}

export default RepoGraph
