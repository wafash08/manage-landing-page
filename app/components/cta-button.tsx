import clsx from 'clsx';
import { ReactNode } from 'react';

export default function CTAButton({
	children,
	variant = 'orange',
}: {
	children: ReactNode;
	variant?: 'orange' | 'white';
}) {
	return (
		<button
			type='button'
			className={clsx(
				'group relative px-[34px] py-[14px] rounded-full text-xs shadow-md',
				variant === 'orange' &&
					'bg-primary-bright-red text-neutral-very-light-gray shadow-primary-bright-red/25',
				variant === 'white' &&
					'bg-neutral-very-light-gray text-primary-bright-red shadow-white/25'
			)}
		>
			<span>{children}</span>
			<div className='absolute inset-0 rounded-full transition-colors bg-transparent group-hover:bg-white/10' />
		</button>
	);
}
