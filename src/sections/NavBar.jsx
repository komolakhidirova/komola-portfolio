import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10
			if (isScrolled) {
				setScrolled(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const onClick = (e, targetId) => {
		e.preventDefault()
		const target = document.getElementById(targetId)
		if (target) {
			const offset = window.innerHeight * 0.15
			const top = target.getBoundingClientRect().top + window.scrollY - offset
			window.scrollTo({ top, behavior: 'smooth' })
		}
	}

	return (
		<header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
			<div className='inner'>
				<a className='logo' href='#hero'>
					Komola Khidirova
				</a>
				<div className='flex items-center gap-8'>
					<nav className='desktop'>
						<ul className='mr-8'>
							{navLinks.map(({ link, name }) => (
								<li key={name} className='group'>
									<a onClick={e => onClick(e, link)}>
										<span>{name}</span>
										<span className='underline ' />
									</a>
								</li>
							))}
						</ul>
					</nav>
					<a className='contact-btn group' onClick={e => onClick(e, 'contact')}>
						<div className='inner'>
							<span>Contact me</span>
						</div>
					</a>
				</div>
			</div>
		</header>
	)
}

export default NavBar
