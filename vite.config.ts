import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['umd', 'es'],
			name: 'mjs-router',
		},
		minify: false,
		rollupOptions: {
			external: ['@mutablejs/core'],
		},
	},
});
