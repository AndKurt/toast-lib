import React, { useEffect, useState, MouseEvent } from 'react'
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
import { ICreateToast, TAnimation } from '@interfaces/forToast'
import { instanceToast } from '@logic/ToastManager'
import {
	DEFAULT_ANIM_DELAY,
	DEFAULT_DELAY,
	FROM_BOTTOM,
	FROM_LEFT,
	FROM_RIGHT,
	FROM_TOP,
	LEFT_BOTTOM,
	LEFT_TOP,
	RIGHT_BOTTOM,
	RIGHT_TOP,
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
	const [anim, setAnim] = useState<TAnimation>(animation)
	let positionX: number
	let positionY: number

	useEffect(() => {
		if (autoDelete) {
			const idAutoDelete = instanceToast.deleteToastWithDelay(
				id as string,
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
			instanceToast.deleteToast(id as string)
		}, DEFAULT_ANIM_DELAY)
	}

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		positionX = e.clientX
		positionY = e.clientY
	}

	const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
		if (position === LEFT_TOP || position === LEFT_BOTTOM) {
			switch (animation) {
				case FROM_LEFT: {
					if (positionX > e.clientX) {
						handleDeleteToast()
					}
					break
				}
				case FROM_TOP: {
					if (positionY > e.clientY) {
						handleDeleteToast()
					}
					break
				}
				case FROM_BOTTOM: {
					if (positionY < e.clientY) {
						handleDeleteToast()
					}
					break
				}
				default:
					break
			}
		}
		if (position === RIGHT_TOP || position === RIGHT_BOTTOM) {
			switch (animation) {
				case FROM_RIGHT: {
					if (positionX < e.clientX) {
						handleDeleteToast()
					}
					break
				}
				case FROM_TOP: {
					if (positionY > e.clientY) {
						handleDeleteToast()
					}
					break
				}
				case FROM_BOTTOM: {
					if (positionY < e.clientY) {
						handleDeleteToast()
					}
					break
				}
				default:
					break
			}
		}
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<ToastWrapper
				data-cy="toast"
				type={type}
				position={position}
				animation={anim}
				onMouseUp={handleMouseUp}
				onMouseDown={handleMouseDown}>
				<Logo type={type} />
				<TextHelper type={type}>
					<Title>{title}</Title>
					{description && <Description>{description}</Description>}
				</TextHelper>
				<CloseBtn
					type={type}
					data-cy="toast-close-btn"
					onClick={handleDeleteToast}
				/>
			</ToastWrapper>
		</ThemeProvider>
	)
}
