import React, {Component} from 'react'
import {View,Button,Text} from 'react-native'
import {vibrate} from './utils'
export default class PomodoroTimer extends Component{
constructor(props){super(props)
this.start=this.start.bind(this)
this.stop=this.stop.bind(this)
this.reset=this.reset.bind(this)
this.tick=this.tick.bind(this)
this.state={m:'25',s:'00',dis:true,msg:"WORK"}}
tick(){if(parseInt(this.state.m)==0 && parseInt(this.state.s)==0){
if(this.state.msg=="WORK"){this.setState({msg:"BREAK",m:'05',s:'00'})}
else{this.setState({msg:"WORK",m:'25',s:'00'})}
vibrate()}
else{
/*if(parseInt(this.state.m)<10){this.setState(previousState=>({m:'0'+String(parseInt(previousState.m))}))}
if(parseInt(this.state.s)<10){this.setState(previousState=>({s:'0'+String(parseInt(previousState.s))}))}*/

if(parseInt(this.state.s)!=0){this.setState(previousState=>({s:String(parseInt(previousState.s)-1)}))
if(parseInt(this.state.s)<10){this.setState(previousState=>({s:'0'+String(parseInt(previousState.s))}))}}
else{this.setState(previousState=>({m:String(parseInt(previousState.m)-1),s:'59'}))
if(parseInt(this.state.m)<10){this.setState(previousState=>({m:'0'+String(parseInt(previousState.m))}))}}}}
start(){let x=setInterval(this.tick,1000)
this.setState({x:x,dis:false})}
stop(){
clearInterval(this.state.x)
this.setState({dis:true})}
reset(){
clearInterval(this.state.x)
this.setState({m:'25',s:'00',msg:"WORK",dis:true})}
render(){return(<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Text style={{fontSize:50,textAlign:"center"}}>{this.state.msg}</Text>
<Text style={{fontSize:50,textAlign:"center"}}>{this.state.m}:{this.state.s}</Text>
<Button onPress={this.start} title="Start" disabled={!this.state.dis}/>
<Button disabled={this.state.dis} onPress={this.stop} title="Stop"/>
<Button onPress={this.reset} title="Reset"/>
<Text style={{fontSize:30}}>END productions</Text>
</View>)}}