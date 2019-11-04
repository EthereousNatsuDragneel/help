import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home/home'
const Homie=createStackNavigator({home:{screen:Home}},{headerMode:'none',initialRouteName:'home'})
export default createAppContainer(Homie)