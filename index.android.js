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
var LayoutIndex = require('./layoutindex');
var Delivery = require('./delivery');  //调试这个页面
//入口
var singleshop =  React.createClass({
  render:function() {
    return (
      <Navigator
        initialRoute = {{ name: 'home',component:LayoutIndex }}
        renderScene = {this.renderScene}
        configureScene = {(route)=>{
           if(route.SceneConfig){
              return route.SceneConfig;
           }
           return Navigator.SceneConfigs.FadeAndroid;
        }}
      />
    )
  },
  renderScene:function(route, nav){
     var Component = route.component;
     return(
        <Component navigator = {nav}/>
        // <Delivery navigator = {nav}/>
     )
  }
})
AppRegistry.registerComponent('singleshop', () => singleshop);
