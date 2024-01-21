import Image from 'next/image';
import Container from './container';
import CTAButton from './cta-button';

export default function BannerSection() {
	return (
		<section className='relative pt-[104px] md:pt-[220px] mb-24 md:mb-32'>
			<div className='absolute top-0 right-0 md:-top-1/4 md:-right-48 -z-10'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='814'
					height='814'
					className='hidden md:block'
				>
					<rect
						width='436'
						height='970'
						x='774'
						y='-62'
						fill='#FFF0EC'
						fillRule='evenodd'
						rx='218'
						transform='rotate(45 718.814 -291.157)'
					/>
				</svg>
				<svg
					width='323'
					height='342'
					viewBox='0 0 323 342'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='md:hidden'
				>
					<path
						d='M446.017 79.7116C496.59 29.1386 496.59 -52.8565 446.017 -103.429C395.444 -154.002 313.449 -154.002 262.876 -103.429L38.5705 120.876C-12.0025 171.449 -12.0025 253.444 38.5705 304.017C89.1435 354.59 171.139 354.59 221.712 304.017L446.017 79.7116Z'
						fill='#FFF0EC'
					/>
				</svg>
			</div>
			<Container className='flex flex-col-reverse gap-2 md:gap-0 md:flex-row items-center'>
				<div className='flex-1 flex flex-col items-center md:items-start'>
					<h1 className='text-[38px] md:text-[52px] text-center md:text-left w-[320px] leading-[50px] md:w-[440px] text-primary-dark-blue font-medium md:leading-[64px] mb-2 md:mb-8'>
						Bring everyone together to build better products.
					</h1>
					<div className='text-base text-center md:text-left text-neutral-dark-grayish-blue font-normal leading-[24px] mb-7 md:mb-10'>
						<p>Manage makes it simple for software teams</p>
						<p>to plan day-to-day tasks while keeping the</p>
						<p>larger team goals in view.</p>
					</div>
					<div>
						<CTAButton>Get Started</CTAButton>
					</div>
				</div>
				<div className='flex-1'>
					<Image
						src='/images/illustration-intro.svg'
						alt='Intro Illustration'
						width={580}
						height={525}
						priority
					/>
				</div>
			</Container>
			<div className='md:hidden absolute right-0 bottom-0 -z-10'>
				<svg
					width='133'
					height='317'
					viewBox='0 0 133 317'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M291.837 144.925C324.96 111.802 324.96 58.0984 291.837 24.9751C258.714 -8.14823 205.01 -8.14823 171.887 24.9751L24.9752 171.887C-8.14811 205.01 -8.14812 258.713 24.9752 291.837C58.0985 324.96 111.802 324.96 144.925 291.837L291.837 144.925Z'
						fill='#FFF0EC'
					/>
				</svg>
			</div>
		</section>
	);
}
