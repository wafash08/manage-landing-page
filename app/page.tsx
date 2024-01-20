import Container from './components/container';
import CTAButton from './components/cta-button';
import BannerSection from './components/banner-section';
import FeaturesSection from './components/features-section';
import TestimonialSection from './components/testimonial-section';

export default function Home() {
	return (
		<main className='overflow-x-hidden'>
			<BannerSection />
			<FeaturesSection />
			<TestimonialSection />
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
