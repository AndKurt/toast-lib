import { DEFAULT_DELAY } from '@constants/constants'
import { IRefForceUpdate, IToast } from '@interfaces/forToast'
import { toastsList } from '@mock/toasts'
import { v4 as uuid } from 'uuid'

export class ToastManager {
	private static instance: ToastManager
	toastsList: IToast[]
	refForceUpdate: IRefForceUpdate

	private constructor() {
		this.toastsList = toastsList //todo change to []
		this.refForceUpdate = { handleForceUpdate() {} }
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

	deleteToastWithDelay = (id: string, delayForDelete) => {
		return setTimeout(() => this.deleteToast(id), delayForDelete)
	}

	//todo: add interface!
	generateToast = (props) => {
		return {
			id: uuid(),
			...props,
		}
	}
}

export const instanceToast = ToastManager.getInstance()
