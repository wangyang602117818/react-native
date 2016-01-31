/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
var Delivery = require('./delivery');
var dine = require('./dine');
//默认logo组件
class DefaultLogo extends Component{
  render(){
    return(
      <View style={styles.logo_con}>
        <Image style={styles.logo_img} source={require('./images/defaultlogo.jpg')}></Image>
      </View>
    )
  }
}
//默认banner
class DefaultBanner extends Component{
  render(){
    return(
      <View style={styles.banner_con}>
        <Image style={styles.banner_img} source={require('./images/defaultbanner.jpg')}></Image>
      </View>
    )
  }
}
//外卖组件
class WaiMai extends Component{
  render(){
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.waimai_bg}>
          <View style={styles.tip_con}>
            <Text style={styles.tip_biger}>外卖订餐</Text>
            <Text style={styles.tip_smaller}>足不出户 享受一流美食</Text>
          </View>
          <View style={styles.img_con}>
            <Image style={styles.single_logo} source={require('./images/wm.png')}></Image>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
//支付组件
class AdditionalPay extends Component{
  render(){
    return (
      <View style={styles.pay_con}>
         <View style={styles.tip_con}>
           <Text style={styles.tip_biger}>支付</Text>
           <Text style={styles.tip_smaller}>一键快捷支付</Text>
         </View>
         <View style={styles.img_con}>
           <Image style={styles.single_logo} source={require('./images/zf.png')}></Image>
         </View>
      </View>
    )
  }
}
//堂食
class AdditionalDine extends Component{
  render(){
    return (
      <View style={styles.dine_con}>
        <View style={styles.tip_con}>
          <Text style={styles.tip_biger}>店内点餐</Text>
          <Text style={styles.tip_smaller}>轻轻一点,马上吃饭</Text>
        </View>
        <View style={styles.img_con}>
          <Image style={styles.single_logo} source={require('./images/dc.png')}></Image>
        </View>
      </View>
    )
  }
}
//入口
var singleshop =  React.createClass({
  render:function() {
    return (
      <Navigator
        initialRoute = {{ id: 'start', }}
        renderScene = {this.renderScene}
        configureScene = {(route)=>{
           if(route.SceneConfig){
              return route.SceneConfig;
           }
           return Navigator.SceneConfigs.PushFromRight;
        }}
      />
    )
  },
  renderScene:function(route, nav){
    return <Delivery navigator={nav}/>
    // switch(route.id){
    //   case 'delivery':
    //     return <Delivery navigator={nav}/>
    //   default:
    //     return (
    //       <View style={styles.container}>
    //         <DefaultLogo/>
    //         <DefaultBanner/>
    //         <WaiMai
    //           onPress={()=>{
    //             nav.push({id:'delivery'})
    //           }}
    //         />
    //         <View style={styles.additional_con}>
    //           <AdditionalPay/>
    //           <AdditionalDine/>
    //         </View>
    //       </View>
    //     )
    // }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F5',
    // borderWidth:1,
    // borderColor:'red',
  },
  logo_con:{
    alignItems:'flex-start',
  },
  logo_img:{
    height:30,
    width:80,
    resizeMode:'stretch',
  },
  banner_con:{

  },
  banner_img:{
    height:95,
    width:360,    //这里不科学
    resizeMode:'stretch',
  },
  waimai_bg:{
    backgroundColor:'#FF5844',
    margin:5,
    height:80,
    borderRadius:3,
    flexDirection:'row',
  },
  tip_con:{
    flex:5,
    justifyContent:'flex-end',
    padding:5,
  },
  tip_biger:{
    color:'#FFF1EF'
  },
  tip_smaller:{
    color:'#FFF1EF',
    fontSize:11
  },
  img_con:{
    flex:3,
    alignItems:'flex-end',
    justifyContent:'center',
    padding:3,
  },
  single_logo:{
    width:70,
    height:50,
    resizeMode:'stretch'
  },
  additional_con:{
    height:80,
    marginLeft:4,
    marginRight:4,
    flexDirection:'row',
  },
  pay_con:{
    flex:1,
    backgroundColor:'#5DC549',
    borderRadius:3,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#fff',
  },
  dine_con:{
    flex:1,
    backgroundColor:'#F7B540',
    borderRadius:3,
    marginLeft:5,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#fff',
  },
  footer:{
    height:45,
    // alignSelf:'center',
    backgroundColor:'#323232',

  }
});

AppRegistry.registerComponent('singleshop', () => singleshop);
