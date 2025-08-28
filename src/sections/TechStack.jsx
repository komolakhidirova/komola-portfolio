import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'

const TechStack = () => {
	useGSAP(() => {
		gsap.fromTo(
			'.tech-card',
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'power2.inOut',
				stagger: 0.2,
				scrollTrigger: {
					trigger: '#skills',
					start: 'top center',
				},
			}
		)
	})
	return (
		<div id='skills' className='flex-center section-padding'>
			<div className='w-full h-full md:px-10 px-5'>
				<TitleHeader title='My Technical Stack' sub='Skills & Tools' />
				<div className='tech-grid'>
					{techStackImgs.map(techStackIcon => (
						<div
							key={techStackIcon.name}
							className='tech-card group rounded-lg '
						>
							<aside className='card-front'>
								<div className='tech-card-content'>
									<div className='tech-icon-wrapper'>
										<img
											src={techStackIcon.imgPath}
											alt={techStackIcon.name}
											className={techStackIcon.size && 'p-12'}
										/>
									</div>
									<div className='padding-x w-full'>
										<p>{techStackIcon.name}</p>
									</div>
								</div>
							</aside>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TechStack
