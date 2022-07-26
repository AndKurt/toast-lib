import { css, DefaultTheme } from 'styled-components'

// font
export const font = css`
	font-family: 'Helvetica Neue';
	font-weight: bold;
	font-size: 32px;
	line-height: 38px;
`

// Base position
export const leftTop = css`
	top: 20px;
	left: 20px;
`
export const leftBottom = css`
	bottom: 20px;
	left: 20px;
`

export const rightTop = css`
	top: 20px;
	right: 20px;
`
export const rightBottom = css`
	bottom: 20px;
	right: 20px;
`

// Animtion
export const fromLeft = css`
	@keyframes from-left {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
`

export const fromTop = css`
	@keyframes from-top {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}
`

export const fromRight = css`
	@keyframes from-right {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}
`

export const fromBottom = css`
	@keyframes from-bottom {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
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
