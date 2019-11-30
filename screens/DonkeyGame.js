import React, {Component} from 'react'
import {Dimensions,Button,ImageBackground,Text,TouchableOpacity,Image} from 'react-native'
import {connect} from 'react-redux'
const {w,h}=Dimensions.get("window")
class DonkeyGame extends Component{
constructor(props){
super(props)
this.state={n1:null,n2:null,answer:null,x:"?",msg:"",score:0,dis:true}}
generateQuestion=()=>{var num1=Math.floor(Math.random()*100)+1
var num2=Math.floor(Math.random()*100)+1
this.setState({n1:num1,n2:num2,answer:num1+num2})}
componentDidMount(){this.generateQuestion()}
render(){return(<ImageBackground source={this.props.Jungle} style={{width:'100%',height:'100%'}} resizeMode='cover'>
<Text style={{color:"white",fontSize:25,textAlign:"center",top:20}}>{this.state.n1}+{this.state.n2}={this.state.x}</Text>
<TouchableOpacity onPress={()=>this.setState(previousState=>({dis:false,x:previousState.answer,msg:"WRONG"}))}><Text style={{color:"white"}}>{this.state.answer-1}</Text></TouchableOpacity><TouchableOpacity onPress={()=>{this.setState({dis:false,msg:"CORRECT",x:this.state.answer,score:this.state.score+1})
if(this.state.wins==3){if(this.props.item==1){this.props.GetCarrot()}
else{this.props.GetMedicine()}
setTimeout(()=>this.props.navigation.navigate('DonkeyScreen'),1500)}}}><Text style={{color:"white"}}>{this.state.answer}</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>this.setState(previousState=>({dis:false,x:previousState.answer,msg:"WRONG"}))}><Text style={{color:"white"}}>{this.state.answer+1}</Text></TouchableOpacity><TouchableOpacity onPress={()=>this.setState(previousState=>({dis:false,x:previousState.answer,msg:"WRONG"}))}><Text style={{color:"white"}}>{this.state.answer+10}</Text></TouchableOpacity>
<Text style={{fontSize:40,textAlign:"center"}}>{this.state.msg}</Text>
<Button disabled={this.state.dis} onPress={()=>{this.generateQuestion()
this.setState({dis:true,x:"?",msg:""})}} title="Next Question"/>
<Text style={{color:"white",top:100*4/5,fontSize:30,textAlign:"center"}}>{this.state.score}</Text>
<Image source={this.props.donkey} style={{top:'10%',left:'50%',height:'40%',width:'40%'}}/>
</ImageBackground>)}}

function mapStateToProps(state){return{Jungle:state.Jungle,donkey:state.DonkeyFace,item:state.item}}
function mapDispatchToProps(dispatch){return{GetCarrot:()=>dispatch({type:"Get_Carrot"}),GetMedicine:()=>dispatch({type:"Get_Medicine"})}}

export default connect(mapStateToProps,mapDispatchToProps)(DonkeyGame)