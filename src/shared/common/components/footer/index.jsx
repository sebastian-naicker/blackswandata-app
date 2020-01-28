import React from 'react'
import i18n from '@i18n'
import PotionIcon from '@svgs/potion.svg'
import LightingIcon from '@svgs/lightening.svg'

const Footer = () => (
	<footer className='footer'>
		<p className={'footer-content'}>
			{i18n.madeWithLove}{' '}
			<span className='icon'>
				<PotionIcon />
			</span>
			{i18n.by}{' '}
			<span className='icon'>
				<LightingIcon />
			</span>
			{i18n.year}
		</p>
	</footer>
)

export default Footer
