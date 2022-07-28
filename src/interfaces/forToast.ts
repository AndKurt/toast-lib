import { INFO } from '@constants/constants'

export interface IToast {
	id: string
	type: string
	title: string
	description?: string
	autoDelete?: boolean
	delayForDelete?: number
}

export interface IToastContainerProps {
	position?: string
	animation?: string
}

export interface IRefForceUpdate {
	handleForceUpdate: () => void
}

export interface ICreateToast extends Required<IToastContainerProps>, IToast {}
