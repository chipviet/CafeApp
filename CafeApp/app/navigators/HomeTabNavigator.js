import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../containers/Home/home'

const HomeTabNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
  },
  {
    headerMode: 'none'
  }
)

HomeTabNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
  }
}

export default HomeTabNavigator
