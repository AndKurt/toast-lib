import React, { useEffect, useRef } from 'react'
import { ToastContainer } from '@components/ToastContainer'
import { instanceToast } from '@logic/ToastManager'
import { IRefForceUpdate, IToastContainerProps } from '@interfaces/forToast'
import {
	FROM_BOTTOM,
	FROM_RIGHT,
	FROM_TOP,
	LEFT_BOTTOM,
	LEFT_TOP,
	RIGHT_BOTTOM,
	RIGHT_TOP,
} from '@constants/constants'
import { toastsList } from '@mock/toasts'

export const App = (props: IToastContainerProps) => {
	const toastsRef = useRef<IRefForceUpdate>()

	useEffect(() => {
		if (toastsRef.current) {
			instanceToast.init(toastsRef.current)
		}
	}, [])

	return (
		<>
			<button onClick={() => instanceToast.addToast(toastsList[0])}>add</button>
			<ToastContainer ref={toastsRef} {...props} />
		</>
	)
}
