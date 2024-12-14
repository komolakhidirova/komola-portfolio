import './style.css'

const Skill = ({ img, text }) => {
	return (
		<div className='skill'>
			<img src={img} alt='skill' className='skill__img' />
			{text}
		</div>
	)
}

export default Skill
