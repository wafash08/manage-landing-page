import clsx from 'clsx';
import { ReactNode } from 'react';

export default function CTAButton({ children }: { children: ReactNode }) {
	return (
		<button
			type='button'
			className={clsx(
				'px-[34px] py-[14px] bg-primary-bright-red text-neutral-very-light-gray rounded-full text-xs shadow-md shadow-primary-bright-red/75',
				'transition-colors hover:bg-primary-bright-red/75'
			)}
		>
			{children}
		</button>
	);
}
