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
var styles = require('./styles/home.css');  //样式文件
var Delivery = require('./delivery');
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
      <TouchableOpacity onPress={this.props._onPress}>
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

var Home = React.createClass({
   render:function(){
     return(
       <View style={styles.container}>
         <DefaultLogo/>
         <DefaultBanner/>
         <WaiMai _onPress={()=>{this.props.navigator.push({name:'delivery',component:Delivery})}} />
         <View style={styles.additional_con}>
           <AdditionalPay/>
           <AdditionalDine/>
         </View>
       </View>
     )
   }
})
module.exports = Home
