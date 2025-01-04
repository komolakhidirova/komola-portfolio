import './style.css'

const Education = ({ img, text, link }) => {
	return (
		<div className='edu'>
			<a href={link} target='_blank' rel='noreferrer'>
			<img src={img} alt='education' className='edu__img' />
			{text}
			</a>
		</div>
	)
}

export default Education

