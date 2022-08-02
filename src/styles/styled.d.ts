// import original module declarations
import { string } from 'prop-types'
import 'styled-components'

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		type: {
			info: string
			warning: string
			error: string
			success: string
		}

		textColor: {
			white: string
			black: string
		}

		fontSize: {
			small: string
			medium: string
			large: string
		}
	}
}
