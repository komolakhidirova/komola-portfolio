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
							<a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank'>
								<img src={linkedIn} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='https://github.com/komolakhidirova' target='_blank'>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>Komola Khidirova © 2025</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
