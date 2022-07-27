import React, { useEffect, useState } from 'react'
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
import { ICreateToast } from '@interfaces/forToast'
import { instanceToast } from '@logic/ToastManager'
import {
	DEFAULT_ANIM_DELAY,
	DEFAULT_DELAY,
	FROM_LEFT,
	LEFT_TOP,
	TO_LEFT,
} from '@constants/constants'
import { changeAnimation } from '@utils/helpers'

export const Toast = ({
	id,
	type,
	title,
	description,
	animation,
	autoDelete = false,
	delayForDelete = DEFAULT_DELAY,
	position,
}: ICreateToast) => {
	const [anim, setAnim] = useState(animation)

	useEffect(() => {
		if (autoDelete) {
			const idAutoDelete = instanceToast.deleteToastWithDelay(
				id,
				delayForDelete
			)
			const changeAnimId = setTimeout(
				() => setAnim(changeAnimation(anim)),
				delayForDelete - DEFAULT_ANIM_DELAY
			)
			return () => {
				clearTimeout(changeAnimId)
				clearTimeout(idAutoDelete)
			}
		}
	}, [])

	const handleDeleteToast = () => {
		setAnim(changeAnimation(anim))
		setTimeout(() => {
			instanceToast.deleteToast(id)
		}, DEFAULT_ANIM_DELAY)
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<ToastWrapper type={type} position={position} animation={anim}>
				<Logo type={type} />
				<TextHelper type={type}>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</TextHelper>
				<CloseBtn type={type} onClick={handleDeleteToast} />
			</ToastWrapper>
		</ThemeProvider>
	)
}
