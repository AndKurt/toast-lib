import { ERROR, INFO, SUCCESS, WARNING } from '@/constants'
import { IToastContainerProps, TError } from '@/interfaces'
import { instanceToast } from '@/utils'
import { useCallback } from 'react'

const showToastFactory =
	(type: TError) =>
	({ title = 'Default title', ...props }: IToastContainerProps) => {
		instanceToast.generateToast({ title, type, ...props })
	}

export const useToastManager = () => {
	const info = useCallback(showToastFactory(INFO), [])
	const warning = useCallback(showToastFactory(WARNING), [])
	const error = useCallback(showToastFactory(ERROR), [])
	const success = useCallback(showToastFactory(SUCCESS), [])
	return { info, warning, error, success }
}
