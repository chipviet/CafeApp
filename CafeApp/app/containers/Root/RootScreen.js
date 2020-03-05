import React, { Component } from 'react'
//import NavigationService from '@services/NavigationService'
import NavigationService from '../../services/NavigationService'
import AppNavigator from '../../navigators/AppNavigator'
import { View, StatusBar } from 'react-native'
import styles from './styles'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { PropTypes } from 'prop-types'
//import UserActions from '@actions/user'
//import { header } from '@services/httpTatem'
//import { setAuthorizationHeader } from '@services/http'

class RootScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.handleAllowScreens()
  }

  handleAllowScreens() {
        NavigationService.navigate('BottomTab')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0b0727" />
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

export default RootScreen
