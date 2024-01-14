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
				'px-[34px] py-[14px] transition-opacity rounded-full text-xs shadow-md',
				variant === 'orange' &&
					'bg-primary-bright-red text-neutral-very-light-gray shadow-primary-bright-red/75 hover:opacity-75',
				variant === 'white' &&
					'bg-white text-primary-bright-red shadow-white hover:opacity-90'
			)}
		>
			{children}
		</button>
	);
}
