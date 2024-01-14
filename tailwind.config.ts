import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'bright-red': '#F25F3A',
					'dark-blue': '#242D52',
				},
				neutral: {
					'dark-grayish-blue': '#9095A7',
					'very-dark-blue': '#1D1E25',
					'very-pale-red': '#FFEFEB',
					'very-light-gray': '#FAFAFA',
				},
			},
			transitionProperty: {
				header: 'background-color, transform',
			},
			backgroundImage: {
				'simplify-section-desktop':
					'url("/images/bg-simplify-section-desktop.svg")',
				'simplify-section-mobile':
					'url("/images/bg-simplify-section-mobile.svg")',
			},
		},
	},
	plugins: [],
};
export default config;
