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
var styles = require('./styles/order.css');  //样式文件

var Order = React.createClass({
    render:function(){
       return (        
         <View>
           <View style={styles.title}>
           <Text style={styles.fontwhite}>我的订单</Text>
           </View>
          <View>
            <View style={styles.mbox}>
              <Image source={require('./images/ordericon.png')}></Image>
              <Text>我的外卖</Text>
            </View>
            <View style={styles.mbox}>
              <Image source={require('./images/ordericon.png')}></Image>
              <Text>我的点菜</Text>
            </View>
            <View style={styles.mbox}>
              <Image source={require('./images/ordericon.png')}></Image>
              <Text>我的支付</Text>
            </View>
         </View>
         </View>
        
       )
    }
});

module.exports = Order;
