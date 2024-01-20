import { FEATURES } from '../data';
import Container from './container';

export default function FeaturesSection() {
	return (
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
	);
}
