import { useGLTF } from '@react-three/drei'
import React from 'react'

export function UI(props) {
	const { nodes, materials } = useGLTF('/models/ui-transformed.glb')
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cube_Material001_0.geometry}
				material={materials.PaletteMaterial001}
				rotation={[Math.PI, 0, Math.PI]}
				scale={[-11.413, 8.012, 0.265]}
			/>
		</group>
	)
}

useGLTF.preload('/models/ui-transformed.glb')
