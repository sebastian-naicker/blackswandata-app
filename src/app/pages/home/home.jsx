import React, { useState } from 'react'
import PropTypes from 'prop-types'
import i18n from '@i18n/index'
import cc from '@utils/styles'
import Logo from '@svgs/logo-color.svg'

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleOnChange = ({ currentTarget }) => {
		const { value } = currentTarget
		setSearchQuery(value)
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
					<button className={cc('search-box__button')} disabled={searchQuery.length < 3}>
						<img className={cc('search-box__button-icon')} src='/assets/images/search.png' alt={i18n.search} />
					</button>
				</div>
				{searchQuery.length === 0 && <p className={cc('helper-text')}>{i18n.searchHelpText}</p>}
				{searchQuery.length === 1 && <p className={cc('helper-text')}>{i18n.searchKeepGoingHelpText}</p>}
				{searchQuery.length === 2 && <p className={cc('helper-text')}>{i18n.searchAlmostThereHelpText}</p>}
				{searchQuery.length >= 3 && <p className={cc('helper-text')}>{i18n.searchReadyHelpText}</p>}
			</div>
		</div>
	)
}

Home.defaultProps = {
	title: ''
}

Home.propTypes = {
	title: PropTypes.string
}

export default Home
