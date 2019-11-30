import React, {Component} from 'react'
import {View,Text,Image} from 'react-native'
import {connect} from 'react-redux'
class ItemsScreen extends Component{
render(){if(this.props.itemPic!=null){return(<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:50,textAlign:"center",color:"white"}}>ITEMS</Text>
<Image source={this.props.itemPic} style={{height:'100%',width:'100%'}}/>
</View>)}
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:50,textAlign:"center",color:"white"}}>ITEMS{'\n'}</Text>
<Text style={{color:"white",textAlign:"center",fontSize:30}}>No Items</Text>
</View>)}}

function mapStateToProps(state){
return{itemPic:state.itemPic}}

function mapDispatchToProps(dispatch){return {
GiveBanana:()=>dispatch({type:'Give_Banana'}),
GiveMedicine:()=>dispatch({type:'Give_Medicine'}),
GiveCarrot:()=>dispatch({type:'Give_Carrot'})}}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsScreen)