import {useState,useCallback,useMemo} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
function useLogin({navigation}){const [user,setUser]=useState({email:'',password:''})
const updateUser=useCallback((keyname,value)=>{
const temp={...user,[keyname]:value}
setUser(temp)},[user])
const loginHandle=useCallback(async ()=>{try{
const responseData=await firebaseHandle.getInstance().auth().signInWithEmailAndPassword(user.email,user.password)
console.log('Response Data:',responseData)
}catch(error){console.log('Error:',error)}},[user.email,user.password])

const goToSignup=useCallback(()=>{
navigation.navigate('signup')},[])
return{user,updateUser,loginHandle,goToSignup}}
export default useLogin