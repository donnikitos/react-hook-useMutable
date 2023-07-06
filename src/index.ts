import { useEffect, useState } from 'react';
import { Mutable, mutableFn } from '@mutablejs/core';

export function createUseMutable<T>(mutable: Mutable<T>) {
	return () => useMutable(mutable);
}

export function useMutable<T>(mutable: Mutable<T>) {
	const [value, setValue] = useState<T>(mutable.value);

	useEffect(() => {
		mutableFn((v: any) => {
			const type =
				typeof v === 'object' && v
					? Array.isArray(v)
						? 'array'
						: 'object'
					: 'misc';

			setValue(
				type === 'array' ? [...v] : type === 'object' ? { ...v } : v,
			);
		})(mutable as any);
	}, []);

	return value;
}

export default useMutable;
