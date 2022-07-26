import React, { useState } from 'react'
import { Toast } from '@components/Toast'
import { Portal } from '@components/Portal'

export const App = () => {
	return (
		<div>
			<Portal>
				<Toast />
			</Portal>
		</div>
	)
}
