import Link from 'next/link';
import Container from './container';
import {
	FacebookIcon,
	InstagramIcon,
	Logo,
	PinterestIcon,
	TwitterIcon,
	YoutubeIcon,
} from './icons';
import SubscribeForm from './subscribe-form';

const SOCIAL_MEDIA_LIST = [
	{ name: 'facebook', icon: <FacebookIcon /> },
	{ name: 'youtube', icon: <YoutubeIcon /> },
	{ name: 'twitter', icon: <TwitterIcon /> },
	{ name: 'pinterest', icon: <PinterestIcon /> },
	{ name: 'instagram', icon: <InstagramIcon /> },
];

const LINKS_1 = [
	{ label: 'Home' },
	{ label: 'Pricing' },
	{ label: 'Products' },
	{ label: 'About Us' },
];

const LINKS_2 = [
	{ label: 'Careers' },
	{ label: 'Community' },
	{ label: 'Privacy Policy' },
];

export default function Footer() {
	return (
		<footer className='bg-neutral-very-dark-blue pt-12 pb-6 md:pt-16 md:pb-8 px-6'>
			<Container className='flex flex-col md:flex-row md:justify-between'>
				<div className='order-3 md:order-none flex flex-col-reverse gap-14 md:gap-0 md:flex-col justify-between px-4 md:px-0'>
					<Link href='/' className='block mx-auto md:mx-0'>
						<span className='sr-only'>Go to Manage home page</span>
						<Logo className='text-white' />
					</Link>
					<ul className='flex items-center justify-between md:justify-normal gap-3'>
						{SOCIAL_MEDIA_LIST.map(({ icon, name }) => {
							return (
								<li key={name}>
									<span className='sr-only'>{name}</span>
									{icon}
								</li>
							);
						})}
					</ul>
				</div>
				<div className='order-2 mb-14 md:mb-0 md:order-none flex md:gap-56 justify-between md:justify-normal px-6 md:px-0'>
					<ul className='flex flex-col gap-4'>
						{LINKS_1.map(({ label }) => {
							return (
								<li
									key={label}
									className='text-neutral-very-light-gray text-sm'
								>
									{label}
								</li>
							);
						})}
					</ul>
					<ul className='flex flex-col gap-4'>
						{LINKS_2.map(({ label }) => {
							return (
								<li
									key={label}
									className='text-neutral-very-light-gray text-sm'
								>
									{label}
								</li>
							);
						})}
					</ul>
				</div>
				<div className='order-1 mb-14 md:mb-0 md:order-none flex flex-col justify-between'>
					<div className='md:self-end'>
						<SubscribeForm />
					</div>
					<p className='hidden md:block self-end text-xs text-neutral-dark-grayish-blue font-medium'>
						Copyright 2020. All Rights Reserved
					</p>
				</div>
				<p className='md:hidden order-4 text-xs text-center text-neutral-dark-grayish-blue font-medium mt-14'>
					Copyright 2020. All Rights Reserved
				</p>
			</Container>
			<p className='flex flex-wrap justify-center text-neutral-very-light-gray tracking-wide mt-8 md:mt-12'>
				<span className='mr-2'>Challenge by</span>
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					className='underline'
				>
					Frontend Mentor
				</a>
				<span className='mr-2'>. Coded by</span>
				<a
					href='https://github.com/wafash08'
					target='_blank'
					rel='noreferrer'
					className='underline'
				>
					Wafa Saefulhaq
				</a>
				.
			</p>
		</footer>
	);
}
