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
	SUCCESS,
	WARNING,
} from '@/constants'
import { ToastFactory } from '@/components/ToastFactory'

const Template: ComponentStory<typeof ToastFactory> = (args) => (
	<ToastFactory {...args} />
)

export const ToastCreatorTemplate = Template.bind({})

export default {
	title: 'ToastCreator',
	component: ToastFactory,

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

		id: { label: { control: 'text' } },

		title: { label: { control: 'text' } },

		description: { label: { control: 'text' } },

		type: {
			table: {
				defaultValue: {
					summary: ERROR,
				},
			},
			control: 'inline-radio',
			options: [ERROR, WARNING, INFO, SUCCESS],
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
} as ComponentMeta<typeof ToastFactory>
