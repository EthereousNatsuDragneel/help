import React, {Fragment,useEffect,useCallback} from 'react'
import {StatusBar} from 'react-native'
import firebaseHandle from './src/utils/firebaseHandle'
import AppSwitchNavigator from './src/navigation/AppSwitchNavigator'
import NavigationService from './src/utils/NavigationService'
function App(){useEffect(()=>{
firebaseHandle.init()
firebaseHandle.getInstance().auth().onAuthStateChanged(user=>{
if(user){console.log('Logged in')
NavigationService.navigate('Home')}
else{console.log('Not logged in')
NavigationService.navigate('login')}})},[])
const createNavigationRef=useCallback(ref => NavigationService.setTopLevelNavigator(ref),[])
return(<Fragment><StatusBar barStyle={'light-content'}/>
<AppSwitchNavigator ref={createNavigationRef}/>
</Fragment>)}
export default App