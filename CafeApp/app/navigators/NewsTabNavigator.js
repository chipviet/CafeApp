import { createStackNavigator } from 'react-navigation-stack'

import NewsScreen from '../containers/News/news'

const NewsTabNavigator = createStackNavigator(
  {
    News: {
      screen: NewsScreen
    },
  },
  {
    headerMode: 'none'
  }
)

NewsTabNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible,
  }
}

export default NewsTabNavigator
