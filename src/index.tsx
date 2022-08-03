import React, { useEffect, useRef } from 'react'
import { ToastContainer } from '@components/ToastContainer'
import { IRefForceUpdate, IToastContainerProps } from '@/interfaces'
import { instanceToast } from './utils'

export const ToastCreator = (props: IToastContainerProps) => {
	const toastsRef = useRef<IRefForceUpdate>()

	useEffect(() => {
		if (toastsRef.current) {
			instanceToast.init(toastsRef.current)
		}
	}, [])

	return <ToastContainer ref={toastsRef} {...props} />
}

export { useToastManager } from '@/hooks'
export { instanceToast } from '@utils/toastManager'
