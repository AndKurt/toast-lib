const path = require('path')

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-create-react-app',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config) => {
		config.resolve.alias['@'] = path.resolve(__dirname, '../src')
		config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets')
		config.resolve.alias['@components'] = path.resolve(
			__dirname,
			'../src/components'
		)
		config.resolve.alias['@constants'] = path.resolve(
			__dirname,
			'../src/constants'
		)
		config.resolve.alias['@logic'] = path.resolve(__dirname, '../src/logic')
		config.resolve.alias['@mock'] = path.resolve(__dirname, '../src/mock')
		config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/styles')
		config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils')
		config.resolve.alias['@interfaces'] = path.resolve(
			__dirname,
			'../src/interfaces'
		)
		return config
	},
}
