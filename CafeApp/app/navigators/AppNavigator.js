/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Image, Text } from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import  ApplicationStyles  from '../theme/ApplicationStyles'
import  Colors  from '../theme/Color'
import HomeStack from './HomeTabNavigator'
import NewsStack from './NewsTabNavigator'
import DiscussStack from './DiscussionTabNavigator'

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Giá',
        // tabBarIcon: ({ focused }) => {
        //   const icon =  require('../assets/img/cafe_icon.png')

        //   return (<Image source={icon} />)
        // }
      })
    },
  
    News: {
      screen: NewsStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Tin tức',
        // tabBarIcon: ({ focused }) => {
        //   const icon =  require('../assets/img/news_icon.png') 
        //   return (<Image source={icon} />)
        // }
      })
    }, 
    Discuss: {
      screen: DiscussStack,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: 'Thảo luận',
        // tabBarIcon: ({ focused }) => {
        //   const icon =  require('../assets/img/cafe_icon.png') 
        //   return (<Image source={icon} />)
        // }
      })
    }, 
  },
  {
    initialRouteName: 'Home',
    barStyle: ApplicationStyles.tabBarStyle,
    activeTintColor: Colors.ceruleanTwo,
    inactiveTintColor: Colors.blueyGrey,
  }
)

/* The purpose of SwitchNavigator is to only ever show one screen at a time.
 * By default, it does not handle back actions and it
 * resets routes to their default state when you switch away
*/
const switchNavigator = createSwitchNavigator({
  BottomTab: {
    screen: BottomTabNavigator
  }
})

export default createAppContainer(switchNavigator)
