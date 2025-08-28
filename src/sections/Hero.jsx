import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from '../components/Button'
import HeroExperience from '../components/HeroExperience'

const Hero = () => {
	useGSAP(() => {
		gsap.fromTo(
			'.hero-text h1',
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
		)
	})

	return (
		<section id='hero' className='relative overflow-hidden'>
			<div className='absolute top-0 left-0 z-10'>
				<img src='/images/bg.png' alt='background' />
			</div>
			<div className='hero-layout'>
				<header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
					<div className='flex flex-col gap-7'>
						<p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
							Hi, I'm Komola! 🌐 Web developer
						</p>
						<div className='hero-text'>
							<h1>Great</h1>

							<div className='flex'>
								<div class='neon '>
									<span class='neon-text md:text-[70px] text-[40px] font-bold'>
										Development
									</span>
									<span class='gradient' />
									<span class='spotlight' />
								</div>
							</div>
							<h1 className='mt-2'>= Creativity </h1>
							<h1>+ Functionality</h1>
						</div>

						<Button
							className='md:w-80 md:h-16 w-60 h-12 '
							id='button'
							text='See my Work'
						/>
					</div>
				</header>
				<figure>
					<div className='hero-3d-layout'>
						<HeroExperience />
					</div>
				</figure>
			</div>
		</section>
	)
}

export default Hero
