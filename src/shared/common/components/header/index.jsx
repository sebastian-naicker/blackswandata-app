import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '@config/index'
import cc from '@utils/styles'
import LogoHorizontal from '@svgs/logo-horizontal.svg'
import SearchBox from '@components/search-box'

const Header = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleOnChange = ({ currentTarget }) => {
		const { value } = currentTarget
		setSearchQuery(value)
	}

	const handleSearch = () => {
		// onSearchRepo(searchQuery)
		console.log(searchQuery)
	}

	return (
		<header className={cc('header')}>
			<div className={cc('header__logo')}>
				<Link to={paths.ROOT}>
					<LogoHorizontal />
				</Link>
			</div>
			<div className={cc('header__search-box')}>
				<SearchBox loading={false} onClick={handleSearch} onChange={handleOnChange} value={searchQuery} />
			</div>
		</header>
	)
}

export default Header
