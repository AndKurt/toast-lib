import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface IPortal {
	children: JSX.Element
}

export const Portal = ({ children }: IPortal) => {
	const toastRoot = document.createElement('div')
	toastRoot.id = '#toast-root'
	document.body.appendChild(toastRoot)

	const elem = useRef(document.createElement('div'))
	const current = elem.current

	useEffect(() => {
		toastRoot.appendChild(current)
		return () => {
			toastRoot.removeChild(current)
			document.getElementById('#toast-root')?.remove()
		}
	}, [])

	return createPortal(children, current)
}
