import React from 'react'
import cc from '@utils/styles'
import i18n from '@i18n/index'
import Loader from '@components/loader'
import PropTypes from 'prop-types'

const SearchBox = props => {
	const inputProps = cc('search-box__input', { [cc('search-box__input--rounded')]: props.rounded })
	const buttonProps = cc('search-box__button', { [cc('search-box__button--rounded')]: props.rounded })

	return (
		<div className={cc('search-box')}>
			<input
				className={inputProps}
				type='text'
				value={props.value}
				placeholder={i18n.searchRepos}
				onChange={props.onChange}
			/>
			<button
				className={buttonProps}
				disabled={props.value.length < 3 || props.loading}
				onClick={props.onClick}
			>
				<img className={cc('search-box__button-icon')} src='/assets/images/search.png' alt={i18n.search} />
				{props.loading && <Loader />}
			</button>
		</div>
	)
}

SearchBox.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	rounded: PropTypes.bool
}

export default SearchBox
