'use client'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

type Props = {
	position: [number, number, number]
	fov: number
}

const Shirt = () => (
	<mesh>
		<boxGeometry args={[1, 1, 1]} />
		<meshNormalMaterial />
	</mesh>
)

const CanvasComponent = ({ fov = 25, position = [-1, 0, 2.5] }: Props) => {
	return (
		<ThreeCanvas camera={{ position, fov }}>
			<Shirt />
		</ThreeCanvas>
	)
}

export default CanvasComponent
