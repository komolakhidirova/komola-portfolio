import './style.css'

import gitHub from './../../img/icons/gitHub.svg'
import linkedIn from './../../img/icons/linkedIn.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a href='#!'>
								<img src={linkedIn} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!'>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>Komola Khidirova © 2024</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
