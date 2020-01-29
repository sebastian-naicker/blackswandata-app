import React, { useState } from 'react'
import PropTypes from 'prop-types'
import i18n from '@i18n/index'
import cc from '@utils/styles'
import SearchBox from '@components/search-box'
import Logo from '@svgs/logo-color.svg'

const Home = ({ onSearchRepo, loading }) => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleOnChange = ({ currentTarget }) => {
		const { value } = currentTarget
		setSearchQuery(value)
	}

	const handleSearch = () => {
		onSearchRepo(searchQuery)
	}

	return (
		<div className={cc('landing-page')}>
			<div className={cc('landing-page-content')}>
				<div className={cc('logo-wrapper')}>
					<Logo />
				</div>
				<SearchBox value={searchQuery} onChange={handleOnChange} loading={loading} onClick={handleSearch} />
				{!loading && searchQuery.length === 0 && <p className={cc('helper-text')}>{i18n.searchHelpText}</p>}
				{!loading && searchQuery.length === 1 && (
					<p className={cc('helper-text')}>{i18n.searchKeepGoingHelpText}</p>
				)}
				{!loading && searchQuery.length === 2 && (
					<p className={cc('helper-text')}>{i18n.searchAlmostThereHelpText}</p>
				)}
				{!loading && searchQuery.length >= 3 && (
					<p className={cc('helper-text')}>{i18n.searchReadyHelpText}</p>
				)}
				{loading && <p className={cc('helper-text')}>{i18n.searchLoading}</p>}
			</div>
		</div>
	)
}

Home.defaultProps = {
	onSearchRepo: () => {}
}

Home.propTypes = {
	onSearchRepo: PropTypes.func
}

export default Home
