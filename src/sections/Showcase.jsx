import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
	const sectionRef = useRef(null)
	const project1Ref = useRef(null)
	const project2Ref = useRef(null)
	const project3Ref = useRef(null)

	useGSAP(() => {
		const projects = [
			project1Ref.current,
			project2Ref.current,
			project3Ref.current,
		]

		projects.forEach((project, i) => {
			gsap.fromTo(
				project,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (i + 1),
					scrollTrigger: {
						trigger: project,
						start: 'top bottom-=100',
					},
				}
			)
		})

		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.5 }
		)
	}, [])

	return (
		<section ref={sectionRef} id='work' className='app-showcase'>
			<div className='w-full'>
				<div className='showcaselayout'>
					<div ref={project1Ref} className='first-project-wrapper'>
						<div className='image-wrapper'>
							<img src='/images/project1.png' alt='Ryde' />
						</div>
						<div className='text-content'>
							<a
								href='https://learning-platform-flax-kappa.vercel.app'
								target='_blank'
								className='flex hover:text-gray-300'
							>
								<h2>
									Your Personalized Learning Path, Powered by AI. Master any
									skill with UpSkilla.
								</h2>
								<img src='/images/link.svg' className='h-6' />
							</a>
							<p className='text-white-50 '>
								A platform built with Next.js, React, Clerk, Neon, Drizzle ORM &
								TailwindCSS for a seamless, intuitive learning experience.
							</p>
						</div>
					</div>
					<div className='project-list-wrapper overflow-hidden'>
						<div ref={project2Ref} className='project'>
							<div className='image-wrapper bg-[#d8e6ff]'>
								<img src='/images/project2.png' alt='LMP' />
							</div>
							<a
								href='https://travel-agency-eight-theta.vercel.app'
								target='_blank'
								className='relative hover:text-gray-300 '
							>
								<h2>Your Dream Journey, Curated by AI.</h2>
								<img
									src='/images/link.svg'
									className='h-6 absolute left-40 top-1'
								/>
							</a>
						</div>
						<div ref={project3Ref} className='project'>
							<div className='image-wrapper bg-[#e7ffda]'>
								<img src='/images/project3.png' alt='YCD' />
							</div>
							<a
								href='https://velvet-pour-kappa.vercel.app'
								target='_blank'
								className='relative hover:text-gray-300'
							>
								<h2>Delicious experience from Velvet Pour.</h2>
								<img
									src='/images/link.svg'
									className='h-6 absolute left-40 top-1'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Showcase
