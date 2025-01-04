import triangle from './../../img/header-bg-triangle.png'
import certificate from './../../img/certificate.pdf'
import downloadImg from './../../img/icons/download.svg'
import './style.css'

const Header = () => {
	return (
		<header className='header'>
			<img src={triangle} alt={'img'} className='header__bg' />
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Hello! I'm <em>Komola</em>
					</strong>
					<br />a Frontend Developer
				</h1>
				<div className='header__text'>
					<p>Great Development = Creativity + Functionality</p>
				</div>
				<a href={certificate} download='certificate_of_enrollment.pdf' className='btn'>
					<img className='btn__img' src={downloadImg} alt='download' />
					CV
				</a>
			</div>
		</header>
	)
}

export default Header
