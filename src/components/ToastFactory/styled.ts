import { ERROR, INFO, WARNING } from '@/constants/constants'
import styled from 'styled-components/macro'

interface IProps {
	toastType: string
}

export const CreateToastBtn = styled.button<IProps>`
	max-width: 300px;
	border-radius: 10px;
	border: 0px transparent;
	background-color: ${({ toastType, theme }) => {
		switch (toastType) {
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
	padding: ${({ theme }) => theme.spaces[1]}px;
	margin: 0 ${({ theme }) => theme.spaces[1]}px;
	color: ${({ theme }) => theme.textColor.white};
	font-size: ${({ theme }) => theme.fontSize.small};
	font-weight: bold;
	cursor: pointer;
	transition: 0.5s;
	opacity: 0.7;

	:hover {
		opacity: 1;
		color: ${({ theme }) => theme.textColor.black};
	}
`
