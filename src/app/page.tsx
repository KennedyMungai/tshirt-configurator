import CanvasComponent from '@/components/canvas'
import Overlay from '@/components/overlay'

const Home = () => {
	return (
		<main className='h-screen'>
			<CanvasComponent position={[-1, 0, 2.5]} fov={25} />
			<Overlay />
		</main>
	)
}

export default Home
