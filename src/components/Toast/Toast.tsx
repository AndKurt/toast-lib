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
	ToastContainer,
	Logo,
	TextHelper,
	Title,
	Description,
} from './components'
import { ErrorBoundary } from '@components/ErrorBoundary'

export const Toast = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ErrorBoundary>
				<ToastContainer
					type={SUCCSESS}
					position={RIGHT_BOTTOM}
					animation={FROM_BOTTOM}>
					<Logo type={SUCCSESS} />
					<TextHelper type={SUCCSESS}>
						<Title>Title</Title>
						<Description>Description</Description>
					</TextHelper>
					<CloseBtn type={SUCCSESS} />
				</ToastContainer>
			</ErrorBoundary>
		</ThemeProvider>
	)
}
