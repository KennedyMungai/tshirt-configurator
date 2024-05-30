import { Logo } from '@pmndrs/branding'

const Overlay = () => {
	return (
		<div className='z-10 container'>
			<header className='absolute top-0 left-0 text-orange-500 text-4xl font-semibold'>
				<Logo width={40} height={40} />
			</header>
		</div>
	)
}

export default Overlay
