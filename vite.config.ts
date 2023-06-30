import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['umd', 'es'],
			name: 'react-hook-usemutable',
		},
		minify: false,
		rollupOptions: {
			external: ['@mutablejs/core', 'react'],
		},
	},
});
