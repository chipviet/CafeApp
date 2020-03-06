import React, { Component } from 'react'
import { View, Animated, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { string, func, object } from 'prop-types'

export default class FloatingTextInput extends Component {
  static propTypes = {
    title: string.isRequired,
    value: string.isRequired,
    onChangeText: func.isRequired,
    keyboardType: string,
    otherTextInputProps: object,
    containerStyle: object
  }

  static defaultProps = {
    keyboardType: 'default',
    otherTextInputAttributes: {},
  }

  constructor(props) {
    super(props)
    const { value } = this.props
    this.position = new Animated.Value(value ? 1 : 0)
    this.state = {
      isFieldActive: false,
    }
  }

  _handleFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({ isFieldActive: true })
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
      }).start()
    }
  }

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false })
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
      }).start()
    }
  }

  _onChangeText = (updatedValue) => {
    const { onChangeText } = this.props
    onChangeText(updatedValue)
  }

  _returnAnimatedTitleStyles = () => {
    const { isFieldActive } = this.state
    const { value } = this.props
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, -12],
      }),
      fontSize: isFieldActive || value ? 14 : 16,
      paddingHorizontal: isFieldActive || value ? 4 : 0,
      backgroundColor: isFieldActive || value ? '#fff' : null
    }
  }

  render() {
    const { containerStyle, iconContent } = this.props

    return (
      <View style = {[styles.container, containerStyle]}>
        <Animated.Text
          style={[styles.titlestyles, this._returnAnimatedTitleStyles()]}>
          {this.props.title}
        </Animated.Text>
        <TextInput
          value={this.props.value}
          style={styles.textInput}
          underlineColorAndroid='transparent'
          onFocus = {this._handleFocus}
          onBlur = {this._handleFocus}
          onChangeText = {this._onChangeText}
          keyboardType = {this.props.keyboardType}
          {...this.props}
        />
        {iconContent}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    borderColor: '#06a1de'
  },
  textInput: {
    fontSize: 16,
    marginTop: 5,
    // fontFamily: 'Roboto-Medium',
    color: '#404040',
    paddingHorizontal: 16
  },
  titlestyles: {
    position: 'absolute',
    // fontFamily: 'Roboto',
    color: '#404040',
    left: 16,
    paddingVertical: 0
  }
})
