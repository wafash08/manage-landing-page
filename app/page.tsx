import Image from 'next/image';
import Container from './components/container';
import CTAButton from './components/cta-button';

const FEATURES = [
	{
		title: 'Track company-wide progress',
		description:
			'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
	},
	{
		title: 'Advanced built-in reports',
		description:
			'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
	},
	{
		title: 'Everything you need in one place',
		description:
			'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
	},
];

export default function Home() {
	return (
		<main>
			<section className='relative pt-[220px] mb-32'>
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
			<section className='mb-36'>
				<Container className='flex'>
					<div className='flex-1'>
						<h2 className='max-w-[422px] text-[38px] font-medium text-primary-dark-blue leading-[44px] mb-[30px]'>
							What’s different about Manage?
						</h2>
						<p className='max-w-[326px] text-base font-normal text-neutral-dark-grayish-blue'>
							Manage provides all the functionality your team needs, without the
							complexity. Our software is tailor-made for modern digital product
							teams.
						</p>
					</div>
					<ul className='flex-1'>
						{FEATURES.map((feature, idx) => {
							return (
								<li
									key={feature.title}
									className='flex items-start gap-7 text-base mb-10'
								>
									<span className='bg-primary-bright-red px-6 py-2 rounded-full text-neutral-very-light-gray'>
										0{idx + 1}
									</span>
									<div>
										<p className='text-primary-dark-blue font-medium py-2 mb-4'>
											{feature.title}
										</p>
										<p className='text-neutral-dark-grayish-blue leading-[26px]'>
											{feature.description}
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</Container>
			</section>
		</main>
	);
}
