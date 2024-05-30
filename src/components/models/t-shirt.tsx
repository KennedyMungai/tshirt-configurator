import { useGLTF } from '@react-three/drei'

const Component = (props) => {
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

useGLTF.preload('../../../public/t-shirt.glb')

export default Component
