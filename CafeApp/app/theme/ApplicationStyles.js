import { Dimensions } from 'react-native'
/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
const { width, height } = Dimensions.get('window')
let calRatio = width <= height ? 16 * (width / height) : 16 * (height / width)

if (width <= height) {
  if (calRatio < 9) {
    calRatio = width / 9
  } else {
    calRatio = height / 18
  }
} else if (calRatio < 9) {
  calRatio = height / 9
} else {
  calRatio = width / 18
}

export const screenWidth = width
export const screenHeight = height
export const ratio = 1

export default {
  screen: {
    container: {
      flex: 1,
    },
    screenWidth,
    screenHeight,
    width: screenWidth,
    height: screenHeight,
    ratio
  },
  tabBarStyle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#06a1de'
  }
}
