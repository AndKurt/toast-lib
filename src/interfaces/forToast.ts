export interface IToast {
	id: string
	type: string
	title: string
	description: string
	animation: string
	handleDeleteToast?: (id: string) => void
}

export interface IToastContainerProps {
	toastsList: IToast[]
	position: string
	autoRemove: boolean
	delayToRemove: number
}
