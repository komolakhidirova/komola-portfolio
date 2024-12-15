import './style.css'
import webLink from './webLink.svg'

const BtnWebLink = ({ link }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
			<img  className='btn-outline__img' src={webLink} alt='' />
			Web Site
		</a>
	)
}

export default BtnWebLink
