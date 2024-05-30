'use client'
import {
	AccumulativeShadows,
	Center,
	Environment,
	OrbitControls,
	RandomizedLight,
	useGLTF
} from '@react-three/drei'
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

const Backdrop = () => (
	<AccumulativeShadows
		temporal
		frames={60}
		alphaTest={0.85}
		scale={10}
		rotation={[Math.PI / 2, 0, 0]}
		position={[0, 0, -0.14]}
	>
		<RandomizedLight
			amount={4}
			radius={9}
			intensity={0.75}
			ambient={0.25}
			position={[5, 5, -10]}
		/>
	</AccumulativeShadows>
)

const CanvasComponent = ({ fov = 25, position = [-1, 0, 2.5] }: Props) => {
	return (
		<ThreeCanvas camera={{ position, fov }} className='h-full'>
			<ambientLight intensity={1.0} />
			<Environment preset='city' />
			<Center>
				<TShirt />
				<Backdrop />
			</Center>
			<OrbitControls />
		</ThreeCanvas>
	)
}

export default CanvasComponent
