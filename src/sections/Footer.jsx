import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<div className='flex flex-col'>
					<p>© {new Date().getFullYear()} Komola Khidirova.</p>
					<p>All rights reserved.</p>
				</div>
				<div className='socials'>
					{socialImgs.map(img => (
						<a href={img.url} key={img.url} className='icon' target='_blank'>
							<img src={img.imgPath} alt={img.name} />
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
