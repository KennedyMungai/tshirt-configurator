import CanvasComponent from '@/components/canvas'

const Home = () => {
	return (
		<main className='h-screen'>
			<CanvasComponent position={[-1, 0, 2.5]} fov={25} />
		</main>
	)
}

export default Home
