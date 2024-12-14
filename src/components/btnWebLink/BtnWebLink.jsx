import './style.css'
import webLink from './webLink.svg'

const BtnWebLink = ({ link }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
			<img src={webLink} alt='' />
			Visit Website
		</a>
	)
}

export default BtnWebLink
