'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
var styles = require('./styles/me.css');  //样式文件
var Me = React.createClass({

    render:function(){
       return (
         <View>
            <View style={styles.title}>
            <Text>用户登录</Text>
            </View>
            <View>
               <View style={styles.loginmethod}>
                <View style={styles.phonelogin}><Text style={styles.red}>手机登录</Text></View>
                <View style={styles.accountlogin}><Text style={styles.fontwhite}>账号登录</Text></View>
               </View>
            </View>
            <View>
              <TextInput style={styles.input} placeholder='输入手机号'></TextInput>              
              <TextInput style={styles.input} placeholder='输入验证码'></TextInput>
              <Text style={styles.sendyzm}>发送验证码</Text>
            </View>
            <TouchableOpacity style={styles.loginbtn}><Text style={styles.fontwhite}>登录</Text></TouchableOpacity>
         </View>
       )
    }
})
module.exports = Me;

