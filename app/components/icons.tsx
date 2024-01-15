export function Logo({
	className,
}: {
	className?: React.HTMLAttributes<HTMLElement>['className'];
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='146'
			height='24'
			className={className}
		>
			<g fill='none' fillRule='evenodd'>
				<path
					fill='#242D52'
					fillRule='nonzero'
					d='M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z'
				/>
				<g fill='#F3603C'>
					<path d='M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z' />
					<ellipse cx='12.814' cy='13.257' opacity='.5' rx='2.786' ry='2.857' />
				</g>
			</g>
		</svg>
	);
}

export function LogoMobile({
	className,
}: {
	className?: React.HTMLAttributes<HTMLElement>['className'];
}) {
	return (
		<svg
			width='109'
			height='18'
			viewBox='0 0 109 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M30.0795 12.7443V6.48475C30.0795 5.28909 30.3532 4.34667 30.9007 3.65673C31.4489 2.96678 32.1347 2.62181 32.9574 2.62181C34.5714 2.62181 35.3784 3.81746 35.3784 6.20877V12.7443H38.207V5.48091C38.207 3.64991 37.833 2.28139 37.0829 1.37385C36.3335 0.466303 35.2632 0.0129108 33.8714 0.0129108C32.9574 0.0129108 32.1213 0.190325 31.3644 0.545912C30.6117 0.897246 29.9546 1.42884 29.4497 2.09488H29.4004C28.6674 0.706647 27.4409 0.0129108 25.7192 0.0129108C24.9945 0.0129108 24.2967 0.177436 23.6258 0.508003C22.944 0.847121 22.3434 1.33306 21.866 1.93187H21.8286V0.20094H19V12.7314H21.8286V6.48475C21.8286 5.28909 22.1068 4.34667 22.6625 3.65673C23.2182 2.96678 23.9287 2.62181 24.7933 2.62181C26.4312 2.62181 27.2509 3.81746 27.2509 6.20877V12.7443H30.0795ZM45.861 12.9323C47.5408 12.9323 48.8504 12.3053 49.789 11.0505H49.8264V12.7314H52.5309V0.20094H49.7023V1.70593H49.6529C48.7143 0.576998 47.4429 0.0129108 45.8364 0.0129108C45.0423 0.00719383 44.2554 0.166745 43.5246 0.481692C42.7938 0.796638 42.1345 1.26028 41.5875 1.84392C41.0602 2.41255 40.6451 3.1025 40.34 3.91375C40.0314 4.74743 39.8765 5.63148 39.883 6.5219C39.883 7.47569 40.0349 8.35366 40.3392 9.15658C40.6444 9.95949 41.0602 10.6365 41.5875 11.1885C42.1238 11.7468 42.7697 12.1849 43.4834 12.4744C44.239 12.7833 45.0463 12.9389 45.861 12.9323ZM46.306 10.3234C45.2597 10.3234 44.4079 9.9701 43.749 9.26348C43.0908 8.55685 42.761 7.64704 42.761 6.53479C42.761 5.35581 43.1005 4.40885 43.7796 3.69388C44.4595 2.97892 45.3053 2.62181 46.318 2.62181C47.3224 2.62181 48.1564 2.9956 48.8198 3.74392C49.4824 4.493 49.8145 5.42329 49.8145 6.53479C49.8145 7.64704 49.4742 8.55685 48.7951 9.26348C48.1152 9.9701 47.2858 10.3234 46.306 10.3234ZM66.5833 12.7443V5.35581C66.5833 3.54149 66.1824 2.19723 65.3791 1.32305C64.5774 0.449623 63.4667 0.0129108 62.051 0.0129108C61.2634 0.00858546 60.484 0.175335 59.7654 0.501938C59.0504 0.827114 58.4171 1.31177 57.9128 1.91974H57.8754V0.200182H55.0468V12.7306H57.8754V6.43471C57.8754 5.23071 58.1656 4.29436 58.746 3.62489C59.3271 2.95617 60.1027 2.62181 61.0742 2.62181C61.5192 2.62181 61.8999 2.68019 62.217 2.79695C62.5341 2.91447 62.8123 3.10477 63.0509 3.36786C63.2902 3.63171 63.4667 3.98881 63.5819 4.44069C63.6971 4.89181 63.7547 5.44376 63.7547 6.0958V12.7443H66.5833ZM74.2254 12.9323C75.9052 12.9323 77.214 12.3053 78.1534 11.0505H78.1908V12.7314H80.8952V0.20094H78.0666V1.70593H78.0173C77.0786 0.576998 75.8064 0.0129108 74.2007 0.0129108C73.4065 0.00708986 72.6195 0.166591 71.8885 0.48154C71.1576 0.79649 70.4981 1.26018 69.9511 1.84392C69.4246 2.41255 69.0087 3.1025 68.7036 3.91375C68.3952 4.74748 68.2406 5.63153 68.2474 6.5219C68.2474 7.47569 68.3992 8.35366 68.7036 9.15658C69.0087 9.95949 69.4246 10.6365 69.9511 11.1885C70.4876 11.7469 71.1338 12.185 71.8478 12.4744C72.6031 12.7832 73.4109 12.9388 74.2254 12.9323ZM74.6696 10.3234C73.6241 10.3234 72.7714 9.9701 72.1133 9.26348C71.4544 8.55685 71.1245 7.64704 71.1245 6.53479C71.1245 5.35581 71.4649 4.40885 72.144 3.69388C72.8231 2.97892 73.6697 2.62181 74.6823 2.62181C75.6868 2.62181 76.5207 2.9956 77.1833 3.74392C77.846 4.493 78.1781 5.42329 78.1781 6.53479C78.1781 7.64704 77.8377 8.55685 77.1586 9.26348C76.4795 9.9701 75.6494 10.3234 74.6696 10.3234ZM88.9322 18C89.8297 18 90.6329 17.8939 91.3404 17.68C92.0487 17.467 92.644 17.1698 93.1257 16.7892C93.6101 16.4057 94.0169 15.931 94.3238 15.3911C94.6445 14.8291 94.8757 14.2194 95.0089 13.5844C95.1495 12.9323 95.2191 12.2174 95.2191 11.4395V0.20094H92.3905V1.5179H92.3411C91.8344 1.0266 91.2361 0.642562 90.5813 0.38821C89.9213 0.129696 89.2195 -0.00194446 88.5119 2.17032e-05C87.384 2.17032e-05 86.3714 0.271451 85.4739 0.815066C84.5764 1.35868 83.8778 2.11383 83.3797 3.07975C82.8816 4.04492 82.6326 5.13063 82.6326 6.33462C82.6326 7.5553 82.8943 8.63798 83.4171 9.58343C83.9399 10.5281 84.6587 11.2537 85.5726 11.7594C86.4865 12.2651 87.5157 12.5184 88.6607 12.5184C90.1917 12.5184 91.4399 12.0081 92.4032 10.9883H92.4526V12.3174C92.4526 13.2045 92.131 13.9399 91.4893 14.5253C90.8461 15.1106 89.9411 15.4032 88.7714 15.4032C87.9726 15.4032 87.2711 15.3032 86.6653 15.1022C86.0602 14.9013 85.3624 14.5882 84.5719 14.1621L83.9048 16.6952C84.5966 17.1137 85.3751 17.4352 86.2397 17.6611C87.1043 17.887 88.0018 18 88.9322 18ZM89.0309 9.8723C88.01 9.8723 87.1679 9.54325 86.5052 8.88666C85.8418 8.23084 85.5105 7.35059 85.5105 6.24668C85.5105 5.18522 85.8359 4.31938 86.4865 3.64991C87.1372 2.98119 87.9853 2.64683 89.0309 2.64683C90.0271 2.64683 90.8573 2.97664 91.5199 3.63777C92.1826 4.29815 92.5147 5.15565 92.5147 6.20877C92.5147 7.27098 92.1908 8.14668 91.5446 8.83662C90.8984 9.52657 90.06 9.8723 89.0309 9.8723ZM103.305 12.9323C104.459 12.9323 105.474 12.7193 106.35 12.2924C107.227 11.8663 107.945 11.2893 108.506 10.5615L106.53 8.84345C105.756 9.82984 104.73 10.3234 103.454 10.3234C102.549 10.3234 101.78 10.0679 101.15 9.55765C100.52 9.04816 100.115 8.34987 99.9331 7.46356H108.926C108.975 7.16256 109 6.78119 109 6.32174C109 5.1094 108.757 4.02672 108.271 3.07293C107.799 2.135 107.07 1.35535 106.171 0.827956C105.257 0.28434 104.203 0.0129108 103.009 0.0129108C102.192 0.00670117 101.381 0.166533 100.625 0.482983C99.8845 0.79687 99.2458 1.23358 98.7103 1.79388C98.1756 2.35417 97.7552 3.03578 97.4508 3.83793C97.1464 4.64161 96.9939 5.51503 96.9939 6.45973C96.9939 7.73954 97.2699 8.87453 97.8211 9.86547C98.373 10.8564 99.1269 11.6154 100.082 12.1423C101.037 12.6692 102.112 12.9323 103.305 12.9323ZM106.159 5.14276H99.9832C100.181 4.33985 100.564 3.7189 101.131 3.27991C101.7 2.84093 102.375 2.62181 103.157 2.62181C103.948 2.62181 104.601 2.84775 105.115 3.29887C105.63 3.75074 105.978 4.36487 106.159 5.14276Z'
				fill='#242D52'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M2.14308 7.65992C3.32615 7.65992 4.28538 8.61239 4.28538 9.78751C4.28538 10.9619 3.32615 11.9151 2.14308 11.9151C0.959231 11.9151 0 10.9619 0 9.78751C0 8.61239 0.959231 7.65992 2.14308 7.65992ZM2.14308 0C3.32615 0 4.28462 0.953208 4.28462 2.12759C4.28462 3.30272 3.32538 4.25518 2.14231 4.25518C0.959231 4.25518 0 3.30272 0 2.12759C0 0.953208 0.959231 0 2.14308 0ZM9.85692 0C11.0408 0 12 0.953208 12 2.12759C12 3.30272 11.0408 4.25518 9.85692 4.25518C8.67385 4.25518 7.71462 3.30272 7.71462 2.12759C7.71462 0.953208 8.67385 0 9.85692 0Z'
				fill='#F3603C'
			/>
			<path
				opacity='0.5'
				d='M9.85694 12.0001C11.0405 12.0001 12 11.0475 12 9.87246C12 8.69743 11.0405 7.74487 9.85694 7.74487C8.67336 7.74487 7.71387 8.69743 7.71387 9.87246C7.71387 11.0475 8.67336 12.0001 9.85694 12.0001Z'
				fill='#F3603C'
			/>
		</svg>
	);
}

export function FacebookIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
			<path
				fill='#FFF'
				d='M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z'
			/>
		</svg>
	);
}

export function YoutubeIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='21' height='20'>
			<path
				fill='#FFF'
				d='M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z'
			/>
		</svg>
	);
}

export function TwitterIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='21' height='18'>
			<path
				fill='#FFF'
				d='M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z'
			/>
		</svg>
	);
}

export function PinterestIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
			<path
				fill='#FFF'
				d='M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z'
			/>
		</svg>
	);
}

export function InstagramIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='21' height='20'>
			<path
				fill='#FFF'
				d='M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z'
			/>
		</svg>
	);
}
