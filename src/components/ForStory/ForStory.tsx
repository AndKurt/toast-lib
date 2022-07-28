import { ToastCreator } from '@/index'
import { IToastContainerProps } from '@/interfaces'
import { instanceToast } from '@/logic'
import { AddBtn } from './components'

export const ForStory = (props: IToastContainerProps) => {
	const handleAddToast = () =>
		instanceToast.generateToast({
			title: props.title ? props.title : 'Test Error',
			type: props.type ? props.type : 'error',
			...props,
		})
	return (
		<>
			<AddBtn onClick={handleAddToast}>Add Toast</AddBtn>
			<ToastCreator {...props} />
		</>
	)
}
