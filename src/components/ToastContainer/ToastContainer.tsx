import React, { useEffect, useState } from 'react'
import { ContainerForToasts } from './components'
import { Toast } from '@components/Toast/Toast'
import { IToastContainerProps } from '@interfaces/forToast'

export const ToastContainer = ({
	toastsList,
	position,
	autoRemove,
	delayToRemove,
}: IToastContainerProps) => {
	const [toasts, setToasts] = useState(toastsList)

	useEffect(() => {
		const idInterval = setInterval(() => {
			if (autoRemove && toasts.length) {
				handleDeleteToast(toasts[0].id)
			}
		}, delayToRemove)

		return () => {
			clearInterval(idInterval)
		}
	}, [toasts, autoRemove, delayToRemove])

	const handleDeleteToast = (id: string) => {
		const newToastList = toasts.filter((toast) => toast.id != id)
		setToasts(newToastList)
	}

	return (
		<ContainerForToasts position={position}>
			{!!toasts.length &&
				toasts.map((toast) => (
					<Toast
						key={toast.id}
						id={toast.id}
						type={toast.type}
						title={toast.title}
						description={toast.description}
						animation={toast.animation}
						handleDeleteToast={handleDeleteToast}
					/>
				))}
		</ContainerForToasts>
	)
}
