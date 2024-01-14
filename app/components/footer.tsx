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
		<footer className='bg-neutral-very-dark-blue py-16'>
			<Container className='flex justify-between'>
				<div className='flex flex-col justify-between'>
					<Link href='/' className='block'>
						<Logo />
					</Link>
					<ul className='flex items-center gap-3'>
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
				<div className='flex gap-56'>
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
				<div className='flex flex-col justify-between'>
					<form className='self-end'>
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
					<p className='self-end text-xs text-neutral-dark-grayish-blue font-medium'>
						Copyright 2020. All Rights Reserved
					</p>
				</div>
			</Container>
		</footer>
	);
}
