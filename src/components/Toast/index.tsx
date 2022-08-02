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
} from './styled'
import { ICreateToast, TAnimation } from '@/interfaces'
import { DEFAULT_ANIM_DELAY, DEFAULT_DELAY } from '@constants/constants'
import {
	changeAnimationDirection,
	isDeleteToastReferringClientPosition,
} from '@utils/helpers'
import { instanceToast } from '@/utils'

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
				() => setAnim(changeAnimationDirection(anim)),
				delayForDelete - DEFAULT_ANIM_DELAY
			)
			return () => {
				clearTimeout(changeAnimId)
				clearTimeout(idAutoDelete)
			}
		}
	}, [])

	const handleDeleteToast = () => {
		setAnim(changeAnimationDirection(anim))
		setTimeout(() => {
			instanceToast.deleteToast(id as string)
		}, DEFAULT_ANIM_DELAY)
	}

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		positionX = e.clientX
		positionY = e.clientY
	}

	const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
		if (
			isDeleteToastReferringClientPosition(
				position,
				animation,
				positionX,
				positionY,
				e.clientX,
				e.clientY
			)
		) {
			handleDeleteToast()
		}
	}

	return (
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
	)
}
