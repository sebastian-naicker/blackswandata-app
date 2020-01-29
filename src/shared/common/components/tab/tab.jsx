import React, { useState } from 'react'
import cc from '@utils/styles'

const Tab = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0)

	const handleSetActiveTab = ({ currentTarget }) => {
		const tabNum = Number(currentTarget.dataset.id)
		setActiveTab(tabNum)
	}

	return (
		<div className={cc('tab-list')}>
			<div className={cc('tab-pane')}>
				<div className={cc('tab-headers')}>
					{tabs.map((tab, i) => (
						<div
							key={i}
							data-id={i}
							className={cc('tab-panel__header', { [cc('tab-panel__header--active')]: i === activeTab })}
							onClick={handleSetActiveTab}
						>
							{tab.tabHeading}
						</div>
					))}
				</div>
				<div className={cc('tab-panels')}>
					{tabs.map((tab, i) => (
						<div
							key={i}
							data-id={i}
							className={cc('tab-panel__content', { [cc('tab-panel__content--active')]: i === activeTab })}
						>
							{tab.tabContent}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const DummyComp = () => <div>tab content here</div>

Tab.defaultProps = {
	tabs: [
		{
			tabHeading: 'Details',
			tabContent: <DummyComp />
		},
		{
			tabHeading: 'Issues',
			tabContent: <DummyComp />
		}
	]
}

export default Tab
