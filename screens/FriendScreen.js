import React, {Component} from 'react'
import {BackHandler,View,Dimensions,Image,Button,ImageBackground,TouchableOpacity,Text,Alert} from 'react-native'
import {connect} from 'react-redux'

const {width,height}=Dimensions.get("window")
class FriendScreen extends Component{
constructor(props){
super(props)
this.state={vAlternate:0,hAlternate:0,c:1,kekadu:this.props.FRest,rabbit:this.props.LRabbit}}
walkDown=()=>{if((this.props.y<240 && this.props.x<208) || this.props.y<208){
//walkDown code
if(this.state.vAlternate==0){
this.setState(previousState=>({c:1,vAlternate:1,kekadu:this.props.DWalk1}))
this.props.kdown()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.DRest,vAlternate:previousState.vAlternate+previousState.c}))
this.props.kdown()}
else{this.setState(previousState=>({kekadu:this.props.DWalk2,vAlternate:1,c:-1}))
this.props.kdown()}
this.walking=setTimeout(this.walkDown,300)}
else if(this.props.y>192 && this.props.x>192){this.setState({rabbit:this.props.FRabbit})
if(this.props.BananaCount==1){this.props.GiveBanana()
this.props.uh()
this.props.new()}
else if(this.props.CarrotCount==1){this.props.GiveCarrot()
this.props.uh()
this.props.new()}
else if(this.props.MedicineCount==1){this.props.GiveMedicine()
this.props.uh()
this.props.new()}
else{if(this.props.talk==0){this.props.new()}
this.props.navigation.navigate('RabbitFace')}
this.props.navigation.navigate('RabbitFace')}
else{this.setState(previousState=>({kekadu:this.props.DRest}))}}
walkUp=()=>{if(this.props.x>80 || this.props.y>144){
//walkUp code
if(this.state.vAlternate==0){
this.setState(previousState=>({c:1,vAlternate:1,kekadu:this.props.FWalk1}))
this.props.kup()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.FRest,vAlternate:previousState.vAlternate+previousState.c}))
this.props.kup()}
else{this.setState(previousState=>({kekadu:this.props.FWalk2,vAlternate:1,c:-1}))
this.props.kup()}
this.walking=setTimeout(this.walkUp,300)
if(this.props.y<16){this.props.GoUp1()
this.props.navigation.navigate('Up1')}}
else{this.setState(previousState=>({kekadu:this.props.FRest}))}}
walkLeft=()=>{if(this.props.x>80 || this.props.y>144){
//walkLeft Code
if(this.state.hAlternate==0){
this.setState(previousState=>({c:1,hAlternate:1,kekadu:this.props.LWalk1}))
this.props.kleft()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.LRest,hAlternate:previousState.hAlternate+previousState.c}))
this.props.kleft()}
else{this.setState(previousState=>({kekadu:this.props.LWalk2,hAlternate:1,c:-1}))
this.props.kleft()}
this.walking=setTimeout(this.walkLeft,300)
if(this.props.x<16){this.props.GoLeft1()
this.props.navigation.navigate('Left1')}}
else{this.setState(previousState=>({kekadu:this.props.LRest}))}}
walkRight=()=>{if(this.props.x<208 || (this.props.y<208 && this.props.x<240)){
//walkRight code
if(this.state.hAlternate==0){
this.setState(previousState=>({c:1,hAlternate:1,kekadu:this.props.RWalk1}))
this.props.kright()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.RRest,hAlternate:previousState.hAlternate+previousState.c}))
this.props.kright()}
else{this.setState(previousState=>({kekadu:this.props.RWalk2,hAlternate:1,c:-1}))
this.props.kright()}
this.walking=setTimeout(this.walkRight,300)}
else if(this.props.y>208 && this.props.x>208){this.setState({rabbit:this.props.LRabbit})
if(this.props.BananaCount==1){this.props.GiveBanana()
this.props.uh()
this.props.new()}
else if(this.props.CarrotCount==1){this.props.GiveCarrot()
this.props.uh()
this.props.new()}
else if(this.props.MedicineCount==1){this.props.GiveMedicine()
this.props.uh()
this.props.new()}
else{this.props.navigation.navigate('RabbitFace')}
this.props.navigation.navigate('RabbitFace')}
else{this.setState(previousState=>({kekadu:this.props.RRest}))}}
stop=()=>clearTimeout(this.walking)
render(){return(<View style={{flex:1}}><View style={{height:'70%',width:'100%',backgroundColor:"green",flexDirection:"row"}}>
<Image source={this.state.kekadu} style={{height:32,width:32,top:this.props.y,left:this.props.x}}/>
<Image source={this.state.rabbit} style={{position:'absolute',height:32,width:32,left:240,top:240}}/>
<Image source={this.props.Tree} style={{top:32,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.Tree} style={{top:96,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.Tree} style={{top:32,left:288,position:'absolute',height:64,width:64}}/>
<Image source={this.props.Tree} style={{top:96,left:288,position:'absolute',height:64,width:64}}/>

<Image source={this.props.Tree} style={{top:160,left:288,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.Tree} style={{top:224,left:288,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.Tree} style={{top:288,left:288,height:64,width:64,position:'absolute'}}/>

<Image source={this.props.Tree} style={{top:288,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.Tree} style={{top:288,left:96,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.Tree} style={{top:288,left:160,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.Tree} style={{top:288,left:224,height:64,width:64,position:'absolute'}}/>

</View>
<View style={{flex:1,flexDirection:"row"}}>
<View style={{flex:1,alignSelf:"stretch",backgroundColor:"black"}}/>
<View style={{flex:1,alignSelf:"stretch"}}>
<TouchableOpacity onPressIn={this.walkUp} onPressOut={this.stop}><Image source={this.props.up} style={{height:'100%',width:'100%'}}/></TouchableOpacity>
</View><View style={{flex:1,alignSelf:"stretch",backgroundColor:"black"}}/></View>
<View style={{flex:1,flexDirection:"row"}}><View style={{flex:1,alignSelf:"stretch"}}>
<TouchableOpacity onPressIn={this.walkLeft} onPressOut={this.stop}><Image style={{height:'100%',width:'100%'}} source={this.props.left}/></TouchableOpacity></View>
<View style={{flex:1,alignSelf:"stretch"}}><TouchableOpacity onPressIn={this.walkDown} onPressOut={this.stop}><Image style={{height:'100%',width:'100%'}} source={this.props.down}/></TouchableOpacity></View>
<View style={{flex:1,alignSelf:"stretch"}}><TouchableOpacity onPressIn={this.walkRight} onPressOut={this.stop}><Image style={{height:'100%',width:'100%'}} source={this.props.right}/></TouchableOpacity></View>
</View></View>)}}

function mapStateToProps(state){
return{up:state.up,down:state.down,right:state.right,left:state.left,DRest:state.DRest,DWalk1:state.DWalk1,DWalk2:state.DWalk2,FRest:state.FRest,FWalk1:state.FWalk1,FWalk2:state.FWalk2,LRest:state.LRest,LWalk1:state.LWalk1,LWalk2:state.LWalk2,RRest:state.RRest,RWalk1:state.RWalk1,RWalk2:state.RWalk2,Tree:state.Tree,x:state.x,y:state.y,BananaCount:state.BananaCount,CarrotCount:state.CarrotCount,MedicineCount:state.MedicineCount,LRabbit:state.LRabbit,FRabbit:state.FRabbit,talk:state.talk}}

function mapDispatchToProps(dispatch){
return{GoLeft1:()=>dispatch({type:'Go_Left1'}),GiveBanana:()=>dispatch({type:'Give_Banana'}),GiveCarrot:()=>({type:'Give_Carrot'}),GiveMedicine:()=>dispatch({type:'Give_Medicine'}),new:()=>dispatch({type:'new'}),GoUp1:()=>dispatch({type:'Go_Up1'}),uh:()=>dispatch({type:'uh'}),
kleft:()=>dispatch({type:'kleft'}),kright:()=>dispatch({type:'kright'}),kup:()=>dispatch({type:'kup'}),kdown:()=>dispatch({type:'kdown'})}}

export default connect(mapStateToProps,mapDispatchToProps)(FriendScreen)