import React, {Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
class Up4 extends Component{
constructor(props){
super(props)
this.walkUp=this.walkUp.bind(this)
this.state={hStep:16,vStep:16,vAlternate:0,hAlternate:0,c:1,kekadu:this.props.FRest}}
walkDown=()=>{if(this.props.y<304){
//walkDown code
if(this.state.vAlternate==0){
this.setState(previousState=>({c:1,vAlternate:1,kekadu:this.props.DWalk1}))
this.props.kdown()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.DRest,vAlternate:previousState.vAlternate+previousState.c}))
this.props.kdown()}
else{this.setState(previousState=>({kekadu:this.props.DWalk2,vAlternate:1,c:-1}))
this.props.kdown()}
this.walking=setTimeout(this.walkDown,300)}
else{this.setState(previousState=>({kekadu:this.props.DRest}))
this.props.GoUp3()
this.props.navigation.navigate('Up3')}}
walkUp=()=>{if(this.props.y>80){
//walkUp code
if(this.state.vAlternate==0){
this.setState(previousState=>({c:1,vAlternate:1,kekadu:this.props.FWalk1}))
this.props.kup()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.FRest,vAlternate:previousState.vAlternate+previousState.c}))
this.props.kup()}
else{this.setState(previousState=>({kekadu:this.props.FWalk2,vAlternate:1,c:-1}))
this.props.kup()}
this.walking=setTimeout(this.walkUp,300)}
else{this.setState(previousState=>({kekadu:this.props.FRest}))
if(this.props.item==0 && this.props.gotItem==0){
this.props.GetBanana()}}}
walkLeft=()=>{if(this.props.x>80){
//walkLeft Code
if(this.state.hAlternate==0){
this.setState(previousState=>({c:1,hAlternate:1,kekadu:this.props.LWalk1}))
this.props.kleft()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.LRest,hAlternate:previousState.hAlternate+previousState.c}))
this.props.kleft()}
else{this.setState(previousState=>({kekadu:this.props.LWalk2,hAlternate:1,c:-1}))
this.props.kleft()}
this.walking=setTimeout(this.walkLeft,300)}
else{this.setState(previousState=>({kekadu:this.props.LRest}))}}
walkRight=()=>{if(this.props.x<240){
//walkRight code
if(this.state.hAlternate==0){
this.setState(previousState=>({c:1,hAlternate:1,kekadu:this.props.RWalk1}))
this.props.kright()}
else if(this.state.vAlternate==1){this.setState(previousState=>({kekadu:this.props.RRest,hAlternate:previousState.hAlternate+previousState.c}))
this.props.kright()}
else{this.setState(previousState=>({kekadu:this.props.RWalk2,hAlternate:1,c:-1}))
this.props.kright()}
this.walking=setTimeout(this.walkRight,300)}
else{this.setState(previousState=>({kekadu:this.props.RRest}))}}
stop=()=>clearTimeout(this.walking)
render(){return(<View style={{flex:1}}><View style={{height:'70%',width:'100%',backgroundColor:"green",flexDirection:"row"}}>
<Image source={this.state.kekadu} style={{position:'absolute',left:this.props.x,top:this.props.y,height:32,width:32}}/>

<Image source={this.props.BananaTree} style={{top:32,left:32,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.BananaTree} style={{top:32,left:288,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.BananaTree} style={{top:32,left:224,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.BananaTree} style={{top:32,left:160,height:64,width:64,position:'absolute'}}/>
<Image source={this.props.BananaTree} style={{top:32,left:96,height:64,width:64,position:'absolute'}}/>

<Image source={this.props.Tree} style={{position:'absolute',left:32,top:160,width:64,height:64}}/>
<Image source={this.props.Tree} style={{position:'absolute',top:224,left:32,width:64,height:64}}/>
<Image source={this.props.Tree} style={{position:'absolute',top:96,left:32,width:64,height:64}}/>
<Image source={this.props.Tree} style={{position:'absolute',top:288,left:32,width:64,height:64}}/>

<Image source={this.props.Tree} style={{position:'absolute',left:288,top:160,width:64,height:64}}/>
<Image source={this.props.Tree} style={{position:'absolute',top:224,left:288,width:64,height:64}}/>
<Image source={this.props.Tree} style={{position:'absolute',top:288,left:288,width:64,height:64}}/>
<Image source={this.props.Tree} style={{position:'absolute',top:96,left:288,width:64,height:64}}/>

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
return{up:state.up,down:state.down,right:state.right,left:state.left,DRest:state.DRest,DWalk1:state.DWalk1,DWalk2:state.DWalk2,FRest:state.FRest,FWalk1:state.FWalk1,FWalk2:state.FWalk2,LRest:state.LRest,LWalk1:state.LWalk1,LWalk2:state.LWalk2,RRest:state.RRest,RWalk1:state.RWalk1,RWalk2:state.RWalk2,Tree:state.Tree,x:state.x,y:state.y,
BananaTree:state.BananaTree,gotItem:state.gotItem,item:state.item}}

function mapDispatchToProps(dispatch){
return{GoUp3:()=>dispatch({type:'Go_Up3'}),GetBanana:()=>dispatch({type:'Get_Banana'}),
kleft:()=>dispatch({type:'kleft'}),kright:()=>dispatch({type:'kright'}),kup:()=>dispatch({type:'kup'}),kdown:()=>dispatch({type:'kdown'})}}

export default connect(mapStateToProps,mapDispatchToProps)(Up4)