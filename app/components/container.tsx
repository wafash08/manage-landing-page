import clsx from 'clsx';

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: React.HTMLAttributes<HTMLDivElement>['className'];
}) {
	return (
		<div className={clsx('w-full max-w-[1110px] mx-auto', className)}>
			{children}
		</div>
	);
}
