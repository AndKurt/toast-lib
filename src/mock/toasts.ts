import { IToast } from '@interfaces/forToast'
import { v4 as uuid } from 'uuid'

export const toastsList: IToast[] = [
	{
		id: uuid(),
		type: 'success',
		title: 'Test title1',
		description: 'Test description1',
		autoDelete: true,
		delayForDelete: 20000,
	},
	{
		id: uuid(),
		type: 'warning',
		title: 'Test title2',
		description: 'Test description2',
		autoDelete: true,
	},
	{
		id: uuid(),
		type: 'error',
		title: 'Test title3',
		description: 'Test description3',
		autoDelete: true,
		delayForDelete: 40000,
	},
]
