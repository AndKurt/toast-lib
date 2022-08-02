import {
	ERROR,
	FROM_BOTTOM,
	FROM_LEFT,
	FROM_RIGHT,
	FROM_TOP,
	INFO,
	LEFT_BOTTOM,
	LEFT_TOP,
	RIGHT_BOTTOM,
	RIGHT_TOP,
	SUCCESS,
	TO_BOTTOM,
	TO_LEFT,
	TO_RIGHT,
	TO_TOP,
	WARNING,
} from '@constants/constants'

export type TError =
	| typeof INFO
	| typeof WARNING
	| typeof ERROR
	| typeof SUCCESS

export interface IToast {
	id?: string
	type: TError
	title: string
	description?: string
	autoDelete?: boolean
	delayForDelete?: number
}

export type TPosition =
	| typeof LEFT_TOP
	| typeof LEFT_BOTTOM
	| typeof RIGHT_TOP
	| typeof RIGHT_BOTTOM

export type TAnimation =
	| typeof FROM_LEFT
	| typeof FROM_BOTTOM
	| typeof FROM_TOP
	| typeof FROM_RIGHT
	| typeof TO_LEFT
	| typeof TO_BOTTOM
	| typeof TO_TOP
	| typeof TO_RIGHT

export interface IToastContainerProps extends Partial<IToast> {
	position?: TPosition
	animation?: TAnimation
}

export interface IRefForceUpdate {
	handleForceUpdate: () => void
}

export interface ICreateToast extends IToast {
	position: TPosition
	animation: TAnimation
}
