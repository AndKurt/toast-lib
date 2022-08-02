import { IRefForceUpdate, IToast } from '@/interfaces'
import { v4 as uuid } from 'uuid'

export class ToastManager {
	private static instance: ToastManager
	toastsList: IToast[]
	refForceUpdate: IRefForceUpdate | null

	private constructor() {
		this.toastsList = []
		this.refForceUpdate = null
	}

	public static getInstance(): ToastManager {
		if (ToastManager.instance) {
			return ToastManager.instance
		}
		return (ToastManager.instance = new ToastManager())
	}

	init(ref: IRefForceUpdate) {
		this.refForceUpdate = ref
	}

	getAllToasts() {
		return this.toastsList
	}

	addToast = (toast: IToast) => {
		if (this.toastsList.length < 3) {
			this.toastsList.push(toast)
			this.refForceUpdate?.handleForceUpdate()
		} else {
			return
		}
	}

	deleteToast = (id: string) => {
		this.toastsList = this.toastsList.filter((toast) => toast.id !== id)
		this.refForceUpdate?.handleForceUpdate()
	}

	deleteToastWithDelay = (id: string, delayForDelete: number) => {
		return setTimeout(() => this.deleteToast(id), delayForDelete)
	}

	generateToast = (props: Omit<IToast, 'id'>): void => {
		const generatedToast: IToast = {
			id: uuid(),
			...props,
		}

		this.addToast(generatedToast)
	}
}

export const instanceToast = ToastManager.getInstance()
