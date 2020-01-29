import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '@config/index'
import cc from '@utils/styles'
import LogoHorizontal from '@svgs/logo-horizontal.svg'
import SearchBox from '@components/search-box'

const Header = ({ searchQuery, onSearchRepo, loading }) => {
	const [query, setQuery] = useState(searchQuery || '')

	const handleOnChange = ({ currentTarget }) => {
		const { value } = currentTarget
		setQuery(value)
	}

	const handleSearch = () => {
		onSearchRepo(query)
	}

	return (
		<header className={cc('header')}>
			<div className={cc('header__logo')}>
				<Link to={paths.ROOT}>
					<LogoHorizontal />
				</Link>
			</div>
			<div className={cc('header__search-box')}>
				<SearchBox loading={loading} onClick={handleSearch} onChange={handleOnChange} value={query} />
			</div>
		</header>
	)
}

export default Header
