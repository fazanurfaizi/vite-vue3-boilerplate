const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			textColor: {
				primary: colors.blue[600],
				secondary: colors.purple[600],
				success: colors.green[600],
				danger: colors.red[600],
				warning: colors.yellow[500],
				info: colors.blue[400],
				light: colors.gray[200],
				dark: colors.gray[800],
				link: colors.blue[800],
			},
			backgroundColor: {
				primary: colors.blue[600],
				secondary: colors.purple[600],
				success: colors.green[600],
				danger: colors.red[600],
				warning: colors.yellow[500],
				info: colors.blue[400],
				light: colors.gray[200],
				dark: colors.gray[800],
				link: colors.transparent,
			},
			borderColor: {
				primary: colors.blue[600],
				secondary: colors.purple[600],
				success: colors.green[600],
				danger: colors.red[600],
				warning: colors.yellow[500],
				info: colors.blue[400],
				light: colors.gray[200],
				dark: colors.gray[800],
			},
			keyframes: {
				pulse: {
					"0%, 100%": {
						opacity: 1
					},
					"50%": {
						opacity: 0
					}
				}
			},
			spacing: {
				'7': '1.75rem',
				'9': '2.25rem',
				'28': '7rem',
				'80': '20rem',
				'96': '24rem',
			},
			height: {
				'1/2': '50%'
			},
			scale: {
				'30': '.3'
			},
			boxShadow: {
				outline: '0 0 0 3px rgba(88, 11, 28, 0.4)'
			},
			colors: {
				indigo: colors.indigo,
				blue: colors.blue,
				red: colors.red,
				orange: colors.orange,
				yellow: colors.yellow,
				green: colors.green,
				teal: colors.teal,
				purple: colors.purple,
				pink: colors.pink,
				slate: colors.slate,
				gray: colors.gray,
				neutral: colors.neutral,
				stone: colors.stone,
				amber: colors.amber,
				lime: colors.lime,
				emerald: colors.emerald,
				cyan: colors.cyan,
				sky: colors.sky,
				violet: colors.violet,
				fuchsia: colors.fuchsia,
				rose: colors.rose,

				'hover-primary': colors.blue[700],
				'hover-secondary': colors.purple[700],
				'hover-success': colors.green[700],
				'hover-danger': colors.red[700],
				'hover-warning': colors.yellow[600],
				'hover-info': colors.blue[500],
				'hover-light': colors.gray[300],
				'hover-dark': colors.gray[900],
				'hover-link': colors.gray[100],

				'focus-primary': colors.blue[700],
				'focus-secondary': colors.purple[700],
				'focus-success': colors.green[700],
				'focus-danger': colors.green[700],
				'focus-warning': colors.yellow[600],
				'focus-info': colors.blue[500],
				'focus-light': colors.gray[300],
				'focus-dark': colors.gray[900],
				'focus-link': colors.gray[100],

				'active-primary': colors.blue[800],
				'active-secondary': colors.purple[800],
				'active-success': colors.green[800],
				'active-danger': colors.green[800],
				'active-warning': colors.yellow[700],
				'active-info': colors.blue[600],
				'active-light': colors.gray[400],
				'active-dark': colors.gray[900],
				'active-link': colors.gray[200],
			}
		},
	},
	variants: {
		extend: {
			backgroundColor: ['dark'],
			textColor: ['dark'],
			borderColor: ['dark']
		},
		scale: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
		textColor: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
		opacity: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	],
}
