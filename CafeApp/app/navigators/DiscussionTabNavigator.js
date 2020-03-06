import { createStackNavigator} from 'react-navigation-stack'

import DiscussionScreen from '../containers/Discussion/discussion'

const DiscussionTabNavigator = createStackNavigator(
    {
        Discussion: {
            screen: DiscussionScreen
        }
    },
    {
        headerMode:'none'
    }
)

DiscussionTabNavigator.navigationOptions = ({ navigation}) => {
    let tabBarVisible = true
    if(navigation.state.index > 0){
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export default DiscussionTabNavigator