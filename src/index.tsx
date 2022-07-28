import React, { useEffect, useRef } from 'react'
import { ToastContainer } from '@components/ToastContainer'
import { instanceToast } from '@logic/ToastManager'
import { IRefForceUpdate, IToastContainerProps } from '@interfaces/forToast'

export const ToastCreator = (props: IToastContainerProps) => {
	const toastsRef = useRef<IRefForceUpdate>()

	useEffect(() => {
		if (toastsRef.current) {
			instanceToast.init(toastsRef.current)
		}
	}, [])

	return <ToastContainer ref={toastsRef} {...props} />
}
