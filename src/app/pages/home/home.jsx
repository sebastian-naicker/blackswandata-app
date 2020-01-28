import React, { useState } from 'react'
import PropTypes from 'prop-types'
import i18n from '@i18n/index'
import cc from '@utils/styles'
import Logo from '@svgs/logo-color.svg'
import Loader from '@components/loader'

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
				<div className={cc('search-box')}>
					<input
						className={cc('search-box__input')}
						type='text'
						value={searchQuery}
						placeholder={i18n.searchRepos}
						onChange={handleOnChange}
					/>
					<button
						className={cc('search-box__button')}
						disabled={searchQuery.length < 3 || loading}
						onClick={handleSearch}
					>
						<img
							className={cc('search-box__button-icon')}
							src='/assets/images/search.png'
							alt={i18n.search}
						/>
						{loading && <Loader />}
					</button>
				</div>
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
