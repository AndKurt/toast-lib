import HelveticaNeue from '@assets/fonts/HelveticaNeue.ttf'
import styled from 'styled-components/macro'
import {
	font,
	fromBottom,
	fromLeft,
	fromRight,
	fromTop,
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
import { DEFAULT_ANIM_DELAY, ERROR, INFO, WARNING } from '@constants/constants'

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
	font-size: ${({ theme }) => theme.fontSize.medium};
	background: ${({ type, theme }) => {
		switch (type) {
			case INFO:
				return theme.type.info
			case WARNING:
				return theme.type.warning
			case ERROR:
				return theme.type.error
			default:
				return theme.type.success
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
	${({ type }) => {
		switch (type) {
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
	color: ${({ theme, type }) =>
		type === WARNING ? theme.textColor.black : theme.textColor.white};
`

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.large};
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
	${({ type }) =>
		type === WARNING
			? `background-image: url(${closeBlack});`
			: `background-image: url(${closeWhite});`}
	cursor: pointer;
	outline: none;
`
