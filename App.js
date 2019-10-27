import React, {useEffect,useCallback} from 'react'
import firebaseHandle from './src/utils/firebaseHandle'
import Stack from './src/navigation/stack'
function App(){useEffect(()=>{
firebaseHandle.init()
firebaseHandle.getInstance().auth().onAuthStateChanged(user=>{
if(user){console.log('Logged in')
Stack.navigate('Home')}
else{console.log('Not logged in')
Stack.navigate('login')}})},[])
return(<AppContainer/>)}
export default App