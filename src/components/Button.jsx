const Button = ({ className, text, id }) => {
	return (
		<a
			onClick={e => {
				e.preventDefault()
				const target = document.getElementById('feature_cards')
				if (target && id) {
					const offset = window.innerHeight * 0.15
					const top =
						target.getBoundingClientRect().top + window.scrollY - offset
					window.scrollTo({ top, behavior: 'smooth' })
				}
			}}
			className={`${className ?? ''} cta-wrapper`}
		>
			<div className='cta-button btn-green rot-135 group'>
				<p className='text'>{text}</p>
				<div className='arrow-wrapper'>
					<img src='/images/arrow-down.svg' alt='arrow' />
				</div>
			</div>
		</a>
	)
}

export default Button
