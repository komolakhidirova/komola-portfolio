import React from 'react'

const HeroLights = () => {
	return (
		<>
			<spotLight
				position={[0, 0, 15]}
				angle={0.8}
				intensity={120}
				penumbra={0.4}
				color='#f1a4ea'
				target-position={[0, -2, 0]}
			/>

			<directionalLight position={[0, 10, 5]} intensity={0.6} color='#dec0ff' />

			<pointLight
				position={[0, -5, 5]}
				intensity={40}
				color='#9c84ec'
				distance={12}
			/>

			<pointLight
				position={[-8, 0, 5]}
				intensity={30}
				color='#8664f6'
				distance={10}
			/>

			<pointLight
				position={[8, 0, 5]}
				intensity={30}
				color='#ff79c6'
				distance={10}
			/>

			<ambientLight intensity={0.4} color='#5555aa' />

			<spotLight
				position={[0, -8, 3]}
				angle={Math.PI / 3}
				intensity={50}
				penumbra={0.5}
				color='#9575cd'
				target-position={[0, -2, 0]}
			/>
		</>
	)
}

export default HeroLights
