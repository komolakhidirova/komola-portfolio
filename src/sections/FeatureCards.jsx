import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
	return (
		<section className='w-full padding-x-lg' id='feature_cards'>
			<div className='mx-auto grid-3-cols'>
				{abilities.map(({ color, title, desc }) => (
					<div
						key={title}
						className='card-border rounded-xl p-8 flex flex-col gap-4'
					>
						{/* <div className='size-15 flex items-center justify-center rounded-full bg-white '>
							<img src={imgPath} alt={title} />
						</div> */}
						<h3 className={`text-2xl font-bold mt-2 ${color}`}>{title}</h3>
						<p className='text-white-50 '>{desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default FeatureCards
