import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
class InstructionsScreen extends Component{
constructor(props){
super(props)
this.state={ins:this.props.ins}
}
render(){return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:30,color:"white",textAlign:"center",flex:0.8}}>{this.props.ins}</Text>
</View>)}}

function mapStateToProps(state){return{ins:state.ins}}
export default connect(mapStateToProps,null)(InstructionsScreen)