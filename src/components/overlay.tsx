import { Logo } from '@pmndrs/branding'
import { AiOutlineHighlight, AiOutlineShopping } from 'react-icons/ai'

const Overlay = () => {
	return (
		<div className='z-10 container absolute top-0 left-0 h-full w-full'>
			<header className='flex justify-between p-10 text-white'>
				<Logo width={40} height={40} />
				<AiOutlineShopping size='3rem' />
			</header>

			<section key='main'>
				<div className='flex flex-col'>
					<div className='w-60 pl-10'>
						<h1 className='text-9xl italic uppercase font-bold text-[#f85]'>
							LET&apos;S DO IT
						</h1>
					</div>
					<div className='absolute right-2 top-60'>
						<div className='w-72 flex flex-col gap-20'>
							<p className='text-2xl text-orange-400 hidden lg:block'>
								Create your unique and exclusive shirt with our
								brand-new customization tool.{' '}
								<strong>Unleash your imagination</strong> and
								define your own style
							</p>
							<button className='bg-black text-white rounded-md px-2 py-1 gap-2 flex items-center justify-center'>
								CUSTOMIZE IT{' '}
								<AiOutlineHighlight size='1.3rem' />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Overlay
