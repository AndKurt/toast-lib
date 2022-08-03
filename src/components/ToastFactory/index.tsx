import { ERROR, INFO, SUCCESS, WARNING } from '@/constants/constants'
import { useToastManager } from '@/hooks'
import { instanceToast, ToastCreator } from '@/index'
import { IToastContainerProps } from '@/interfaces'
import { defaultTheme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { CreateToastBtn } from './styled'

export const ToastFactory = (props: IToastContainerProps) => {
	const { info, success, error, warning } = useToastManager()

	const handleAddInfoToast = () => {
		info({ title: 'Info', ...props })
	}
	const handleAddErrorToast = () => {
		error({ title: 'Error', ...props })
	}
	const handleAddSuccessToast = () => {
		success({ title: 'Success', ...props })
	}
	const handleAddWarningToast = () => {
		warning({ title: 'Warning', ...props })
	}

	const buttonsArr = [
		{
			toastType: ERROR,
			handleClickToAdd: handleAddErrorToast,
			dataCy: 'add-error-toast-btn',
			name: 'Error toast',
		},
		{
			toastType: INFO,
			handleClickToAdd: handleAddInfoToast,
			dataCy: 'add-info-toast-btn',
			name: 'Info toast',
		},
		{
			toastType: SUCCESS,
			handleClickToAdd: handleAddSuccessToast,
			dataCy: 'add-success-toast-btn',
			name: 'Success toast',
		},
		{
			toastType: WARNING,
			handleClickToAdd: handleAddWarningToast,
			dataCy: 'add-warning-toast-btn',
			name: 'Warning toast',
		},
	]

	return (
		<ThemeProvider theme={defaultTheme}>
			{buttonsArr.map(({ toastType, handleClickToAdd, dataCy, name }) => (
				<CreateToastBtn
					key={name}
					toastType={toastType}
					data-cy={dataCy}
					onClick={handleClickToAdd}>
					{name}
				</CreateToastBtn>
			))}

			<ToastCreator {...props} />
		</ThemeProvider>
	)
}
