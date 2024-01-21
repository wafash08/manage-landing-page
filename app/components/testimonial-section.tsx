import Image from 'next/image';
import { TESTIMONIALS } from '../data';
import CTAButton from './cta-button';

export default function TestimonialSection() {
	return (
		<section className='mb-10 md:mb-[180px]'>
			<h2 className='text-primary-dark-blue font-medium text-[30px] md:text-[38px] text-center mb-14 md:mb-[72px]'>
				What they&apos;ve said
			</h2>
			<ul
				id='testimonial'
				className='flex gap-[30px] overflow-auto snap-x snap-mandatory py-9 mb-12 px-[18px] md:px-0'
			>
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
	);
}
