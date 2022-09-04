const { loadConfigFromFile, mergeConfig } = require('vite')
const { resolve } = require('path')

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(ts|ts)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'storybook-dark-mode',
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss")
				}
			}
		}
	],
	framework: '@storybook/vue3',
	core: {
		builder: '@storybook/builder-vite'
	},
	typescript: {
		check: false,
		checkOptions: {}
	},
	async viteFinal(prevConfig) {
		const { config } = await loadConfigFromFile(
			resolve(__dirname, '../vite.config.ts')
		)

		return mergeConfig(prevConfig, {
			plugins: []
		})
	}
}
