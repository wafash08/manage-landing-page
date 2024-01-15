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
		<footer className='bg-neutral-very-dark-blue py-12 md:py-16 px-6'>
			<Container className='flex flex-col md:flex-row md:justify-between'>
				<div className='order-3 md:order-none flex flex-col-reverse gap-14 md:gap-0 md:flex-col justify-between px-4 md:px-0'>
					<Link href='/' className='block mx-auto md:mx-0'>
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
					<form className='md:self-end'>
						<div className='flex gap-2'>
							<input
								type='text'
								name='subscription'
								id='subscription'
								placeholder='Updates in your inbox...'
								className='text-xs text-neutral-dark-grayish-blue py-4 px-5 rounded-full w-full md:w-[200px]'
							/>
							<button
								type='submit'
								className='group relative py-4 px-6 rounded-full text-xs text-neutral-very-light-gray bg-primary-bright-red'
							>
								<span>Go</span>
								<div className='absolute inset-0 rounded-full bg-transparent transition-colors group-hover:bg-white/10' />
							</button>
						</div>
					</form>
					<p className='hidden md:block self-end text-xs text-neutral-dark-grayish-blue font-medium'>
						Copyright 2020. All Rights Reserved
					</p>
				</div>
				<p className='md:hidden order-4 text-xs text-center text-neutral-dark-grayish-blue font-medium mt-14'>
					Copyright 2020. All Rights Reserved
				</p>
			</Container>
		</footer>
	);
}
