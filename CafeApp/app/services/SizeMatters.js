import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

class SizeMatters {
  constructor() {
    if (!SizeMatters.instance) {
      SizeMatters.instance = this
    }

    this.guidelineBaseWidth = 360
    this.guidelineBaseHeight = 617

    const { width, height } = Dimensions.get('window')
    this.width = width
    this.height = height

    return SizeMatters.instance
  }

  scaleX(size) {
    const scale = this.width / this.guidelineBaseWidth * size
    return Number(scale.toFixed(2))
  }

  scaleY(size) {
    const verticalScale = this.height / this.guidelineBaseHeight * size
    return Number(verticalScale.toFixed(2))
  }

  moderateScale(size, factor = 0.5) {
    const moderateScale = size + (this.scale(size) - size) * factor
    return Number(verticalScale.toFixed(2))
  }
}

const instance = new SizeMatters()

export default instance
