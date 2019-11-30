import React, {Component} from 'react'
import {ImageBackground,Image} from 'react-native'
import {connect} from 'react-redux'

class RabbitFace extends Component{
componentDidMount(){if(this.props.health<3){
setTimeout(()=>this.props.navigation.navigate('Home'),2000)}}
render(){if(this.props.item==0){return(<ImageBackground source={this.props.Jungle} style={{flex:1,alignItems:"center",justifyContent:"center"}}>
<Image source={this.props.Thermo} style={{height:'100%',width:'100%'}}/>
</ImageBackground>)}
if(this.props.uhl==3){return(<ImageBackground source={this.props.Jungle} style={{flex:1,alignItems:"center",justifyContent:"center"}}>
<Image source={this.props.Happy} style={{height:'100%',width:'100%'}}/>
</ImageBackground>)}
if(this.props.item==1){return(<ImageBackground source={this.props.Jungle} flex={{flex:1}}>
<Image source={this.props.Hungry} style={{height:'100%',width:'100%'}}/>
</ImageBackground>)}
if(this.props.item==2){return(<ImageBackground source={this.props.Jungle} style={{flex:1}}>
<Image source={this.props.Hit} style={{height:'100%',width:'100%'}}/>
</ImageBackground>)}
return(<ImageBackground source={this.props.Jungle} style={{flex:1}}>
<Image style={{height:'100%',width:'100%'}} source={this.props.Happy}/>
</ImageBackground>)}}
function mapStateToProps(state){return{Jungle:state.Jungle,health:state.health,Happy:state.Happy,Hungry:state.Hungry,Hit:state.Hit,Thermo:state.Thermo,uhl:state.uhl}}
export default connect(mapStateToProps,null)(RabbitFace)