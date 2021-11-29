import { Options } from 'tsup'

const config: Options = {
	splitting: false,
	format: [ 'esm', 'cjs' ],
	entryPoints: [ 'src/index.ts' ],
	target: 'es5',
	clean: true,
	dts: true,
	minify: true,
	env: {
		NODE_ENV: 'production'
	}
}

export default config
