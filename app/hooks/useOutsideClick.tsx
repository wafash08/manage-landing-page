import { useEffect, useRef } from 'react';

/**
 *
 * @see ''
 */
export default function useOutsideClick(callback: () => void) {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleClick = (event: Event) => {
			if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
				callback();
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [callback]);

	return ref;
}
