import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { ContainerForToasts } from './components'
import { Toast } from '@components/Toast/Toast'
import { IToastContainerProps, TAnimation } from '@interfaces/forToast'
import { instanceToast } from '@logic/ToastManager'
import { Portal } from '@components/Portal'
import { ErrorBoundary } from '@components/ErrorBoundary'
import {
	FROM_LEFT,
	FROM_RIGHT,
	LEFT_BOTTOM,
	LEFT_TOP,
} from '@constants/constants'

export const ToastContainer = forwardRef((props: IToastContainerProps, ref) => {
	const listOfToasts = instanceToast.getAllToasts()
	const settedPosition = props.position ? props.position : LEFT_TOP
	let settedAnimation: TAnimation
	if (settedPosition === LEFT_TOP || settedPosition === LEFT_BOTTOM) {
		settedAnimation = props.animation ? props.animation : FROM_LEFT
	} else {
		settedAnimation = props.animation ? props.animation : FROM_RIGHT
	}

	const [_, setForceUpdate] = useState<{} | null>(null)

	const handleForceUpdate = () => {
		setForceUpdate({})
	}

	useImperativeHandle(ref, () => {
		return {
			handleForceUpdate: handleForceUpdate,
		}
	})

	return (
		<Portal>
			<ErrorBoundary>
				<ContainerForToasts position={settedPosition} data-cy="toast-container">
					{!!listOfToasts.length &&
						listOfToasts.map((toast) => (
							<Toast
								key={toast.id}
								position={settedPosition}
								animation={settedAnimation}
								{...toast}
							/>
						))}
				</ContainerForToasts>
			</ErrorBoundary>
		</Portal>
	)
})
