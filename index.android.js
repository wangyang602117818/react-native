/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

var singleshop =  React.createClass({

  render:function() {

    return (
      <View style={styles.container}>
        <View style={styles.logo_con}>
          <Image style={styles.logo_img} source={require('./images/defaultlogo.jpg')}></Image>
        </View>
        <View style={styles.banner_con}>
          <Image style={styles.banner_img} source={require('./images/defaultbanner.jpg')}></Image>
        </View>
        <View style={styles.waimai_bg}>
          <View style={styles.tip_con}>
            <Text style={styles.tip_biger}>外卖订餐</Text>
            <Text style={styles.tip_smaller}>足不出户 享受一流美食</Text>
          </View>
          <View style={styles.img_con}>
            <Image style={styles.single_logo} source={require('./images/wm.png')}></Image>
          </View>
        </View>
        <View style={styles.additional_con}>
           <View style={styles.pay_con}>
              <View style={styles.tip_con}>
                <Text style={styles.tip_biger}>支付</Text>
                <Text style={styles.tip_smaller}>一键快捷支付</Text>
              </View>
              <View style={styles.img_con}>
                <Image style={styles.single_logo} source={require('./images/zf.png')}></Image>
              </View>
           </View>
           <View style={styles.dine_con}>
             <View style={styles.tip_con}>
               <Text style={styles.tip_biger}>店内点餐</Text>
               <Text style={styles.tip_smaller}>轻轻一点,马上吃饭</Text>
             </View>
             <View style={styles.img_con}>
               <Image style={styles.single_logo} source={require('./images/dc.png')}></Image>
             </View>
           </View>
        </View>
        <View style={styles.footer}>

        </View>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F5',
    borderWidth:1,
    borderColor:'red',
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
    marginLeft:5,
    marginRight:5,
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
