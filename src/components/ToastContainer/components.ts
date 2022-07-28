import { LEFT_BOTTOM, LEFT_TOP, RIGHT_TOP } from '@constants/constants'
import { leftBottom, leftTop, rightBottom, rightTop } from '@styles/theme'
import styled from 'styled-components/macro'

interface IContainerForToasts {
	position: string
}

export const ContainerForToasts = styled.div<IContainerForToasts>`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	position: fixed;
	z-index: 100;
	${(props) => {
		switch (props.position) {
			case LEFT_TOP:
				return leftTop
			case LEFT_BOTTOM:
				return leftBottom
			case RIGHT_TOP:
				return rightTop
			default:
				return rightBottom
		}
	}}
`
