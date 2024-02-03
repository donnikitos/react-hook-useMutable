import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: ['src/index'],
	externals: ['react', '@mutablejs/core'],
	clean: true,
	declaration: true,
	rollup: {
		output: { exports: 'named' },
		emitCJS: true,
		inlineDependencies: true,
	},
});
