'use client';

export default function SubscribeForm() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='flex gap-2'>
				<input
					type='email'
					required
					name='subscription'
					id='subscription'
					placeholder='Updates in your inbox...'
					className='text-sm placeholder:text-xs text-primary-dark-blue placeholder:text-neutral-dark-grayish-blue py-4 px-5 rounded-full w-full md:w-[200px]'
				/>
				<button
					type='submit'
					className='group relative py-4 px-6 rounded-full text-xs text-neutral-very-light-gray bg-primary-bright-red'
				>
					<span>Go</span>
					<div className='absolute inset-0 rounded-full bg-transparent transition-colors group-hover:bg-white/10' />
				</button>
			</div>
		</form>
	);
}
