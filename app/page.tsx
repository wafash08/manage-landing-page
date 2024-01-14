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
							fillRule='evenodd'
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
			<section className='mb-36 relative'>
				<Container className='flex'>
					<div className='flex-1'>
						<h2 className='max-w-[422px] text-[38px] font-medium text-primary-dark-blue leading-[44px] mb-[30px]'>
							What&apos;s different about Manage?
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
				<div className='absolute -z-10 top-1/2 -left-[calc(33.3%+40px)]'>
					<svg xmlns='http://www.w3.org/2000/svg' width='814' height='814'>
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
			<section className='mb-[180px]'>
				<h3 className='text-primary-dark-blue font-medium text-[38px] text-center mb-[72px]'>
					What they&apos;ve said
				</h3>
				<ul className='flex gap-[30px] overflow-auto snap-x py-9 mb-12'>
					{TESTIMONIALS.map(({ avatar, name, testminoy }) => {
						return (
							<li
								key={name}
								className='flex-shrink-0 w-full max-w-[538px] h-[220px] snap-center bg-[#FAFAFA] rounded px-4'
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
								<p className='text-center text-neutral-dark-grayish-blue'>
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
		</main>
	);
}
