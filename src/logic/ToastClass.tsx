import { IToast } from '@interfaces/forToast'

export class ToastClass {
	private static instance: ToastClass
	toasts: IToast[] | []

	private constructor(toasts: IToast[]) {
		this.toasts = toasts
	}

	public static getInstance(toasts: IToast[]): ToastClass {
		if (ToastClass.instance) {
			return ToastClass.instance
		}
		return (ToastClass.instance = new ToastClass(toasts))
	}
}
