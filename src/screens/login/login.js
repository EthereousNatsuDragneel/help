import React, {Component} from 'react'
import useLogin from './useLogin'
import {Text,View,TouchableOpacity,TextInput} from 'react-native'
function login(props){const {user,updateUser,goToSignup,loginHandle}=useLogin(props)
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{color:white,fontSize:30}}>LOGIN</Text>
<TextInput value={user.email} placeholder="Email:" onChangeText={text=>updateUser('email',text)} textInputProps={{keyboardType:'email-address',autoCapitalize:'none'}}/>
<TextInput value={user.password} placeholder="Password" onChangeText={text=>updateUser('password',text)} textInputProps={{keyboardType:'email-address',autoCapitalize:'none',secureTextEntry:true}}/>
<TouchableOpacity onPress={loginHandle}><Text style={{color:"white"}}>Login</Text></TouchableOpacity>
<TouchableOpacity onPress={goToSignup}><Text style={{color:"white"}}>Sign up</Text></TouchableOpacity>
<Text style={{fontSize:40,color:"white"}}>MIDNIGHT</Text>
</View>)}
export default login