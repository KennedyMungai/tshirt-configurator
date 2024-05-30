'use client'
import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

type Props = {
	position: [number, number, number]
	fov: number
}

const TShirt = (props) => {
	const { nodes, materials } = useGLTF('/t-shirt.glb')
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	)
}

const CanvasComponent = ({ fov = 25, position = [-1, 0, 2.5] }: Props) => {
	return (
		<ThreeCanvas camera={{ position, fov }} className='h-full'>
			<ambientLight intensity={0.75} />
			<Center>
				<TShirt />
			</Center>

			<OrbitControls />
		</ThreeCanvas>
	)
}

export default CanvasComponent
