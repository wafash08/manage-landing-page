import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import clsx from 'clsx';
import Header from './components/header';
import './globals.css';
import Footer from './components/footer';

const be_vietnam_pro = Be_Vietnam_Pro({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Frontend Mentor | Manage landing page',
	description:
		'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
	metadataBase: new URL('https://manage-landing-page-mu-seven.vercel.app'),
	openGraph: {
		title: 'Manage landing page',
		description:
			'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
		url: 'https://manage-landing-page-mu-seven.vercel.app',
		siteName: 'Manage landing page',
		images: [
			{
				url: 'https://manage-landing-page-mu-seven.vercel.app/og.png',
				width: 580,
				height: 549,
			},
		],
		locale: 'id_ID',
		type: 'website',
	},
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
				<Footer />
			</body>
		</html>
	);
}
