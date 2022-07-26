import React from 'react'
import { Portal } from '@components/Portal'
import { ToastContainer } from '@components/ToastContainer'
import { LEFT_TOP } from '@constants/constants'
import { toastsList } from '@mock/toasts'
import { ToastClass } from '@logic/ToastClass'

export const App = () => {
	const test = ToastClass.getInstance(toastsList)

	console.log(test)

	return (
		<div>
			<Portal>
				<ToastContainer
					toastsList={toastsList}
					position={LEFT_TOP}
					autoRemove={false}
					delayToRemove={3000}
				/>
			</Portal>
		</div>
	)
}
