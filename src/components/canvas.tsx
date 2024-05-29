'use client'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

const Shirt = () => (
	<mesh>
		<boxGeometry args={[1, 1, 1]} />
		<meshNormalMaterial />
	</mesh>
)

const CanvasComponent = () => {
	return (
		<ThreeCanvas>
			<Shirt />
		</ThreeCanvas>
	)
}

export default CanvasComponent
