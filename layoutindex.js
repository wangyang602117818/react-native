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
  ScrollView,
  View
} from 'react-native';
//布局页,用于承载状态栏和点击状态栏后显示的页面
var styles = require('./styles/layoutindex.css');  //样式
var Home = require('./home');  //
var Order = require('./order');
var Me = require('./me');
var LayoutIndex = React.createClass({
    getInitialState:function(){
        return {
          InitSubPage:Home,
          homestyle:styles.tab_on,
          orderstyle:'',
          mestyle:''
        }
    },
    _onPressHome:function(){
      this.setState({
        InitSubPage:Home,
        homestyle:styles.tab_on,
        orderstyle:'',
        mestyle:''
      });
    },
    _onPressOrder:function(){
        this.setState({
          InitSubPage:Order,
          homestyle:'',
          orderstyle:styles.tab_on,
          mestyle:''
        });
    },
    _onPressMe:function(){
        this.setState({
          InitSubPage:Me,
          homestyle:'',
          orderstyle:'',
          mestyle:styles.tab_on
        });
    },
    render:function(){
        var InitSubPage = this.state.InitSubPage;  //代表首页布局的内嵌页面
        return (
          <View style={styles.con}>
            <View style={styles.page_con}>
              <ScrollView>
                <InitSubPage navigator={this.props.navigator}/>
              </ScrollView>
            </View>
            <View style={styles.tab_bar}>
                <TouchableOpacity style={styles.tab_item} onPress={this._onPressHome}>
                  <View>
                      <Image source={require('./images/home.png')}/>
                      <Text style={[styles.tab_txt,this.state.homestyle]}>首页</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab_item} onPress={this._onPressOrder}>
                  <View>
                    <Image source={require('./images/dingdan.png')}/>
                    <Text style={[styles.tab_txt,this.state.orderstyle]}>订单</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab_item} onPress={this._onPressMe}>
                  <View>
                    <Image source={require('./images/wode.png')}/>
                    <Text style={[styles.tab_txt,this.state.mestyle]}>我的</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
      )
    }
})

module.exports = LayoutIndex;
