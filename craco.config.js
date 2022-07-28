const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@constants': path.resolve(__dirname, 'src/constants/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@logic': path.resolve(__dirname, 'src/logic/'),
			'@mock': path.resolve(__dirname, 'src/mock/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@screens': path.resolve(__dirname, 'src/screens/'),
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
