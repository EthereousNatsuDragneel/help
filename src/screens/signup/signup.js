import React from 'react'
import useSignup from './useSignup'
import {Text,View,TouchableOpacity,TextInput} from 'react-native'
function signup(props){const {user,updateUser,signupHandle}=useSignup(props)
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:30,color:"white"}}>SIGN UP</Text>
<TextInput value={user.name} placeholder="Name:" onChangeText={text=>updateUser('name',text)}/>
<TextInput value={user.email} placeholder="Email:" onChangeText={text=>updateUser('email',text)} textInputProps={{keyboardType:'email-address',autoCapitalize:'none'}}/>
<TextInput value={user.password} placeholder="Password:" onChangeText={text=>updateUser('password',text)} textInputProps={{autoCapitalize:'none',secureTextEntry:true}}/>
<TextInput value={user.cnfPassword} placeholder="Confirm Password:" onChangeText={text=>updateUser('cnfPassword',text)} textInputProps={{autoCapitalize:'none',secureTextEntry:true}}/>
<TouchableOpacity onPress={signupHandle}><Text style={{color:"white"}}>Sign Up</Text></TouchableOpacity>
<Text style={{fontSize:40,color:"white"}}>MIDNIGHT</Text>
</View>)}
export default signup