import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import HeroLights from './models/HeroLights'
import { UI } from './models/Ui'

const HeroExperience = () => {
	const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

	return (
		<Canvas camera={{ position: [0, 0, 19], fov: 90 }}>
			<OrbitControls
				enablePan={false}
				enableZoom={!isTablet}
				maxDistance={20}
				minDistance={5}
				minPolarAngle={Math.PI / 5}
				maxPolarAngle={(Math.PI * 4) / 5}
				minAzimuthAngle={-Math.PI / 4}
				maxAzimuthAngle={Math.PI / 4}
			/>
			<HeroLights />
			<group
				scale={isMobile ? 0.7 : 0.9}
				position={[0, -2, 0]}
				rotation={[0, 75.8, 0]}
			>
				<UI />
			</group>
		</Canvas>
	)
}

export default HeroExperience
