import Image from 'next/image';
import Container from './components/container';
import CTAButton from './components/cta-button';

export default function Home() {
	return (
		<main>
			<section className='relative pt-[220px]'>
				<div className='absolute -top-1/4 -right-48 -z-10'>
					<svg xmlns='http://www.w3.org/2000/svg' width='814' height='814'>
						<rect
							width='436'
							height='970'
							x='774'
							y='-62'
							fill='#FFF0EC'
							fill-rule='evenodd'
							rx='218'
							transform='rotate(45 718.814 -291.157)'
						/>
					</svg>
				</div>
				<Container className='flex items-center'>
					<div className='flex-1'>
						<h1 className='text-[52px] text-primary-dark-blue font-medium leading-[64px] mb-8'>
							<p>Bring everyone</p>
							<p>together to build</p>
							<p>better products.</p>
						</h1>
						<p className='text-base text-neutral-dark-grayish-blue font-normal leading-[24px] mb-10'>
							<p>Manage makes it simple for software teams</p>
							<p>to plan day-to-day tasks while keeping the</p>
							<p>larger team goals in view.</p>
						</p>
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
						/>
					</div>
				</Container>
			</section>
		</main>
	);
}
