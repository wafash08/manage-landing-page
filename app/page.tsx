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

const TESTIMONIALS = [
	{
		avatar: '/images/avatar-anisha.png',
		name: 'Anisha Li',
		testminoy:
			'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
	},
	{
		avatar: '/images/avatar-ali.png',
		name: 'Ali Bravo',
		testminoy:
			'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
	},
	{
		avatar: '/images/avatar-richard.png',
		name: 'Richard Watts',
		testminoy:
			"“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”",
	},
	{
		avatar: '/images/avatar-shanai.png',
		name: 'Shanai Gough',
		testminoy:
			'“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
	},
];

export default function Home() {
	return (
		<main className='overflow-x-hidden'>
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
						<h4 className='text-base text-center md:text-left text-neutral-dark-grayish-blue font-normal leading-[24px] mb-7 md:mb-10'>
							<p>Manage makes it simple for software teams</p>
							<p>to plan day-to-day tasks while keeping the</p>
							<p>larger team goals in view.</p>
						</h4>
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
			<section className='mb-16 md:mb-36 relative'>
				<Container className='flex flex-col md:flex-row items-center md:items-start gap-14 md:gap-0'>
					<div className='flex-1 flex flex-col items-center md:items-start'>
						<h2 className='w-[240px] md:w-[422px] text-[30px] md:text-[38px] text-center md:text-left font-medium text-primary-dark-blue leading-[44px] mb-[14px] md:mb-[30px]'>
							What&apos;s different about Manage?
						</h2>
						<p className='max-w-[326px] text-center md:text-left text-base font-normal text-neutral-dark-grayish-blue leading-loose md:leading-normal'>
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
									className='flex items-start gap-7 text-base mb-11 md:mb-10'
								>
									<span className='hidden md:block bg-primary-bright-red px-6 py-2 rounded-full text-neutral-very-light-gray'>
										0{idx + 1}
									</span>
									<div>
										<p className='text-primary-dark-blue font-medium mb-4 ml-2 md:ml-0 bg-neutral-very-pale-red md:bg-transparent rounded-s-full md:rounded-s-none'>
											<span className='inline-block md:hidden bg-primary-bright-red px-6 py-2 rounded-full text-neutral-very-light-gray mr-4 md:mr-0'>
												0{idx + 1}
											</span>
											<span>{feature.title}</span>
										</p>
										<p className='text-neutral-dark-grayish-blue leading-[26px] ml-2 md:ml-0'>
											{feature.description}
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</Container>
				<div className='hidden md:block absolute -z-10 top-1/2 -left-[calc(33.3%+40px)]'>
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
				</div>
			</section>
			<section className='mb-10 md:mb-[180px]'>
				<h3 className='text-primary-dark-blue font-medium text-[30px] md:text-[38px] text-center mb-14 md:mb-[72px]'>
					What they&apos;ve said
				</h3>
				<ul className='flex gap-[30px] overflow-auto snap-x snap-mandatory py-9 mb-12'>
					{TESTIMONIALS.map(({ avatar, name, testminoy }) => {
						return (
							<li
								key={name}
								className='flex-shrink-0 w-full max-w-[538px] h-[220px] snap-center snap-always bg-[#FAFAFA] rounded px-4'
							>
								<div className='w-[72px] -mt-9 mb-6 aspect-square object-cover overflow-hidden mx-auto'>
									<Image
										src={avatar}
										alt={`Avatar of ${name}`}
										width={144}
										height={144}
									/>
								</div>
								<p className='text-center mb-[18px] text-primary-dark-blue font-medium'>
									{name}
								</p>
								<p className='text-center text-sm md:text-base leading-loose md:leading-normal text-neutral-dark-grayish-blue'>
									{testminoy}
								</p>
							</li>
						);
					})}
				</ul>
				<div className='flex justify-center'>
					<CTAButton>Get Started</CTAButton>
				</div>
			</section>
			<section className='relative h-[405px] md:h-[220px] bg-primary-bright-red flex items-center bg-simplify-section-mobile lg:bg-simplify-section-desktop bg-left lg:bg-[220px_-120px] bg-no-repeat'>
				<Container className='flex flex-col md:flex-row md:justify-between items-center px-6 md:px-0'>
					<h2 className='font-bold text-[38px] text-neutral-very-light-gray text-center md:text-left max-w-[460px] leading-[50px] md:leading-tight mb-6 md:mb-0'>
						Simplify How your team works today
					</h2>
					<div>
						<CTAButton variant='white'>Get Started</CTAButton>
					</div>
				</Container>
			</section>
		</main>
	);
}
