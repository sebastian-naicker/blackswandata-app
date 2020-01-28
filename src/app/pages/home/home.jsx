import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ title }) => (
	<div className='panel'>
		<h1>{title}</h1>
	</div>
)

Home.defaultProps = {
	title: ''
}

Home.propTypes = {
	title: PropTypes.string
}

export default Home
