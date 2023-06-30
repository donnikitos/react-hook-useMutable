import { useEffect, useState } from 'react';
import { Mutable, mutableFn } from '@mutablejs/core';

export function createUseMutable<T>(mutable: Mutable<T>) {
	return () => useMutable(mutable);
}

export function useMutable<T>(mutable: Mutable<T>) {
	const [value, setValue] = useState<T>(mutable.value);

	useEffect(() => {
		mutableFn((v: T) => setValue(v))(mutable as any);
	}, []);

	return value;
}

export default useMutable;
