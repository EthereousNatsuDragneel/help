import React, {Component} from 'react'
import {View,Text,Image,TouchableOpacity,ImageBackground} from 'react-native'
import {connect} from 'react-redux'

class FoxGame extends Component{
constructor(props){
super(props)
this.state={wins:0,fox:this.props.Question,user:this.props.Question,random:null,jungle:this.props.Jungle,rock:this.props.Rock,Paper:this.props.Paper,Scissor:this.props.Scissor}}
generateFox=()=>{var x=Math.floor(Math.random()*100)+1
this.setState({random:x%3})}
rock=()=>{this.generateFox()
if(this.state.random==2){this.setState(previousState=>({wins:previousState.wins+1,fox:previousState.Scissor}))}
else if(this.state.random==1){this.setState(previousState=>({fox:previousState.Paper}))}
else{this.setState(previousState=>({fox:previousState.Rock}))}
this.setState(previousState=>({user:previousState.Rock}))
if(this.state.wins==3){if(this.props.item==1){this.props.GetCarrot()}
else{this.props.GetMedicine()}
setTimeout(()=>this.props.navigation.navigate('Up3Right2'),1500)}}
paper=()=>{this.generateFox()
if(this.state.random==0){this.setState(previousState=>({wins:previousState.wins+1,fox:previousState.Rock}))}
else if(this.state.random==1){this.setState(previousState=>({fox:previousState.Paper}))}
else{rethis.setState(previousState=>({fox:previousState.Rock}))}
this.setState(previousState=>({user:previousState.Paper}))
if(this.state.wins==3){if(this.props.item==1){this.props.GetCarrot()}
else{this.props.GetMedicine()}
setTimeout(()=>this.props.navigation.navigate('Up3Right2'),1500)}}
scissor=()=>{this.generateFox()
if(this.state.random==1){this.setState(previousState=>({wins:previousState.wins+1,fox:previousState.Paper}))}
else if(this.state.random==2){this.setState(previousState=>({fox:previousState.Scissor}))}
else{this.setState(previousState=>({fox:previousState.Rock}))}
this.setState(previousState=>({user:previousState.Scissor}))
if(this.state.wins==3){if(this.props.item==1){this.props.GetCarrot()}
else{this.props.GetMedicine()}
setTimeout(()=>this.props.navigation.navigate('Up3Right2'),1500)}}
render(){return(<ImageBackground source={this.state.jungle} style={{flex:1}}><View style={{height:'70%',width:'100%'}}>
<Text style={{fontSize:25,textAlign:"center",top:25}}>ROCK PAPER SCISSOR</Text>
<Text style={{fontSize:25,top:60,textAlign:"center"}}>{this.state.wins}</Text>
<Image source={this.state.user} style={{height:128,width:128,left:64,top:160,position:'absolute'}}/>
<Image source={this.state.fox} style={{left:256,top:160,height:128,width:128,position:'absolute'}}/>

</View><View style={{flex:1,flexDirection:"row"}}>
<View style={{flex:1,alignSelf:"stretch"}}><TouchableOpacity onPress={()=>this.rock()}><Image style={{height:'100%',width:'100%'}} source={this.state.Rock}/></TouchableOpacity></View>
<View style={{flex:1,alignSelf:"stretch"}}><TouchableOpacity onPress={()=>this.paper()}><Image style={{height:'100%',width:'100%'}} source={this.state.Paper}/></TouchableOpacity></View>
<View style={{flex:1,alignSelf:"stretch"}}><TouchableOpacity onPress={()=>this.scissor()}><Image style={{height:'100%',width:'100%'}} source={this.state.Scissor}/></TouchableOpacity></View>
</View></ImageBackground>)}}

function mapStateToProps(state){return{Jungle:state.Jungle,Rock:state.Rock,Paper:state.Paper,Scissor:state.Scissor,Question:state.Question,item:state.item}}
function mapDispatchToProps(dispatch){return{GetCarrot:()=>dispatch({type:"Get_Carrot"}),GetMedicine:()=>dispatch({type:"Get_Medicine"})}}

export default connect(mapStateToProps,mapDispatchToProps)(FoxGame)