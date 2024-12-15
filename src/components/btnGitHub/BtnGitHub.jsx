import gitHub from './gitHub-black.svg'
import './style.css'

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
			<img src={gitHub} alt='' />
			Source code
		</a>
	)
}

export default BtnGitHub
