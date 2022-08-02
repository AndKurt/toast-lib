import path from 'path'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'

const packageJson = require('./package.json')

const resolvePath = (dir) => {
	return path.resolve(__dirname, dir)
}

export default {
	//input: 'src/index.ts',
	input: 'src/index.tsx',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		svgr(),
		resolve({ preferBuiltins: true }),
		commonjs(),
		json(),
		typescript({ useTsconfigDeclarationDir: true }),
		url({
			include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
			limit: Infinity,
			fileName: '[dirname][name][extname]',
		}),
		postcss({
			extensions: ['.css'],
		}),
		alias({
			entries: [
				{ find: '@', replacement: resolvePath('./src') },
				{ find: '@assets', replacement: resolvePath('./src/assets') },
				{ find: '@components', replacement: resolvePath('./src/components') },
				{ find: '@constants', replacement: resolvePath('./src/constants') },
				{ find: '@hooks', replacement: resolvePath('./src/hooks') },
				{ find: '@interfaces', replacement: resolvePath('./src/interfaces') },
				{ find: '@styles', replacement: resolvePath('./src/styles') },
				{ find: '@utils', replacement: resolvePath('./src/utils') },
			],
		}),
	],
}
