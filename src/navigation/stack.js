import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/home/home'
import login from '../screens/login/login'
import signup from '../screens/signup/signup'
const stack=createStackNavigator({login:login,signup:signup,Home:Home},{initialRouteName:'Home'})
const AppContainer=createAppContainer(stack)
export default class Stack extends Component{
render(){return <AppContainer/>}}