import React, {Component} from 'react'
import {BackHandler} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import InstructionsScreen from './InstructionsScreen.js'
import ItemsScreen from './ItemsScreen.js'
import FriendScreen from './FriendScreen.js'
import Left1 from './Left1.js'
import {createStackNavigator} from 'react-navigation-stack'
import Left2 from './Left2.js'
import Left3 from './Left3.js'
import Left4 from './Left4.js'
import MonkeyScreen from './MonkeyScreen.js'
import DonkeyScreen from './DonkeyScreen.js'
import DonkeyGame from './DonkeyGame.js'
import BirdGame from './BirdGame.js'
import Up1 from './Up1.js'
import Up2 from './Up2.js'
import Up3 from './Up3.js'
import Up4 from './Up4.js'
import Up1Left1 from './Up1Left1.js'
import Up1Left2 from './Up1Left2.js'
import Up1Right1 from './Up1Right1.js'
import Up1Right2 from './Up1Right2.js'
import Up2Left1 from './Up2Left1.js'
import Up2Left2 from './Up2Left2.js'
import Up2Right1 from './Up2Right1.js'
import Up2Right2 from './Up2Right2.js'
import Up3Left1 from './Up3Left1.js'
import Up3Left2 from './Up3Left2.js'
import Up3Right1 from './Up3Right1.js'
import Up3Right2 from './Up3Right2.js'
import RabbitFace from './RabbitFace.js'
import FoxGame from './FoxGame.js'

const stack=createStackNavigator({Home:{screen:FriendScreen,navigationOptions:{headerLeft:null}},Left1:{screen:Left1,navigationOptions:{headerLeft:null}},Left2:{screen:Left2,navigationOptions:{headerLeft:null}},Left3:{screen:Left3,navigationOptions:{headerLeft:null}},Left4:{screen:Left4,navigationOptions:{headerLeft:null}},MonkeyScreen:{screen:MonkeyScreen,navigationOptions:{headerLeft:null}},DonkeyScreen:{screen:DonkeyScreen,navigationOptions:{headerLeft:null}},RabbitFace:{screen:RabbitFace,navigationOptions:{headerLeft:null}},FoxGame:{screen:FoxGame,navigationOptions:{headerLeft:null}},
BirdGame:{screen:BirdGame,navigationOptions:{headerLeft:null}},DonkeyGame:{screen:DonkeyGame,navigationOptions:{headerLeft:null}},Up1:{screen:Up1,navigationOptions:{headerLeft:null}},Up2:{screen:Up2,navigationOptions:{headerLeft:null}},Up3:{screen:Up3,navigationOptions:{headerLeft:null}},Up4:{screen:Up4,navigationOptions:{headerLeft:null}},Up1Left1:{screen:Up1Left1,navigationOptions:{headerLeft:null}},Up1Left2:{screen:Up1Left2,navigationOptions:{headerLeft:null}},Up1Right1:{screen:Up1Right1,navigationOptions:{headerLeft:null}},Up1Right2:{screen:Up1Right2,navigationOptions:{headerLeft:null}},
Up2Left1:{screen:Up2Left1,navigationOptions:{headerLeft:null}},Up2Left2:{screen:Up2Left2,navigationOptions:{headerLeft:null}},Up2Right1:{screen:Up2Right1,navigationOptions:{headerLeft:null}},Up2Right2:{screen:Up2Right2,navigationOptions:{headerLeft:null}},Up3Left1:{screen:Up3Left1,navigationOptions:{headerLeft:null}},Up3Left2:{screen:Up3Left2,navigationOptions:{headerLeft:null}},Up3Right1:{screen:Up3Right1,navigationOptions:{headerLeft:null}},Up3Right2:{screen:Up3Right2,navigationOptions:{headerLeft:null}}},{initialRouteName:"Home"})

const TabNavigator=createBottomTabNavigator({Game:stack,Items:ItemsScreen,Instructions:InstructionsScreen},{initialRouteName:"Game"})
const AppContainer=createAppContainer(TabNavigator)

export default class TabNav extends Component{
componentDidMount(){BackHandler.addEventListener('hardwareBackPress',this.handleBackButton);}
handleBackButton(){return true}
render(){return(<AppContainer/>)}}