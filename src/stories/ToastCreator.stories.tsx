import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
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
	SUCCSESS,
	WARNING,
} from '@/constants'
import { ForStory } from '@/components/ForStory'

const Template: ComponentStory<typeof ForStory> = (args) => (
	<ForStory {...args} />
)

export const ToastCreatorTemplate = Template.bind({})

export default {
	title: 'ToastCreator',
	component: ForStory,

	argTypes: {
		position: {
			table: {
				defaultValue: {
					summary: LEFT_TOP,
				},
			},
			control: 'inline-radio',
			options: [LEFT_TOP, LEFT_BOTTOM, RIGHT_TOP, RIGHT_BOTTOM],
		},

		animation: {
			table: {
				defaultValue: {
					summary: FROM_LEFT,
				},
			},
			control: 'inline-radio',
			options: [FROM_LEFT, FROM_BOTTOM, FROM_TOP, FROM_RIGHT],
		},

		id: { label: { control: 'text' }, defaultValue: '1' },

		title: { label: { control: 'text' }, defaultValue: 'Title' },

		description: { label: { control: 'text' }, defaultValue: 'Description' },

		type: {
			table: {
				defaultValue: {
					summary: ERROR,
				},
			},
			control: 'inline-radio',
			options: [ERROR, WARNING, INFO, SUCCSESS],
		},

		autoDelete: {
			control: 'boolean',
			defaultValue: true,
		},

		delayForDelete: {
			defaultValue: 3000,
			control: { type: 'number', min: 3000, step: 100 },
		},
	},
} as ComponentMeta<typeof ForStory>
