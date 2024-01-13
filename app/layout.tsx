import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import clsx from 'clsx';
import Header from './components/header';
import './globals.css';

const be_vietnam_pro = Be_Vietnam_Pro({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Frontend Mentor | Manage landing page',
	description:
		'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={clsx(be_vietnam_pro.className, 'overflow-x-hidden')}>
				<Header />
				{children}
			</body>
		</html>
	);
}