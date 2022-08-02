import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { ContainerForToasts } from './styled'
import { Toast } from '@/components/Toast'
import { IToastContainerProps } from '@/interfaces'
import { Portal } from '@components/Portal'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { LEFT_TOP } from '@constants/constants'
import { setAnimationAccordingToProps } from '@/utils/helpers'
import { instanceToast } from '@/utils'

export const ToastContainer = forwardRef(
	({ position = LEFT_TOP, animation }: IToastContainerProps, ref) => {
		const listOfToasts = instanceToast.getAllToasts()
		const settedAnimation = setAnimationAccordingToProps(position, animation)

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
					<ContainerForToasts position={position} data-cy="toast-container">
						{!!listOfToasts.length &&
							listOfToasts.map((toast) => (
								<Toast
									key={toast.id}
									position={position}
									animation={settedAnimation}
									{...toast}
								/>
							))}
					</ContainerForToasts>
				</ErrorBoundary>
			</Portal>
		)
	}
)
