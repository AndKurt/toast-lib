const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@constants': path.resolve(__dirname, 'src/constants/'),
			'@hooks': path.resolve(__dirname, 'src/hooks/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces/'),
		},
	},
	addons: [
		{
			name: 'storybook-preset-craco',
			options: {
				cracoConfigFile: '../craco.config.js',
			},
		},
	],
}
