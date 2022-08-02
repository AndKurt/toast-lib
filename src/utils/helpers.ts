import { TAnimation, TPosition } from '@/interfaces'
import {
	FROM_BOTTOM,
	FROM_LEFT,
	FROM_RIGHT,
	FROM_TOP,
	LEFT_BOTTOM,
	LEFT_TOP,
	RIGHT_BOTTOM,
	RIGHT_TOP,
	TO_BOTTOM,
	TO_LEFT,
	TO_RIGHT,
	TO_TOP,
} from '@constants/constants'

export const changeAnimationDirection = (
	currentAnimation: TAnimation
): TAnimation => {
	switch (currentAnimation) {
		case FROM_LEFT:
			return TO_LEFT
		case FROM_RIGHT:
			return TO_RIGHT
		case FROM_TOP:
			return TO_TOP
		case FROM_BOTTOM:
			return TO_BOTTOM
		default:
			return TO_LEFT
	}
}

export const setAnimationAccordingToProps = (
	settedPosition: TPosition,
	propsAnimation: TAnimation | undefined
): TAnimation => {
	if (settedPosition === LEFT_TOP || settedPosition === LEFT_BOTTOM) {
		return propsAnimation ? propsAnimation : FROM_LEFT
	} else {
		return propsAnimation ? propsAnimation : FROM_RIGHT
	}
}

export const isDeleteToastReferringClientPosition = (
	currentPosition: TPosition,
	animation: TAnimation,
	startX: number,
	startY: number,
	endX: number,
	endY: number
): boolean => {
	if (currentPosition === LEFT_TOP || currentPosition === LEFT_BOTTOM) {
		switch (animation) {
			case FROM_LEFT: {
				if (startX > endX) {
					return true
				}
				break
			}
			case FROM_TOP: {
				if (startY > endY) {
					return true
				}
				break
			}
			case FROM_BOTTOM: {
				if (startY < endY) {
					return true
				}
				break
			}
			default:
				break
		}
	}
	if (currentPosition === RIGHT_TOP || currentPosition === RIGHT_BOTTOM) {
		switch (animation) {
			case FROM_RIGHT: {
				if (startX < endX) {
					return true
				}
				break
			}
			case FROM_TOP: {
				if (startY > endY) {
					return true
				}
				break
			}
			case FROM_BOTTOM: {
				if (startY < endY) {
					return true
				}
				break
			}
			default:
				break
		}
	}

	return false
}
