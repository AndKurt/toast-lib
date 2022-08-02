import styled from 'styled-components/macro'
import { font } from '@styles/theme'

export const ErrorMessage = styled.h3`
	${font}
	color: ${({ theme }) => theme.textColor.white};
	font-size: ${({ theme }) => theme.fontSize.medium};
	text-align: center;
`
