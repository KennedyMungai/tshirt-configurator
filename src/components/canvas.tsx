'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

type Props = {
	position: [number, number, number]
	fov: number
}

const Shirt = () => (
	<mesh>
		<boxGeometry args={[0.9, 0.9, 0.9]} />
		<meshNormalMaterial />
	</mesh>
)

const CanvasComponent = ({ fov = 25, position = [-1, 0, 2.5] }: Props) => {
	return (
		<ThreeCanvas camera={{ position, fov }} className='h-full'>
			<Shirt />
			<OrbitControls />
		</ThreeCanvas>
	)
}

export default CanvasComponent
