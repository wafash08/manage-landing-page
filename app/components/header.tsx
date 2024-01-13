'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from './container';
import { Logo } from './icons';
import CTAButton from './cta-button';
import clsx from 'clsx';

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
	return (
		<header
			className={clsx(
				'fixed top-0 left-0 z-50 w-full py-4 px-5 mt-10 transition-header duration-300',
				isScrolled
					? 'bg-white/50 backdrop-blur-md -translate-y-10'
					: 'bg-transparent'
			)}
		>
			<Container className='flex justify-between items-center'>
				<Link href='/' className='block'>
					<span className='sr-only'>Manage Home Page</span>
					<Logo />
				</Link>

				<nav>
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

				<div>
					<CTAButton>Get Started</CTAButton>
				</div>
			</Container>
		</header>
	);
}
