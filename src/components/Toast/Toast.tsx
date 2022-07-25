import React from 'react'
import { INFO, WARNING, ERROR, SUCCSESS } from '@constants/constants'
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

export const Toast = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ToastContainer type={SUCCSESS}>
				<Logo type={SUCCSESS} />
				<TextHelper type={SUCCSESS}>
					<Title>Title</Title>
					<Description>Description</Description>
				</TextHelper>
				<CloseBtn type={SUCCSESS} />
			</ToastContainer>
		</ThemeProvider>
	)
}
