import { v4 as uuid } from 'uuid'

export const toastsList = [
	{
		id: uuid(),
		type: 'success',
		title: 'Test title1',
		description: 'Test description1',
		animation: 'from-left',
	},
	{
		id: uuid(),
		type: 'warning',
		title: 'Test title2',
		description: 'Test description2',
		animation: 'from-left',
	},
	{
		id: uuid(),
		type: 'error',
		title: 'Test title3',
		description: 'Test description3',
		animation: 'from-left',
	},
]
