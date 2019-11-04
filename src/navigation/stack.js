import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import login from '../screens/login/login'
import signup from '../screens/signup/signup'
const stack=createStackNavigator({login:{screen:login},signup:{screen:signup}},{initialRouteName:'login'})
export default createAppContainer(stack)