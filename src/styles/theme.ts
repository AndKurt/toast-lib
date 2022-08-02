import { css, DefaultTheme } from 'styled-components'

// font
export const font = css`
	font-family: 'Helvetica Neue';
	font-weight: bold;
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
// ---------LEFT-----------
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
export const toLeft = css`
	@keyframes to-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
`
//  ---------TOP-----------
export const fromTop = css`
	@keyframes from-top {
		from {
			transform: translateY(-320%);
		}
		to {
			transform: translateY(0);
		}
	}
`
export const toTop = css`
	@keyframes to-top {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-320%);
		}
	}
`

//  ---------RIGHT-----------
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
export const toRight = css`
	@keyframes to-right {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}
`
//  ---------BOTTOM-----------
export const fromBottom = css`
	@keyframes from-bottom {
		from {
			transform: translateY(320%);
		}
		to {
			transform: translateY(0);
		}
	}
`
export const toBottom = css`
	@keyframes to-bottom {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(320%);
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

// Font sizes
const small = '15px'
const medium = '32px'
const large = '50px'

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

	fontSize: {
		small: small,
		medium: medium,
		large: large,
	},
}
