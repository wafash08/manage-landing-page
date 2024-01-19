'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Container from './container';
import { Logo, LogoMobile } from './icons';
import CTAButton from './cta-button';

function useScroll(threshold = 0) {
	const [isScrolled, setScrolled] = useState<boolean>(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > threshold);
		};

		document.addEventListener('scroll', onScroll);
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, [threshold]);

	return isScrolled;
}

const LINKS = [
	{ href: '#', label: 'Pricing' },
	{ href: '#', label: 'Products' },
	{ href: '#', label: 'About us' },
	{ href: '#', label: 'Careers' },
	{ href: '#', label: 'Community' },
];

export default function Header() {
	const isScrolled = useScroll();
	const [open, setOpen] = useState(false);

	const handleOpenMenu = () => {
		setOpen(!open);
	};

	useEffect(() => {
		if (open) {
			document.body.classList.add('overflow-y-hidden');
		} else {
			document.body.classList.remove('overflow-y-hidden');
		}
	}, [open]);

	return (
		<header
			className={clsx(
				'fixed top-0 left-0 z-50 w-full py-4 px-5 mt-5 md:mt-10 transition-header duration-300',
				isScrolled
					? 'bg-white/50 backdrop-blur-md -translate-y-5 md:-translate-y-10'
					: 'bg-transparent'
			)}
		>
			<Container className='flex justify-between items-center'>
				<Link href='/' className='flex items-center'>
					<span className='sr-only'>Manage Home Page</span>
					<Logo className='hidden md:block text-primary-dark-blue' />
					<LogoMobile className='block md:hidden text-primary-dark-blue' />
				</Link>

				<nav className='hidden md:block'>
					<ul className='flex items-center gap-8'>
						{LINKS.map(({ href, label }) => {
							return (
								<li key={label}>
									<Link
										href={href}
										className='block text-primary-dark-blue font-medium text-xs transition-colors hover:text-neutral-dark-grayish-blue'
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				<div className='hidden md:block'>
					<CTAButton>Get Started</CTAButton>
				</div>

				<div className='flex items-center md:hidden'>
					<button
						type='button'
						onClick={handleOpenMenu}
						className='w-10 h-10 inline-flex items-center justify-center'
					>
						<span className='sr-only'>Open Menu</span>
						<svg
							width='25'
							height='25'
							viewBox='0 0 25 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								width='25'
								height='4'
								fill='#242D52'
								className={clsx(
									'transition-transform',
									open ? 'rotate-45 origin-[2px_6px]' : 'rotate-0'
								)}
							/>
							<rect
								y='7'
								width='25'
								height='4'
								fill='#242D52'
								className={clsx(
									'transition-[opacity_transform]',
									open
										? '-translate-x-full opacity-0'
										: 'translate-x-0 opacity-100'
								)}
							/>
							<rect
								y='14'
								width='25'
								height='4'
								fill='#242D52'
								className={clsx(
									'transition-transform',
									open ? '-rotate-45 origin-[6px_13px]' : 'rotate-0'
								)}
							/>
						</svg>
					</button>
				</div>

				<div
					className={clsx(
						'block md:hidden absolute w-full h-screen top-0 left-0 bg-transparent transition-[transform_background-image]',
						isScrolled ? 'mt-[74px]' : 'mt-[78px]',
						open ? 'translate-x-0' : 'translate-x-full pointer-events-none',
						open && 'bg-gradient-to-b from-transparent via-black/10 to-black/30'
					)}
				>
					<nav className='bg-white w-[325px] mx-auto py-11'>
						<ul className='flex flex-col'>
							{LINKS.map(({ href, label }) => {
								return (
									<li key={label} className='text-center mb-7 last:mb-0'>
										<Link href={href} className='block text-primary-dark-blue'>
											{label}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
}
