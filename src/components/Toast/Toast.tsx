import React from 'react'
import {
	INFO,
	WARNING,
	ERROR,
	SUCCSESS,
	RIGHT_BOTTOM,
	LEFT_TOP,
	FROM_LEFT,
	FROM_RIGHT,
	FROM_TOP,
	FROM_BOTTOM,
} from '@constants/constants'
import { defaultTheme } from '@styles/theme'
import { ThemeProvider } from 'styled-components'
import {
	CloseBtn,
	Logo,
	TextHelper,
	Title,
	Description,
	ToastWrapper,
} from './components'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { IToast } from '@interfaces/forToast'

export const Toast = ({
	id,
	type,
	title,
	description,
	animation,
	handleDeleteToast,
}: IToast) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ErrorBoundary>
				<ToastWrapper type={type} animation={animation}>
					<Logo type={type} />
					<TextHelper type={type}>
						<Title>{title}</Title>
						<Description>{description}</Description>
					</TextHelper>
					<CloseBtn type={type} onClick={() => handleDeleteToast!(id)} />
				</ToastWrapper>
			</ErrorBoundary>
		</ThemeProvider>
	)
}
