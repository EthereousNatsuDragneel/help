import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import stack from './stack'
import Homie from './Homie'
const AppSwitchNavigator=({auth:{screen:Stack},inside:{screen:Homie}},{headerMode:'none',initialRouteName:auth})
export default createAppContainer(AppSwitchNavigator)