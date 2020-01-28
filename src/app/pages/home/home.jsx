import React from 'react'
import PropTypes from 'prop-types'
import i18n from '@i18n/index'
import cc from '@utils/styles'
import Logo from '@svgs/logo-color.svg'

const Home = () => (
	<div className={cc('landing-page')}>
		<div className={cc('landing-page-content')}>
			<div className={cc('logo-wrapper')}>
				<Logo />
			</div>
			<div className={cc('search-box')}>
				<input className={cc('search-box__input')} type='text' placeholder={i18n.searchRepos} />
				<button className={cc('search-box__button')}>
					<img className={cc('search-box__button-icon')} src='/assets/images/search.png' alt={i18n.search} />
				</button>
			</div>
			<p className={cc('helper-text')}>{i18n.searchHelpText}</p>
		</div>
	</div>
)

Home.defaultProps = {
	title: ''
}

Home.propTypes = {
	title: PropTypes.string
}

export default Home
