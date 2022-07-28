import HelveticaNeue from '@assets/fonts/HelveticaNeue.ttf'
import styled, { keyframes } from 'styled-components/macro'
import {
	font,
	fromBottom,
	fromLeft,
	fromRight,
	fromTop,
	leftBottom,
	leftTop,
	rightBottom,
	rightTop,
	toBottom,
	toLeft,
	toRight,
	toTop,
} from '@styles/theme'
import error from '@assets/svg/error.svg'
import info from '@assets/svg/info.svg'
import success from '@assets/svg/success.svg'
import warning from '@assets/svg/warning.svg'
import closeWhite from '@assets/svg/closeWhite.svg'
import closeBlack from '@assets/svg/closeBlack.svg'
import {
	DEFAULT_ANIM_DELAY,
	ERROR,
	FROM_BOTTOM,
	FROM_LEFT,
	FROM_RIGHT,
	FROM_TOP,
	INFO,
	LEFT_BOTTOM,
	LEFT_TOP,
	RIGHT_BOTTOM,
	RIGHT_TOP,
	WARNING,
} from '@constants/constants'

interface IProps {
	type: string
}

interface IToastContainer extends IProps {
	animation?: string
	position: string
}

export const ToastWrapper = styled.div<IToastContainer>`
	@font-face {
		font-family: 'Helvetica Neue';
		src: url(${HelveticaNeue}) format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	width: 668px;
	height: 181px;
	border-radius: 24px;
	box-shadow: 4px 4px 8px #00000029;
	opacity: 1;
	padding: 32px;
	transition: transform ${DEFAULT_ANIM_DELAY}ms ease-in;
	cursor: grab;
	user-select: none;

	${font}

	background: ${(props) => {
		switch (props.type) {
			case INFO:
				return props.theme.type.info
			case WARNING:
				return props.theme.type.warning
			case ERROR:
				return props.theme.type.error
			default:
				return props.theme.type.success
		}
	}};
	animation: ${({ animation }) => animation} 1s;
	${fromLeft};
	${toLeft};
	${fromTop};
	${toTop};
	${fromRight};
	${toRight};
	${fromBottom};
	${toBottom};
`

export const Logo = styled.div<IProps>`
	height: 64px;
	width: 64px;
	${(props) => {
		switch (props.type) {
			case INFO:
				return `background-image: url(${info})`
			case WARNING:
				return `background-image: url(${warning})`
			case ERROR:
				return `background-image: url(${error})`
			default:
				return `background-image: url(${success})`
		}
	}};
	outline: none;
`

export const TextHelper = styled.div<IProps>`
	margin-left: 38px;
	width: 400px;
	height: auto;
	color: ${(props) =>
		props.type === WARNING
			? props.theme.textColor.black
			: props.theme.textColor.white};
`

export const Title = styled.h2`
	font-size: 50px;
	line-height: 60px;
	margin: 0;
`

export const Description = styled.p`
	margin: 0;
`

export const CloseBtn = styled.div<IProps>`
	position: absolute;
	height: 32px;
	width: 32px;
	right: 29px;
	top: 27px;
	${(props) =>
		props.type === WARNING
			? `background-image: url(${closeBlack});`
			: `background-image: url(${closeWhite});`}
	cursor: pointer;
	outline: none;
`
