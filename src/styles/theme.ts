import { css, DefaultTheme } from 'styled-components'

// font
export const font = css`
	font-family: 'Helvetica Neue';
	font-weight: bold;
	font-size: 32px;
	line-height: 38px;
`

// Color palette
const white = '#FFFFFF'
const black = '#000000'
const lilac = '#9A40D3'
const yellow = '#F4E048'
const red = '#E25837'
const green = '#37E29A'

// Default Theme
export const defaultTheme: DefaultTheme = {
	type: {
		info: lilac,
		warning: yellow,
		error: red,
		success: green,
	},

	textColor: {
		white: white,
		black: black,
	},
}
